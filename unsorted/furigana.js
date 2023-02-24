// Vision: Turn this into a library!
// besides being able to call functions this should also automatically parse HTML tags
// <div data-better-furigana>猫[ねこ]</div> should render the rubys inside properly
// this obv also should have options like <div ... data-better-furigana-render-pitch-at="#other-elem">
// or osmething like that

const examples = [
    "猫[ねこ]",
    "役に立つ[や/く\\_た_]",
    "相槌[あ/いづ\\ち]",
    "我輩[わ/がはい]は|猫[ね\\こ]である"  
];

console.log("Examples:", examples);

const parsed = examples.map(e => parse(e));

console.log("Parsed:\n", parsed);

console.log("Rendered:\n", examples.map(e => render(e)));

function parse(str) {
    const regex = new RegExp("(\\p{L}+)\\[([\\p{L}/\\\\_]+)\\]", "ugm");
    const result = [];
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        result.push(m);
    }
    return result;
}

// TODO: add configuration options
function render(str) {
    const parsed = parse(str);
    if (parsed.length === 0) {
        return "";
    }
    
    for (let component of parsed) {
        // TODO: add seperate function to render hiragana but with pitch accent
        // e.g. 私見[し/けん] becomes し/けん
        // TODO: add automatic categorisation to a pattern like Heiban, Nakadaka, etc.
        const rubyString = rubify(component[1], component[2]);
        str = str.replace(component[0], rubyString);
    }
    
    // remove "|" as a special delimiter
    return str;
}

function rubify(word, annotation) {
    const annotationParts = annotation.split("");
    
    const result = [];
    let wordIndex = 0;
    
    for (let i = 0; i < annotationParts.length; i++) {
        const annotation = annotationParts[i];
        
        if (annotation === "/" || annotation === "\\") {
            continue;
        }
        
        if (annotation === "|") {
            wordIndex++;
            continue;
        }
        
        if (annotation === "_") {
            wordIndex += 2;
            result.push(null);
            continue;
        }
        
        if (!result[wordIndex]) {
            result[wordIndex] = [];
        }
        
        const elementBefore = i > 0 ? annotationParts[i - 1] : null;
        const nextElement = i < annotationParts.length - 1 ? annotationParts[i + 1] : null;
        
        const elem = {val: annotation};
        
        if (elementBefore === "/") {
            elem.pitchUp = true;
        }
        
        if (nextElement === "\\") {
            elem.pitchDown = true;
        }
        
        result[wordIndex].push(elem);
    }
    
    const renderLetter = (elem) => {
        return elem.val;
    };
    
    const makeRuby = (word, annotation) => {
        return `<ruby>${word}<rt>${annotation}</rt></ruby>`;
    }
    
    if (result.length === 1) {
        return `<span class="word">${makeRuby(word, result[0].map(renderLetter).join(""))}</span>`;
    }
    
    const wordParts = word.split("");
    
    const wordMap = {};
    
    for (let i = 0; i < wordParts.length; i++) {
        const p = wordParts[i];
        wordMap[p] = result[i];
    }
    
    console.log(`${word}[${annotation}]`, wordMap);
    
    let wordString = "";
    
    for (let wordPart of Object.keys(wordMap)) {
        const annotations = wordMap[wordPart];
        
        if (annotations === null) {
            wordString += wordPart;
            continue;
        }
        
        wordString += makeRuby(wordPart, annotations.map(renderLetter).join(""));
    }
    
    return `<span class="word">${wordString}</span>`;
}