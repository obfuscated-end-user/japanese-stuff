// VARIABLES
const a = document.createElement("a");                              // Temporary element used for language switch.
a.style.display = "none";

const u = document.getElementsByClassName("unhighlightable")[0];    // For appending the temporary element.
const ankiHTML = document.getElementById("anki-html");              // Read-only HTML code generated from the fields above.
const preview = document.getElementById("preview");                 // Preview box at the bottom of the left side of the page.
const disclaimer = document.getElementById("disclaimer");           // "I apologize if the UI is a bit confusing..."
const notice1 = document.getElementById("notice1");                 // "Content inside iframe should not be affected..."
const notice2 = document.getElementById("notice2");                 // "If the content below..."
const searchBar = document.getElementById("search-bar");            // The search bar to get entries from.
const iframeHeader = document.getElementById("iframe-header");      // The header above the iframe that shows what is being searched by the user.
const iframe = document.getElementById("external-content");         // The iframe on the right side of the page.
const body = document.body;                                         // body
const allRightsReserved = document.getElementById("all-rights-reserved");   // "All rights reserved." at the bottom of the left side of the page.
const variationSelectorsDropdown = document.getElementById("variation-selectors-dropdown"); // Select variation selector dropdown list.

// Preset radio buttons.
const radioPresets = {
    conversionMode: document.getElementsByName("conversion-mode"),
    hiraganaOnly:   document.getElementById("hiragana-only-radio"),
    regularWord:    document.getElementById("regular-word-radio"),
    kanjiEntry:     document.getElementById("kanji-entry-radio"),
};

// Labels for the preset radio buttons.
const radioPresetsLabels = {
    hiraganaOnly:   document.getElementById("hiragana-only-radio-label"),
    regularWord:    document.getElementById("regular-word-radio-label"),
    kanjiEntry:     document.getElementById("kanji-entry-radio-label")
};

// Options.
const topSectionButtons = {
    setPreset:      document.getElementById("set-preset-button"),
    reset:          document.getElementById("reset-button"),
    clear:          document.getElementById("clear-button"),
    switchLanguage: document.getElementById("switch-language-button"),
    lightDarkMode:  document.getElementById("light-dark-mode-button")
};

// Textboxes for the user to type in.
const textAreas = {
    altForms:       document.getElementById("alt-forms-textarea"),
    readings:       document.getElementById("readings-textarea"),
    definitions:    document.getElementById("definitions-textarea"),
    hasKanji:       document.getElementById("haskanji-textarea"),
    examples:       document.getElementById("examples-textarea"),
    temp:           document.getElementById("temp-textarea")
};

// Headers. The colored text above each element in textAreas ^.
const headers = {
    altForms:       document.getElementById("alt-forms-header"),
    readings:       document.getElementById("readings-header"),
    definitions:    document.getElementById("definitions-header"),
    hasKanji:       document.getElementById("haskanji-header"),
    examples:       document.getElementById("examples-header"),
    temp:           document.getElementById("temporary-header"),
    preview:        document.getElementById("preview-header")
};

// Checkboxes for each header.
const checkboxes = {
    altForms:       document.getElementById("alt-forms-checkbox"),
    readings:       document.getElementById("readings-checkbox"),
    definitions:    document.getElementById("definitions-checkbox"),
    hasKanji:       document.getElementById("haskanji-checkbox"),
    examples:       document.getElementById("examples-checkbox"),
};

// Other buttons not contained in previous Objects.
// otherButtons.format and otherButtons.copy are containers with multiple buttons.
const otherButtons = {
    format:         document.getElementsByClassName("format-buttons"),
    copy:           document.getElementsByClassName("copy-buttons"),
    convertText:    document.getElementById("convert-text-button"),
    toggleVertical: document.getElementById("toggle-vertical-button"),
    search:         document.getElementById("search-button"),
};

// Table headers on the right side of the page.
const tableHeaders = {
    definitions:        document.getElementById("definitions-table-header"),
    exampleSentences:   document.getElementById("example-sentences-table-header"),
    formatSentences:    document.getElementById("format-sentences-table-header"),
};

// Radio buttons for modifying the search destination.
const radioSearchOptions = {
    searchMode:         document.getElementsByName("search-mode"),
    wiktionaryEnglish:  document.getElementById("wiktionary-english-radio"),
    wiktionaryJapanese: document.getElementById("wiktionary-japanese-radio"),
    jishoDefinitions:   document.getElementById("jisho-definitions-radio"),
    jishoKanji:         document.getElementById("jisho-kanji-radio"),
    jishoNames:         document.getElementById("jisho-names-radio"),
    jishoSentences:     document.getElementById("jisho-sentences-radio"),
    massif:             document.getElementById("massif-radio"),
    yourei:             document.getElementById("yourei-radio"),
    ejje:               document.getElementById("ejje-radio"),
    eijirou:            document.getElementById("eijirou-radio"),
    wikipediaJapanese:  document.getElementById("wikipedia-japanese-radio"),
    furiganaBunko:      document.getElementById("furigana-bunko-radio"),
    drk7jp:             document.getElementById("drk7jp-radio"),
};

// LEFT SIDE
// Sets the checkboxes depending on what radio button is selected from the three.
function setCheckboxes() {
    playClickSound();
    if (radioPresets.hiraganaOnly.checked) {
        Object.values(checkboxes).forEach(cb => cb.checked = true);
        checkboxes.readings.checked = false;
        checkboxes.hasKanji.checked = false;
    } else if (radioPresets.regularWord.checked) {
        Object.values(checkboxes).forEach(cb => cb.checked = true);
        checkboxes.hasKanji.checked = false;
    } else if (radioPresets.kanjiEntry.checked)
        Object.values(checkboxes).forEach(cb => cb.checked = true);
}

function formatGeneric(element, obj) {
    // console.log("obj", obj);
    let str = element.value;
    for (x in obj) {
        console.log("before", str);
        str = str.replaceAll(new RegExp(x, "g"), obj[x]);
        console.log("after", str);
    }
    // console.log("s", s);
    return str;
}

// Remember, if it's a div, then use innerHTML. If it's a textarea, then use value.
// Reformats the text to convert some shorthand expressions. I know, stupid function name, should've been the one at the bottom, but whatever. Mainly used for kanji in text.
function reformat(text) {
    return text.replace(/(\(|\)\[|\]|\{|\}\[|`|~|\*\^|\^\*|\r?\n)/g, match => {
        switch (match) {
            case "(":   return "<ruby>";
            case ")[":  return "<rt>";
            case "]":   return "</rt></ruby>";
            case "{":   return "<ruby><b>";
            case "}[":  return "</b><rt>";
            case "`":   return "<b>";
            case "~":   return "</b>";
            case "*^":  return "<i>";
            case "^*":  return "</i>";
            case "\n":
            case "\r\n":
                return "<br>";
        }
    });
}

// Formats the "Alternative forms" textbox.
function formatAltForms() {
    playClickSound();
    const textArea = textAreas.altForms;
    const text = textArea.value;
    // 々一-鿿㐀-䶿𠀀-𪛟𪜀-𫜹𫝀-𫠝𫠠-𬺡𬺰-𮯠𰀀-𱍊𱍐-𲎯𮯰-𮹝
    // /( |\(\w*.*\w\)|【[０-９Ａ-ｚぁ-んァ-ン一-鿿]*】|\u200b|\(\w*.*\w|\()|(?:\r\n|\r|\n|,)/g - OLD
    const combinedRegex = /( |\(\w*.*\w\)|【[０-９Ａ-ｚぁ-んァ-ン々一-鿿㐀-䶿𠀀-𪛟𪜀-𫜹𫝀-𫠝𫠠-𬺡𬺰-𮯠𰀀-𱍊𱍐-𲎯𮯰-𮹝]*】|\u200b|\(\w*.*\w|\()|(?:\r\n|\r|\n|,)/gu;
    const formattedText = text.replace(combinedRegex, (_, g) => {
        if (g !== undefined)
            return "";
        return "、";
    });
    textArea.value = formattedText;
}

// Formats the "Readings" textbox.
function formatReadings() {
    playClickSound();
    let input = textAreas.readings.value;
    input = input.replace(/^(Kun:|On:)?\s*([\s\S]*?)(?=^(Kun:|On:)?|$)/gm, (_, prefix, t) => {
        t = t.replace(/、\s+/g, "、");
        t = t.replace(/\s+-/g, "-");
        t = t.replace(/-\s+/g, "-");
        t = t.trim();
        return t;
    });
    input = input.replace(/、<br>|<br>、/g, "、");
    textAreas.readings.value = input;
    console.log("formatted readings:\n", input);
}

// Formats the "Definitions" textbox.
function formatDefinitions() {
    playClickSound();

    // Define regexes as in the second function
    const regexLp = /((\()(?=[*"\w])|(?<=<br>)(\())/g;
    const regexLs = /((\[)(?=[*"\w])|(?<=<br>)(\[))/g;
    const regexRs = /((\])(?=[*"\w])|(?<=<br>)(\]))/g;
    const regexLc = /((\{)(?=[*"\w])|(?<=<br>)(\{))/g;
    const regexNone = /[\u200b]|^\s*|^\s*(?=[.*\n])/g;
    const regexNewline = /(\n\s*)(?=[&|(\w*.*\w\)])/g;
    const regexQm = /[“”]/g;
    const regexSpacing = /(?<=[A-Za-z(&])\n(?=[\n&(])/g;
    const regexTrailingWs = /^\n$/g;

    let t = textAreas.definitions.value;

    t = t
        .replaceAll(regexLp, "&#40;")
        .replaceAll(regexLs, "&#91;")
        .replaceAll(regexRs, "&#93;")
        .replaceAll(regexLc, "&#123;")
        .replaceAll(regexQm, "\"")
        .replaceAll(regexNone, "")
        .replaceAll(regexNewline, "\n")
        .replaceAll(regexSpacing, "\n\n")
        .replaceAll(regexTrailingWs, "")
        .replaceAll("<!---->", "")
        .replaceAll("<a hidden=\"\"></a>", "");

    const keywords = ["Short for", "Alternative spelling of", "Synonym of", "Clipping of"];
    keywords.forEach(kw => {
        t = t.replaceAll(kw, `*^${kw.toLowerCase()}^*`);
    });

    textAreas.definitions.value = t;

    // const matchesRegexLp = text.match(regexLp);
    // console.log("alt-forms regexes:\nmatchesRegexLp:\n", matchesRegexLp);
}

// Formats the "Words containing this kanji" textbox.
function formatWordsContainingThisKanji() {
    playClickSound();
    let text = textAreas.hasKanji.value;

    text = text
        .replace(/((\()(?=[*"\w])|(?<=<br>)(\())/g, "&#40;")
        .replace(/((\[)(?=[*"\w])|(?<=<br>)(\[))/g, "&#91;")
        .replace(/((\])(?=[*"\w])|(?<=<br>)(\]))/g, "&#93;")
        .replace(/((\{)(?=[*"\w])|(?<=<br>)(\{))/g, "&#123;")
        .replace(/[“”]/g, "\"")
        .replace(/[\u200b]|^\s*|^\s*(?=[.*\n])/gm, "")
        .replace(/(\n\s*)(?=[&|(\w*.*\w\)])/g, "\n")
        .replace(/\(<i>/g, "&#40;")
        .replace(/<\/i>\)/g, ")")
        .replace(/(?<=[\w)\]])(<br>|<br><br>)(?=[\w(\[])/g, " ;; ")
        .replace(/(<i>|<\/i>)/g, "")
        .replace(/‐/g, "-");

    text = text.replace(/<br>\(/g, "<br>&#40;").replace(/<br>&#40;<i>/g, " ;; &#40;");
    textAreas.hasKanji.value = text;
}

// Formats the "Example usage" textbox.
function formatExamples() {
    playClickSound();
    const replacements = {
        "<ruby><rb>":               "(",
        "</rb><rp>(</rp><rt>":      ")[",
        "</rt><rp>)</rp></ruby>":   "]",
        "<ruby>":                   "(",
        "<rt>":                     ")[",
        "</rt></ruby>":             "]",
        "()[]":                     "",
        "{}[]":                     "",
        "<b>":                      "`",
        "</b>":                     "~",
        "(<rb>":                    "(",
        "</rb>)":                   ")"
    };

    const pattern = new RegExp(Object.keys(replacements).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
    textAreas.examples.value = textAreas.examples.value.replace(pattern, match => replacements[match]);

    // TBD
    // add an option that adds boldface to the target word, mostly likely:
    // 1. get the word on the search bar
    // 2. use regex magic to apply bold tags on the example sentences textbox, based on what was on the search bar
    // 3. try to format empty "containers", e.g. ()[] and {}[]
    // let test1 = searchBar.value;
    // let test2 = examplesTextArea.value;
    // console.log(test1);
    // console.log(test2);
}

// Adds all of text in the textboxes into one big string, and put it in the HTML box and the preview box below.
function convertText() {
    playClickSound();
    let final = "";
    let finalWithColors = "";
    const config = [
        { key: "altForms", className: "alt-forms", color: "#f00" },
        { key: "readings", className: "readings", color: "#daa520" },
        { key: "definitions", className: "definitions", color: "#32cd32" },
        { key: "hasKanji", className: "haskanji", color: "#00f", prefix: "words with this kanji:<br>" },
        { key: "examples", className: "examples", color: "#f0f" },
    ];

    let firstAdded = false;

    for (const { key, className, color, prefix="" } of config) {
        if (checkboxes[key].checked) {
            if (firstAdded) {
                final += "<br><br>";
                finalWithColors += `<span style='color: ${color};'>&lt;br&gt;&lt;br&gt;</span>`;
            }
            const rawText = textAreas[key].value;
            const reformatted = reformat(rawText);
            const escaped = reformatted.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
            final += `<span class="${className}">${prefix}${reformatted}</span>`;
            finalWithColors += `<span style='color: ${color};'>&lt;span class="${className}"&gt;${escaped ? prefix.replace(/<br>/g, "&lt;br&gt;") : ""}${escaped}&lt;/span&gt;</span>`;
            firstAdded = true;
        }
    }

    ankiHTML.innerHTML = finalWithColors;
    preview.innerHTML = final;
    preview.value = final;
}

// Copies text to the clipboard.
async function copy(text) {
    playClickSound();
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error("EPIC FAIL: ", err);
            return false;
        }
    } else {
        console.warn("not supported :(");
        return false;
    }
}

// The default ticked checkboxes.
headers.altForms.style.color = "#f00";
headers.readings.style.color = "#daa520";
headers.definitions.style.color = "#32cd32";
headers.examples.style.color = "#f0f";

// Changes the color of an associated header text to a specified color.
function toggleHeaderColor(e, header, color) {
    header.style.color = e.currentTarget.checked ? color : (body.classList.contains("light-mode") ? "#000" : "#fff");
}

// Changes the orientation of the example sentences in the preview below.
function toggleVertical() {
    playClickSound();
    const examples = document.getElementsByClassName("examples")[0];
    if (examples) {
        const isVertical = examples.style.writingMode === "vertical-rl";

        examples.style.writingMode = isVertical ? "horizontal-tb" : "vertical-rl";
        examples.style.float = isVertical ? "none" : "right";

        const isHorizontal = examples.style.writingMode === "horizontal-tb";

        otherButtons.toggleVertical.innerHTML = u.contains(a) ? (isHorizontal ? "縦 （↓）" : "横 （→）") : (isHorizontal ? "vertical （↓）" : "horizontal （→）");
    }
    
}

// Copyright year at the bottom of the page. May be inaccurate in like, a few decades. Or even tomorrow.
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

// RIGHT SIDE
// for the iframe header thing at the right
function getSourceOptions() {
    return [
        { option: radioSearchOptions.wiktionaryEnglish, url: `https://en.wiktionary.org/wiki/${searchBar.value}#Japanese`, label: "English Wiktionary" },
        { option: radioSearchOptions.wiktionaryJapanese, url: `https://ja.wiktionary.org/wiki/${searchBar.value}#日本語`, label: "ウィクショナリー日本語版" },
        { option: radioSearchOptions.jishoDefinitions, url: `https://jisho.org/search/${searchBar.value}`, label: "jisho.org (definitions)" },
        { option: radioSearchOptions.jishoKanji, url: `https://jisho.org/search/${searchBar.value}%23kanji`, label: "jisho.org (kanji)" },
        { option: radioSearchOptions.jishoNames, url: `https://jisho.org/search/${searchBar.value}%23names`, label: "jisho.org (names)" },
        { option: radioSearchOptions.jishoSentences, url: `https://jisho.org/search/${searchBar.value}%23sentences`, label: "jisho.org (sentences)" },
        { option: radioSearchOptions.massif, url: `https://massif.la/ja/search?q=${searchBar.value}`, label: "Massif" },
        { option: radioSearchOptions.yourei, url: `https://yourei.jp/${searchBar.value}`, label: "用例.jp" },
        { option: radioSearchOptions.ejje, url: `https://ejje.weblio.jp/sentence/content/${searchBar.value}`, label: "英和辞典・和英辞典 - Weblio辞書" },
        { option: radioSearchOptions.eijirou, url: `https://eow.alc.co.jp/search?q=${searchBar.value}`, label: "英辞郎 on the WEB" },
        { option: radioSearchOptions.wikipediaJapanese, url: `https://ja.wikipedia.org/w/index.php?search=${searchBar.value}`, label: "ウィキペディア日本語版" },
        { option: radioSearchOptions.furiganaBunko, url: `https://furigana.info/w/${searchBar.value}`, label: "ふりがな文庫" },
        { option: radioSearchOptions.drk7jp, url: "https://www.drk7.jp/pub/tools/YahooRuby/index.cgi", label: "" },
    ];
}

// DO NOT USE
// give yourself imaginary points for at least trying to make this behemoth work
function highlightWord(sentence, targetWord) {
    const tokenRegex = /\(([^)]+)\)\[([^\]]+)\]|([^\(\)]+)/g;
    let tokens = [];
    let match;

    while ((match = tokenRegex.exec(sentence)) !== null) {
        if (match[1] !== undefined && match[2] !== undefined)
            tokens.push({ type: "ruby", kanji: match[1], furigana: match[2] });
        else if (match[3] !== undefined)
            tokens.push({ type: "text", text: match[3] });
    }

    const kanjiStem = targetWord.match(/[\p{Script=Han}]+/u);
    if (kanjiStem)
        return sentence;

    const stem = kanjiStem[0];

    // FUCK
    let resultTokens = tokens.map( t => {
        if (t.type === "ruby" && t.kanji === stem) {
            return {
                type: "ruby",
                kanji: `<b>${t.kanji}</b>`,
                furigana: `<b>${t.furigana}</b>`
            };
        }

        return t;
    });

    let surface = tokens.map(t => t.type === "ruby" ? t.kanji : t.text).join("");
    let startIndex = surface.indexOf(targetWord);

    if (startIndex === -1)
        return sentence;

    let endIndex = startIndex + targetWord.length;
    let pos = 0;
    let highlightedTokens = [];

    for (let token of tokens) {
        if (token.type === "ruby") {
            let tokenLen = token.kanji.length;
            let tokenStart = pos;
            let tokenEnd = pos + tokenLen;

            if (tokenEnd <= startIndex || tokenStart >= endIndex)
                highlightedTokens.push(token);
            else {
                let overlapStart = Math.max(startIndex, tokenStart) - tokenStart;
                let overlapEnd = Math.min(endIndex, tokenEnd) - tokenStart;
                let beforeKanji = token.kanji.slice(0, overlapStart);
                let highlightKanji = token.kanji.slice(overlapStart, overlapEnd);
                let afterKanji = token.kanji.slice(overlapEnd);
                let furigana = token.furigana;
                let beforeFuri = "";
                let highlightFuri = furigana;
                let afterFuri = "";

                if (furigana.length === tokenLen) {
                    beforeFuri = furigana.slice(0, overlapStart);
                    highlightFuri = furigana.slice(overlapStart, overlapEnd);
                    afterFuri = furigana.slice(overlapEnd);
                }

                if (beforeKanji.length > 0)
                    highlightedTokens.push({ type: "ruby", kanji: beforeKanji, furigana: beforeFuri });

                if (highlightKanji.length > 0) {
                    highlightedTokens.push({
                        type: "ruby",
                        kanji: `<b>${highlightKanji}</b>`,
                        furigana: `<b>${highlightFuri}</b>`
                    });
                }

                if (afterKanji.length > 0)
                    highlightedTokens.push({ type: "ruby", kanji: afterKanji, furigana: afterFuri });
            }

            pos += tokenLen;
        } else {
            let tokenLen = token.text.length;
            let tokenStart = pos;
            let tokenEnd = pos + tokenLen;

            if (tokenEnd <= startIndex || tokenStart >= endIndex)
                highlightedTokens.push(token);
            else {
                let overlapStart = Math.max(startIndex, tokenStart) - tokenStart;
                let overlapEnd = Math.min(endIndex, tokenEnd) - tokenStart;
                let beforeText = token.text.slice(0, overlapStart);
                let highlightText = token.text.slice(overlapStart, overlapEnd);
                let afterText = token.text.slice(overlapEnd);

                if (beforeText.length > 0)
                    highlightedTokens.push({ type: "text", text: beforeText });
                if (highlightText.length > 0)
                    highlightedTokens.push({ type: "text", text: `<b>${highlightText}</b>` });
                if (afterText.length > 0)
                    highlightedTokens.push({ type: "text", text: afterText });
            }

            pos += tokenLen;
        }
    }

    let result = highlightedTokens.map(t => {
        if (t.type === "ruby")
            return `(${t.kanji})[${t.furigana}]`;
        else
            return t.text;
    }).join("");

    return result;
}

function highlightWord2(entry) {
    // let entry = searchBar.value;
    // console.log(`${entry} ALL CAPS STRING EASILY VISIBLE ON THE CONSOLE`);
    let sentenceWithHighlightedWord = "";

    hiraganaConjugations = {
        suru: [],
        ka: [],
        sa: [],
        ta: [],
        na: [],
        ha: [],
        ma: [],
        ya: [],
        ra: ["る", "れ", "られる", "れる", "ろう", "らない", "らなかった", "ります", "った", "って", "れば"],
        wa: [],
    };

    return sentenceWithHighlightedWord;

    /*
    1. get entry from textbox/textarea
    2. if entry is a verb mixed with hiragana/katakana:
        make a list of all the possible verb conjugations for each kana ending
        else, ignore this part and move on if the entry to be highlighted is all kanji
    3. construct regexes
    4. make the appropriate replacements in the target input area
    */
}

// Searches a word using a value from the search bar. This also reloads the iframe after being called.
// look for something like 別表記 for alternative forms, and it must be in the 日本語 section
function searchWord() {
    playClickSound();
    iframeHeader.style.display = "block ruby";
    const sourcesOptionsLocal = getSourceOptions();

    for (const { option, url, label } of sourcesOptionsLocal) {
        if (option.checked) {
            iframe.src = url;
            if (label) {
                iframeHeader.innerHTML = u.contains(a)
                    ? `<br><strong>「${searchBar.value}」</strong>の検索結果を<strong>${label}</strong>で表示しています。`
                    : `<br>Showing results for <strong>"${searchBar.value}"</strong> in <strong>${label}</strong>.`;
            } else
                iframeHeader.innerHTML = "";
            break;
        }
    }
}

function toggleSearchButton(text) {
    otherButtons.search.disabled = !text ? true : false;
}

// Check if a URL exists. Currently unused.
function urlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

// BOTH SIDES
// Play a "click" sound when the user clicks on a button.
function playClickSound() {
    let audio = document.getElementById("audio");
    // makes the sound play multiple times if you spam click
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

// Clears the values of all the objects on screen.
function clearAll(mode) {
    // Soft reset, only clear the textboxes.
    let ankiHTMLPlaceholderText = !u.contains(a) ? "The resulting HTML code from the other textboxes. The output depends on the checkboxes you ticked. You can copy text from here, but you're not allowed to edit it from here.<br>Click <strong style='color: red;'>convert</strong> to get the input from other textboxes and combine them automatically into HTML code. Click <strong style='color: red;'>copy</strong> to put text from here into your clipboard." : "他のテキストボックスから生成されたＨＴＭＬコードです。出力内容はチェックしたチェックボックスによって変わります。ここからテキストをコピーすることはできますが、編集はできません。<br>「<strong style='color:red;'>変換</strong>」をクリックすると、他のテキストボックスの入力を取得して自動的にＨＴＭＬコードにまとめます。「<strong style='color:red;'>コピー</strong>」をクリックすると、ここにあるテキストをクリップボードにコピーします。";

    if (mode == 0) {
        playClickSound();
        Object.values(textAreas).forEach(ta => ta.value = "");

        ankiHTML.value = "";
        ankiHTML.innerHTML = ankiHTMLPlaceholderText;
        preview.innerHTML = "";
    } else if (mode == 1) {
        // Hard reset, clear everything.
        // Left side of the screen.
        Object.values(textAreas).forEach(ta => ta.value = "");

        ankiHTML.value = "";
        ankiHTML.innerHTML = ankiHTMLPlaceholderText;

        Object.values(radioPresets.conversionMode).forEach(rb => rb.checked = false);
        radioPresets.regularWord.checked = true;

        Object.values(checkboxes).forEach(rb => rb.checked = true);
        checkboxes.hasKanji.checked = false;

        // Right side of the screen.
        searchBar.value = "";
        iframeHeader.innerHTML = "";

        Object.values(radioSearchOptions.searchMode).forEach(rb => rb.checked = false);
        radioSearchOptions.wiktionaryEnglish.checked = true;

        const homePages = [
            "en.wiktionary.org",
            "ja.wiktionary.org",
            "jisho.org",
            "massif.la",
            "yourei.jp",
            "ejje.weblio.jp",
            "eow.alc.co.jp",
            "ja.wikipedia.org",
            "furigana.info",
            "www.drk7.jp"
        ];
        iframe.src = `https://${homePages[Math.floor(Math.random() * homePages.length)]}`;
    }
}

// Clear everything on page load.
window.onload = clearAll(1);
searchBar.value = "魑魅魍魎";

function enterSearchBar(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (searchBar.value.trim())
            otherButtons.search.click();
    }
}

// Invoke search button after pressing Enter.
searchBar.addEventListener("keydown", e => enterSearchBar(e));

Object.values(radioSearchOptions).forEach(rb => {
    if (!rb[0])
        rb.addEventListener("keydown", e => enterSearchBar(e));
});

function toggleDarkMode() {
    playClickSound();
    /*
    It's 2024, and these self-righteous, iPhone-wielding, windbags whine about
    everything if something can't be toggled into dark mode.

    The ancient ones have cleaved a massive rift on the Earth, and spew out a
    questionable elixir that will cure all ills, the panacea of the so-called,
    as mystics call it, the "Light Mode" epidemic. Millions have succumbed from
    its deleterious maladies it brings, with kindreds being a few steps near 
    from Death's door. It was about time that man had come forth on such a 
    subterranean beauty, for the blight, after all these eons, will finally
    end once and for all.
    
    I have this as a solution. Now shut the fuck up and be happy.
    I miss those bright-ass screens scorching my eyes.
    */

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // do something with session storage later
    // sessionStorage.setItem("dark-mode", true);
    // && sessionStorage.getItem("dark-mode")

    if (body.classList.contains("light-mode")) {
        topSectionButtons.lightDarkMode.innerHTML = u.contains(a) ? "光" : "☀️";
        topSectionButtons.lightDarkMode.title = u.contains(a) ? "ライトモード" : "light mode";
    } else {
        topSectionButtons.lightDarkMode.innerHTML = u.contains(a) ? "闇" : "🌙";
        topSectionButtons.lightDarkMode.title = u.contains(a) ? "ダークモード" : "dark mode";
    }
}

let examples = document.getElementsByClassName("examples")[0];
examples.style.writingMode = "horizontal-tb";

function switchLanguage() {
    function setInnerHTML(obj, texts) {
        for (const key in texts)
            if (obj[key] !== undefined) obj[key].innerHTML = texts[key];
    }
    function setPlaceholders(obj, texts) {
        for (const key in texts)
            if (obj[key] !== undefined) obj[key].placeholder = texts[key];
    }
    playClickSound();
    topSectionButtons.switchLanguage.disabled = true;
    if (u.contains(a)) {
        document.title = "Anki tool.";
        disclaimer.innerHTML = "I apologize if the UI is a bit confusing. I made this for my own use only.";
        setInnerHTML(radioPresetsLabels, {
            hiraganaOnly:   "hiragana only",
            regularWord:    "regular word",
            kanjiEntry:     "kanji entry"
        });
        setInnerHTML(topSectionButtons, {
            setPreset:      "set preset",
            reset:          "reset",
            clear:          "clear",
            switchLanguage: "日本語",
            lightDarkMode: body.classList.contains("light-mode") ? "🌙" : "☀️"
        });
        topSectionButtons.lightDarkMode.title = body.classList.contains("light-mode") ? "dark mode" : "light mode";
        setInnerHTML(headers, {
            altForms:       "<label for='alt-forms-checkbox'>Alternative forms</label>",
            readings:       "<label for='readings-checkbox'>Readings</label>",
            definitions:    "<label for='definitions-checkbox'>Definition</label>",
            hasKanji:       "<label for='haskanji-checkbox'>Words containing this kanji</label>",
            examples:       "<label for='examples-checkbox'>Examples</label>",
            temp:           "Temporary textbox",
            preview:        "Preview"
        });
        otherButtons.convertText.innerHTML = "convert";
        Object.values(otherButtons.format).forEach(e => e.innerHTML = "format");
        Object.values(otherButtons.copy).forEach(e => e.innerHTML = "copy");
        setPlaceholders(textAreas, {
            altForms: "Alternative forms of a given entry, separated by fullwidth commas (、). Also referred to as \"alt-forms\".\nIf a form has a fullwidth comma, wrap that entire form in these \"boxy\" quotation marks (「」).\n\nExample (entry for 井の中の蛙大海を知らず):\n\n井の中の蛙大海を知らず、井の内の蛙大海を知らず、「井の中の蛙、大海を知らず」",
            readings: "Readings associated with an entry, separated by fullwidth commas (、). In case of single-kanji entries, kun'yomi readings come first rendered in hiragana, followed by on'yomi readings rendered in katakana.\n\nExample (entry for 命):\n\nいのち、みこと\nメイ、ミョウ",
            definitions: "Dictionary-like definitions of a given entry. You're allowed to combine dictionary entries from whatever sources you find, be it from here or somewhere else.",
            hasKanji: "Words that contain this kanji. Also referred to as \"haskanji\". Must be only included in single-kanji entries, and ignored for all other cases.\n\nExample (entry for 解):\n\n(理解)[りかい] - understanding, comprehension\n(解凍)[かいとう] - thawing\n(解決)[かいけつ] - solution, settlement",
            examples: "Sentences or phrases that use the entry. Fullwidth forms of Latin-based characters and numbers are preferred over their halfwidth counterparts.\n\nExample (entry for 拗れる):\n\n(下手)[へた]に(口)[くち]を(挟)[はさ]んだら(余計)[よけい]に`こじれて~しまいそうだ。\n(人間関係)[にんげんかんけい]は(時間)[じかん]が(経)[た]てば(経)[た]つほど`こじれて~いくものだ。\nお(前)[まえ]が(余計)[よけい]な(事)[こと]を(言)[い]うから(話)[はなし]が`こじれた~んだよ！",
            temp: "Store text in here temporarily. You can use this instead of Notepad (or any other text processing software) to prevent yourself from switching back and forth between multiple windows. Text in here will not be included during conversion."
        });
        ankiHTML.innerHTML = "The resulting HTML code from the other textboxes. The output depends on the checkboxes you ticked. You can copy text from here, but you're not allowed to edit it from here.<br>Click <strong style='color:red;'>convert</strong> to get the input from other textboxes and combine them automatically into HTML code. Click <strong style='color:red;'>copy</strong> to put text from here into your clipboard.";
        otherButtons.toggleVertical.innerHTML = examples.style.writingMode === "horizontal-tb" ? "vertical （↓）" : "horizontal （→）";
        allRightsReserved.innerHTML = ". All rights reserved.";
        otherButtons.search.innerHTML = "search";
        setInnerHTML(tableHeaders, {
            definitions:        "Definitions",
            exampleSentences:   "Example sentences",
            formatSentences:    "Format sentences"
        });
        notice1.innerHTML = "<em>Content inside the iframe should not be affected by dark mode.</em>";
        notice2.innerHTML = "If the content below does not load properly, <strong style='color: red;'>DO NOT</strong> click \"Try again\" to prevent unexpected behavior.";
        getSourceOptions();
        for (const { option, _, label } of getSourceOptions()) {
            if (option.checked)
                iframeHeader.innerHTML = label ? "<br>Showing results for <strong>\"" + searchBar.value + "\"</strong> in <strong>" + label + "</strong>." : "";
        }
        u.removeChild(a);
    } else {
        // 海外で見つけた変な日本語っぽい。ゲロ。
        document.title = "Ankiツール。";
        disclaimer.innerHTML = "使いにくくてすみません。もともと自分だけが使うつもりで作ったものです。";
        setInnerHTML(radioPresetsLabels, {
            hiraganaOnly:   "ひらがなだけ",
            regularWord:    "単語",
            kanjiEntry:     "漢字"
        });
        setInnerHTML(topSectionButtons, {
            setPreset:      "セット",
            reset:          "リセット",
            clear:          "クリア",
            switchLanguage: "English",
            lightDarkMode: body.classList.contains("light-mode") ? "闇" : "光"
        });
        topSectionButtons.lightDarkMode.title = body.classList.contains("light-mode") ? "ダークモード" : "ライトモード";
        setInnerHTML(headers, {
            altForms:       "<label for='alt-forms-checkbox'>別表記・異体字</label>",
            readings:       "<label for='readings-checkbox'>読み・発音</label>",
            definitions:    "<label for='definitions-checkbox'>定義・語義・意味</label>",
            hasKanji:       "<label for='haskanji-checkbox'>この漢字を含む単語</label>",
            examples:       "<label for='examples-checkbox'>例文・使用例</label>",
            temp:           "仮のテキストボックス",
            preview:        "プレビュー"
        });
        otherButtons.convertText.innerHTML = "変換";
        Object.values(otherButtons.format).forEach(e => e.innerHTML = "フォーマット");
        Object.values(otherButtons.copy).forEach(e => e.innerHTML = "コピー");
        setPlaceholders(textAreas, {
            altForms: "与えられた見出し語の別表記は、全角読点（、）で区切ります。これらは「alt-forms」とも呼ばれます。\nもし表記の中に全角読点が含まれる場合は、その表記全体を引用符（「」）で囲みます。\n\n例（「井の中の蛙大海を知らず」の見出し語の場合）：\n\n井の中の蛙大海を知らず、井の内の蛙大海を知らず、「井の中の蛙、大海を知らず」",
            readings: "見出し語に関連する読みは、全角読点（、）で区切ります。単一漢字の見出し語の場合は、まずひらがなで書かれた訓読みが来て、その後にカタカナで書かれた音読みが続きます。\n\n例（「命」の見出し語の場合）：\n\nいのち、みこと\nメイ、ミョウ",
            definitions: "与えられた見出し語の辞書的な定義です。ここや他のどこからでも見つけた辞書の定義を組み合わせて使って構いません。",
            hasKanji: "この漢字を含む単語です。（haskanji）とも呼ばれます。単一漢字の見出し語にのみ含め、それ以外の場合は使わないでください。\n\n例（「解」の見出し語の場合）：\n\n(理解)[りかい] - understanding, comprehension\n(解凍)[かいとう] - thawing\n(解決)[かいけつ] - solution, settlement",
            examples: "見出し語を使った文やフレーズです。半角のラテン文字や数字よりも全角が推奨されます。\n\n例（「拗れる」の見出し語の場合）：\n\n(下手)[へた]に(口)[くち]を(挟)[はさ]んだら(余計)[よけい]に`こじれて~しまいそうだ。\n(人間関係)[にんげんかんけい]は(時間)[じかん]が(経)[た]てば(経)[た]つほど`こじれて~いくものだ。\nお(前)[まえ]が(余計)[よけい]な(事)[こと]を(言)[い]うから(話)[はなし]が`こじれた~んだよ！",
            temp: "ここにテキストを一時的に保存します。メモ帳や他のテキスト処理ソフトを使う代わりに、複数のウィンドウを行き来する手間を省けます。\nここにあるテキストは変換時に含まれません。"
        });
        ankiHTML.innerHTML = "他のテキストボックスから生成されたＨＴＭＬコードです。出力内容はチェックしたチェックボックスによって変わります。ここからテキストをコピーすることはできますが、編集はできません。<br>「<strong style='color:red;'>変換</strong>」をクリックすると、他のテキストボックスの入力を取得して自動的にＨＴＭＬコードにまとめます。「<strong style='color:red;'>コピー</strong>」をクリックすると、ここにあるテキストをクリップボードにコピーします。";
        otherButtons.toggleVertical.innerHTML = examples.style.writingMode === "horizontal-tb" ? "縦 （↓）" : "横 （→）";
        allRightsReserved.innerHTML = "。無断転載禁止。";
        otherButtons.search.innerHTML = "検索";
        setInnerHTML(tableHeaders, {
            definitions:        "定義・語義・意味",
            exampleSentences:   "例文・使用例",
            formatSentences:    "例文フォーマット"
        });
        notice1.innerHTML = "<em>iframe内のコンテンツはダークモードの影響を受けるべきではありません。</em>";
        notice2.innerHTML = "以下の内容が読み込まれない場合は、<strong style='color: red;'>絶対に</strong>「再試行」をクリックしないでください。予期せぬエラーを防ぐためです。";
        getSourceOptions();
        for (const { option, _, label } of getSourceOptions()) {
            if (option.checked)
                iframeHeader.innerHTML = label ? "<br><strong>「" + searchBar.value + "」</strong>の検索結果を<strong>" + label + "</strong>で表示しています。" : "";
        }
        u.appendChild(a);
    }
    topSectionButtons.switchLanguage.disabled = false;
}
// looks goofy but don't remove
// you start at `a` existing in the DOM
switchLanguage();   // 日本語
switchLanguage();   // and to English back again

console.log("Welcome to the console.");

console.log(
`コンソールちゃん alerts you of the Seven Forbidden Gospels of the Stars.
\nOne has to seek for meanings between the lines, ...and frequencies.
\n` +
`
    ⣿⣿⣿⣿⡿⠟⠛⠋⠉⠉⠉⠉⠉⠛⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⠟⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠈⠙⠾⣿⣾⣿⣾⣿⣾⣿⣾⣿
    ⠋⡁⠀⠀⠀⠀⠀⢀⠔⠁⠀⠀⢀⠠⠐⠈⠁⠀⠀⠁⠀⠈⠻⢾⣿⣾⣿⣾⣟⣿
    ⠊⠀⠀⠀⠀⢀⠔⠃⠀⠀⠠⠈⠁⠀⠀⠀⠀⠀⠀⠆⠀⠀⠄⠀⠙⣾⣷⣿⢿⣿
    ⠀⠀⠀⠀⡠⠉⠀⠀⠀⠀⠠⢰⢀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠈⡀⠀⠈⢿⣟⣿⣿
    ⠀⠀⢀⡜⣐⠃⠀⠀⠀⣠⠁⡄⠰⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠰⠀⠀⠈⢿⣿⣿
    ⠀⢠⠆⢠⡃⠀⠀⠀⣔⠆⡘⡇⢘⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿
    ⢀⡆⠀⡼⢣⠀⢀⠌⢸⢠⠇⡇⢘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿
    ⣼⣃⠀⠁⢸⢀⠎⠀⢸⠎⠀⢸⢸⡄⠀⠀⠀⠀⠀⠂⢀⠀⠀⠀⠀⠀⠀⠀⠀⣿
    ⠃⡏⠟⣷⣤⠁⠀⠀⠸⠀⠀⡾⢀⢇⠀⠀⠀⠀⠀⠄⠸⠀⠀⠀⠀⠄⠀⠀⠀⣿
    ⠀⠀⣀⣿⣿⣿⢦⠀⠀⠀⠀⡧⠋⠘⡄⠀⠀⠀⠀⡇⢸⠀⠀⠠⡘⠀⠀⠀⢠⣿
    ⠈⠀⢿⢗⡻⠃⠀⠀⠀⠀⠀⠀⠀⠀⠱⡀⠀⠀⢰⠁⡇⠀⠀⢨⠃⡄⢀⠀⣸⣿
    ⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣱⠀⠀⡎⠸⠁⠀⢀⠞⡸⠀⡜⢠⣿⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣺⣿⣧⢰⣧⡁⡄⠀⡞⠰⠁⡸⣠⣿⣿⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡿⠏⣿⠟⢁⠾⢛⣧⢼⠁⠀⠀⢰⣿⡿⣷⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠡⠄⠀⡠⣚⡷⠊⠀⠀⠀⣿⡿⣿⡿⣿
    ⡀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⢸⠁⠀⠀⠀⢰⣿⣿⡿⣿⣿
    ⠱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠊⠀⠀⠀⡞⠀⠀⠀⠀⢸⣿⣷⣿⣿⣿
    ⠀⠙⢦⣀⠀⠀⠀⠀⠀⢀⣀⣠⠖⠁⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⣸⣿⣾⡿⣷⣿
    ⠀⠀⠀⠀⠉⠉⣩⡞⠉⠁⠀⢸⡄⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⠀⣿⣿⣷⣿⣿⣿
    ⡆⠀⠀⣀⡠⠞⠁⣧⢤⣀⣀⣀⡇⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⣿⣷⣿⣷⣿⣿
    ⣿⣷⠊⠁⠀⠀⡰⠁⠀⠀⠀⠀⣹⠶⢦⡀⠀⠀⡇⠀⠀⠀⠀⠀⢸⣿⣷⣿⣷⣿
    ⣿⢿⠀⠀⠀⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⡄⡇⠀⠀⠀⠀⠀⠈⣿⣾⣷⣿⣿
    ⠋⠈⠀⢀⠜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠻⣿⣽⣾⣿
    ⢀⡄⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠁⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⣿⣿⣻⣿
    ⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠐⠀⠀⠀⠀⣀⡿⠀⠀⠀⠀⠀⠀⠀⢹⣿⣻⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⢀⣃⡇⠀⠲⡀⠀⠀⠀⠀⠈⣿⡿⣿
    ⣀⠤⠤⠤⡀⠀⠀⠀⠀⡴⠃⠀⠀⠀⠀⠀⢬⠞⡇⠀⠀⠇⠀⠀⠀⠀⠀⣿⣿⣿
    ⡁⢀⠀⠀⡇⠀⠀⠀⡼⠁⠀⠀⠀⠀⠀⣸⠁⠀⠇⠀⠀⡇⠀⠀⠀⠀⠀⣿⣿⣿
    ⠔⠃⠀⠀⡇⠀⠀⡼⠁⠀⠀⠀⠀⠀⢀⡇⠀⠀⡃⠀⠀⠙⢄⠀⠀⠀⠀⣿⣷⣿
    ⠒⠊⠀⠀⢸⠀⣸⠃⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⢅⠀⠀⡂⠸⡄⠀⠀⠀⣿⣟⣿
    ⠓⠀⠉⠀⢸⣰⠃⠀⠀⠀⠀⠀⠀⡜⡆⠀⠀⠀⢸⠀⠀⡇⢀⠇⠀⠀⠀⣿⣿⣿
    ⠉⠁⠀⢠⠞⠀⠀⠀⠀⠀⠀⠀⣰⠁⡇⠀⠀⠀⡇⠀⠀⡇⢸⠀⠀⠀⠀⣿⣷⣿
    ⡀⠀⢀⢿⣥⡤⠤⠤⠤⣀⣀⢠⠇⠀⢸⠀⠀⢰⠁⠀⢨⠀⢸⠀⠀⠀⠀⣿⣟⣿
    x
    "What say ye, lore of the ancients long gone?"
`.replaceAll(/^\s*/g, "").replaceAll(/\n\s*/g, "\n").replace("x", "\n"));

// forbidden gospels of the stars
console.log("宇宙から七つの禁断福音");
console.log((function(){var d=Array.prototype.slice.call(arguments),e=d.shift();return d.reverse().map(function(l,i){return String.fromCharCode(l-e-49-i)}).join('')})(9,12561,26478,26477,65379,12432,65363,12520,65380,12481,12517)+(function(){var o=Array.prototype.slice.call(arguments),i=o.shift();return o.reverse().map(function(D,u){return String.fromCharCode(D-i-38-u)}).join('')})(7,21373,65363,65383,12468,26459,65359,12399)+(function(){var x=Array.prototype.slice.call(arguments),P=x.shift();return x.reverse().map(function(g,b){return String.fromCharCode(g-P-34-b)}).join('')})(34,12468,12490,65377,12465));
console.log((function(){var h=Array.prototype.slice.call(arguments),f=h.shift();return h.reverse().map(function(M,o){return String.fromCharCode(M-f-49-o)}).join('')})(28,12711,12706,21537,12675,65545,12627,12608,65526,12586,65542,21529,65536,12637,12581,65529,12690,12632,12590,65526,12716,65510,12556,12613,12614,12647,12612,12605,12701,65527,65489,65510,12594,12637,65484,12601,65520,65516,12570,65517,12580,20190,65477,65503,65496,65491,65472,12665,65498,65489,12533,65482,65493,65465,12625,12530,12594,65462,65487,12634,12512,12517,65457,65463,12608,12549,12672,12569,65470,12660,12607,65467,12613,12559,12671,65461,12662,12635,12517,65453,12626,65464,65453,65469,12524,65448,65458,12619,12545,12623,65444,12525,12495,65458,65426,65450,65456,12632,65439,12580,12487,65430,12548,65453,12513,65418,12509,12531,65445,65432,12596,12461,12596,12566,12481,65441,22865,65426,12460,65402,65420,12493,12584,12602,12514,65428,12582,12506,65422,65405,65413,12505,21408,65401,12591,65402,12543,12483,65414,12494,12468,65390)+(function(){var T=Array.prototype.slice.call(arguments),t=T.shift();return T.reverse().map(function(f,i){return String.fromCharCode(f-t-45-i)}).join('')})(32,12520,12534,65472,65495,12595,12569,65492,12590,12576,12664,65457,12547,12519,65479,12640,12566,12525,65481,12602,26559,65464,12565,12519,12597,65455,65475,12554,65457,12534,12502,12533,12596,65462,65447,65440,65465,65430,65461,12520,12588,12637,12502,12520,65441,26534,12532,12631,65453,65419,65440,12577,65430,12546,65426,65437,12533,65443,65432,12498,12561,65422,65420,65438,65436,65432,65406,12469,12510,12605,65416,12493,12556,12461,12453,65400,12579,12505,12577,65393,12505,65419,65423,12574,21405,65383,12569,12502,65387,12510,12571)+(function(){var P=Array.prototype.slice.call(arguments),d=P.shift();return P.reverse().map(function(s,h){return String.fromCharCode(s-d-50-h)}).join('')})(9,21480,65477,65470,12616,65479,12680,22915,65455,65465,12571,65453,12569,65479,12604,12552,65443,12649,65449,12562,65476,65456,12512,12643,65468,12530,12592,65433,65439,65450,12636,12589,65443,12523,65426,65428,12584,12519,12596,65442,65455,12577,12507,65435,65434,12621,12620,12487,12501,12571,12597,12475,65439,12567,65430,65426,12576,65435,12612,65414,65416,12458,12474,12623,65422,12555,12511,12553,65410,65406,65414,12595,26499,12574,65386,65400,12501,12502,20094,12568,22842,65397,12536,12496,12508,12471,12580,12533,12448,12531,65394,12562,12528,65371,12524,12475,12570,65381,12483,65373,12553)+(function(){var X=Array.prototype.slice.call(arguments),B=X.shift();return X.reverse().map(function(U,Y){return String.fromCharCode(U-B-28-Y)}).join('')})(19,65383,12481,12446,65372,22810)+(function(){var B=Array.prototype.slice.call(arguments),q=B.shift();return B.reverse().map(function(E,S){return String.fromCharCode(E-q-0-S)}).join('')})(20,21342));
console.log((function(){var W=Array.prototype.slice.call(arguments),v=W.shift();return W.reverse().map(function(q,L){return String.fromCharCode(q-v-10-L)}).join('')})(18,12546,12547,65430,12586,65449,12488,65427,65420,65447,65438,65431,12608,12623,12514,65438,12586,65432,65443,65445,65437,65422,12582,65420,12632,65421,65404,12499,12515,65401,12587,12496,12457,65397,26507,65416,12620,12494,12582,12549,65423,12508,65403,12446,12539,65417,12537,65383,65385,12574,65403,65379,12509,65395,12497,65382,65395,65380,12562,12467,12459,65372,20080,12488,65373,12516,65398,12548,65379,65397,65372,65374,65372,12425,12516,65371,12475,12563,12562,12482,65352,12555,12467,65359,20058,12404,12510,65362,65355,65360,12491,12407,65345,12432,65373,65367,12521,65349,65346,12462,12427,12460)+(function(){var w=Array.prototype.slice.call(arguments),G=w.shift();return w.reverse().map(function(v,I){return String.fromCharCode(v-G-47-I)}).join('')})(44,12525,12555,65483,12651,65472,12609,65457,12585,12583,12528,12670,12581,12615,12658,12557,12565,12632,65460,12538,65456,12599,12600,12556,12512,65437,65473,65447,12500,12659,12621,12550,65464,12524,65465,12480,65457,12644,12541,12518,65436,12517,12594,65456,12537,12583,65429,65431,65431,65431,65427,12532,65410,65431,12598,65420,12501,12522,12478,12467,12521,12627,65432,12571,65413,12493,12515,12486,12604,20105,65399)+(function(){var P=Array.prototype.slice.call(arguments),A=P.shift();return P.reverse().map(function(F,W){return String.fromCharCode(F-A-29-W)}).join('')})(19,12561,12503,12503,12537,65393,65382,12436,65386,65378,12441,65401,12482,12555,21382,65395,12565,12449,12453,12514,12565,21375,65390,12526,12557,12522,65349)+(function(){var z=Array.prototype.slice.call(arguments),J=z.shift();return z.reverse().map(function(P,T){return String.fromCharCode(P-J-3-T)}).join('')})(47,12452,12474,12569,12570)+(function(){var k=Array.prototype.slice.call(arguments),F=k.shift();return k.reverse().map(function(H,s){return String.fromCharCode(H-F-39-s)}).join('')})(59,12520));
console.log((function(){var t=Array.prototype.slice.call(arguments),f=t.shift();return t.reverse().map(function(Q,T){return String.fromCharCode(Q-f-33-T)}).join('')})(60,12793,12750,12889,26806,65723,12846,12811,65706,65704,12753,12854,12880,12781,12891,12814,12889,65714,65698,12801,12896,21699,12835,12795,12766,12738,12892,12865,12792,12765,65701,12894,65679,65684,26776,65688,12889,12742,65692,65660,65683,12851,20369,12787,12769,65670,65667,12839,65663,65664,12800,12749,23109,65682,65674,65660,12702,65660,12801,65664,12797,65650,65659,20348,65648,65651,12746,12825,12727,65630,12725,12723,12844,12717,12776,12754,12718,12780,12742,12739,65638,65631,65649,12788,12775,12673,65620,12799,12821,12711,65633,65641,65622,12816,12811,65603,65627,12666,65608,12826,12730,65616,12716,65611,65613,65606,12765,65591,12722,12681,12657,12683,12804,12682,12704,12650,12809,12714,65612,12797,65606,12767,12737,65574,65596,12793,65591,65605,12690,65607,65571,65589,65599,65584,12723,65589,65578,12693,12658,12718,65593,12745,12723,12654,26666,12712,12683,65573,65576,23012,12715,12758,12623,65581,12659,65577,65564,12631,12713,12620,12670,65538,12730,65555,65554,12721,12634,12627,65555,12681,12755,65530,12678,65558,65543,12682,12612,65536,12672,12737,26630,65541,65521,12580,12636,65514,65525,12699,65525,12606,21530,65533,65540,12637,65524,65538,12729,12600,65503,12653,12716,12619,12684,65496,65512,65526,65500,65506,12622,12558,65508,12707,12645,12562,65503,12694,65514,65497,65499,12706,22941,12638,12635,12565,12534,12571,65480,65495,65471,12623,12560,12569,12620,65481,65492,65490,12623,65477,65485,12519,65474,65480,65483,65469,65467,65468,65484,65488,65468,65465,65452,12637,12523,12665,12504,21465,65450,12573,12539,12557,65471,12555,12532,12587,12601,65447,12534,12562,65468,12504,65451,12492,12524,12500,12484,12543,65436,65440,65457,65444,65435,12486,12514,20100,21436,65450,65437,12508,12577,65444,12530,65410,65438,12525,12592,12502,12592,12493,12511,65433,65431,65401,65433,12562,20107,12458)+(function(){var I=Array.prototype.slice.call(arguments),m=I.shift();return I.reverse().map(function(Q,N){return String.fromCharCode(Q-m-48-N)}).join('')})(34,12834,12794,65695,65671,12789,12895,12721,12854,65700,65678,65693,65695,12888,12880,12749,12852,12777,65664,65671,65669,65685,12744,65669,65666,65668,26760,12712,12777,65658,12803,12761,65675,12808,12717,65647,65662,65638,12732,65665,65635,12821,12852,12763,65664,65642,65643,65659,12741,12845,65649,12692,12718,12841,12685,65654,65656,65647,65649,12788,12834,12731,21634,65627,65625,12803,65621,12699,65624,65621,12694,12668,12722,12697,12665,12714,12816,12824,12787,12802,12705,12747,65625,65599,12817,12688,65606,12805,23049,12771,12649,12714,21604,12677,12774,65595,65610,65594,65601,12782,65607,65595,65575,12636,12701,12665,65583,65599,12643,26677,65602,12683,12723,65579,12657,12679,12719,65582,12688,12630,21576,12705,65572,65554,12757,21571,65582,12667,12740,12637,12738,12641,65550,12595,65564,12698,12636,65572,65564,12723,12667,12753,65557,12596,65531,65545,65553,12592,65563,12594,65537,65527,12695,65553,12610,65553,65551,21539,12638,65550,12666,65526,65527,65533,12577,12682,12641,12727,65528,26617,12564,65504,65518,65517,12707,12710,12665,12651,65522,12591,65519,65515,12584,12685,12651,12643,12706,65495,12551,65503,65492,65507,12580,12550,65500,12633,65481,65509,20189,65508,12685,65495,65491,12561,65487,12601,12576,20180,12633,65485,12560,65488,65484,12628,12582,65467,12557,12624,12516,65491,12544,12626,12560,65483,65451,12669,12600,12608,65461,12563,65477,65473,65455,65456,65458,65455,12656,65475,12627,12642,65438,12623,65446,65444,65455,12489,65444,65450,65450,12557,21446,12477,65436,12517,65445,12571,65451,12611,65421,12567,65452,12512,21434,12503,65435,12597,12594,12539,65407,65420,65422,22866,12467,12516,12496,65414,65422,65424,65400,65420,12555,65431,12494,12552,65415,12511,12478,26499,65410,12505,12476,12515,12490)+(function(){var r=Array.prototype.slice.call(arguments),c=r.shift();return r.reverse().map(function(J,E){return String.fromCharCode(J-c-50-E)}).join('')})(37,12683,65546,65538,12615,65522,12615,12648,12647,65547,65533,12630,12672,12671,65529,12573,12714,12717,12607,65523,12662,12579,65520,12592,22962,65498,12619,65520,12713,12591,65506,12569,65506,12649,12707,12599,12641,12697,12652,12691,65518,12657,12669,12595,65501,65515,12537,65489,21497,12635,65498,12541,65472,12624,12565,21490,12640,65483,65498,65465,12622,65478,65488,12591,12528,12625,12538,12587,12520,65489,12647,65468,12678,12565,21471,12566,65448,65446,12577,65481,12508,65475,65457,12517,65471,65456,12568,65455,65450,65458,12653,12623,65449,12550,65443,12520,12621,12522,12643,65449,65441,65425,65443,12474,12626,12483,65450,12506,22878,12468,65412,12564,65448,12506,65422,12581,12461,65440,12632,12571,12591,65425,12523,65437,65417,12609,65429,12529,65431,65426,12491,12510,65396,12597,65422,65404,12447)+(function(){var b=Array.prototype.slice.call(arguments),T=b.shift();return b.reverse().map(function(w,v){return String.fromCharCode(w-T-39-v)}).join('')})(25,12495,65412,65432,12584,12602,12484,65426,65408,65399,12542,65408,65410,12518,65389,12537,12444,65383,65414,12601,12449,12477,65386,12469,12603,65376,12535,12488,12566,12486,12447,12530,12541,12587,65381,12425,12525)+(function(){var D=Array.prototype.slice.call(arguments),a=D.shift();return D.reverse().map(function(K,F){return String.fromCharCode(K-a-39-F)}).join('')})(50,65433,12520,12568,65420,65431,65406,12472,65428,26507,12584,65393,12514,65429,65409,12543)+(function(){var Z=Array.prototype.slice.call(arguments),r=Z.shift();return Z.reverse().map(function(S,J){return String.fromCharCode(S-r-29-J)}).join('')})(27,65370)+(function(){var Z=Array.prototype.slice.call(arguments),Y=Z.shift();return Z.reverse().map(function(n,B){return String.fromCharCode(n-Y-42-B)}).join('')})(8,12470,12472,12526,65371,12505,65366)+(function(){var O=Array.prototype.slice.call(arguments),q=O.shift();return O.reverse().map(function(e,n){return String.fromCharCode(e-q-17-n)}).join('')})(24,65368)+(function(){var Q=Array.prototype.slice.call(arguments),V=Q.shift();return Q.reverse().map(function(R,G){return String.fromCharCode(R-V-51-G)}).join('')})(22,65410));
console.log((function(){var M=Array.prototype.slice.call(arguments),x=M.shift();return M.reverse().map(function(H,U){return String.fromCharCode(H-x-17-U)}).join('')})(59,65444,12545,12533,12628,12574,12580,12638,12477,12634,12513,65436,65417,65439,12509,65433,12531,65424,65425,12567,12523,65405,12517,21424,12589,12575,12464,12494,65412,65430,65428,65417,12447,20105,65407,65423,12562,12484,65412,12504,12505,65388,12475,12570,12572,12512,12597,65402,65404,65392)+(function(){var l=Array.prototype.slice.call(arguments),u=l.shift();return l.reverse().map(function(t,b){return String.fromCharCode(t-u-48-b)}).join('')})(5,65557,65539,65569,12624,12687,12720,65532,12627,26641,12722,12647,65539,65545,12751,65561,65552,12680,65533,65553,65531,65525,12638,65515,12646,65550,65525,65531,65524,12569,21530,65541,65522,65539,12722,65521,12669,65518,12569,65513,65517,12724,65497,65511,65509,12645,65511,12613,65525,12554,65526,12589,12677,65499,12636,12560,12614,12573,12691,12652,65497,12595,12596,65498,12528,65497,65488,65496,12643,12571,12643,12544,12598,65479,12616,21485,65481,65493,65482,12513,65478,12651,26568,12566,21476,65471,65455,12516,65476,12622,12563,65463,65461,65477,65444,12508,65450,65444,12594,12657,12597,12551,12501,12537,12607,12548,65448,65446,12548,12519,65441,65461,12601,12632,12585,65448,12610,22884,65443,65444,12515,12509,12485,65448,12632,12545,12477,65424,65435,12603,65421,12529,65419,65430,12598,65422,65436,12497,12618,12574,12586,65424,12492,65410,65411,12490,65400,12456,65414,12575,12520,12507,12467,65412,65384,12535,12436,65401,65398,12471,12489,12497,12603,65388,65389,12527,12492,65375,65403,12576,12458,21389,12456,12576,12486,12477,65387,12457,65380,12436,12433,12584,65359,65389,65387,12467)+(function(){var O=Array.prototype.slice.call(arguments),y=O.shift();return O.reverse().map(function(b,z){return String.fromCharCode(b-y-13-z)}).join('')})(61,65550,65545,12691,12711,65539,65540,65525,12726,12738,65532,12668,12630,12579,65516,65534,12626,12607,12720,12681,65531,12617,12574,12722,12657,12601,12655,65513,12596,65517,12578,12648,65495,12569,65511,65525,65513,65523,12585,65508,65501,65518,65501,12576,65498,12634,65489,65514,65512,65491,12650,12551,12552,12681,12550,12604,12538,12539,12636,12635,65486,65490,12585,12631,65477,12558,65476,12654,65472,12612,12549,12525,65456,12672,12660,12517,12605,12611,12603,65464,65481,21468,12505,65464,12565,65458,12602,65460,12571,12492,12604,65463,65435,12565,65447,65445,65456,12657,22892,12542,65442,12620,12643,12546,12584,12642,12490,21442,12605,12606,12507,12534,65431,12568,65437,65445,12618,65445,65443,65441,12601,65423,65423,12481,12564,65417,12461,12561,65433,12494,12519,65415,12455,12605,12613,12586,65405,12608,65402,65413,12539,65386,65407,65412,65397,12490,65403,12495,12533,12486,65402,12508,12473,12434)+(function(){var F=Array.prototype.slice.call(arguments),u=F.shift();return F.reverse().map(function(f,z){return String.fromCharCode(f-u-32-z)}).join('')})(42,65399,12473,65391,12476)+(function(){var g=Array.prototype.slice.call(arguments),c=g.shift();return g.reverse().map(function(a,B){return String.fromCharCode(a-c-25-B)}).join('')})(35,65427,26519,12466,65438,12471,12535,12492,65439,12475,12531,65415,65422,65414,65408,21416,65425,12544,65424,12544,12550,65423,65425,12451,21407,12504,65399,65401,65403,65402,65384,12539,65415,65380,65413,65412,22836,12533,12544,12472,12560,12445,12457,12488,65388,65379,12459,12573,12483,12471)+(function(){var V=Array.prototype.slice.call(arguments),W=V.shift();return V.reverse().map(function(X,b){return String.fromCharCode(X-W-59-b)}).join('')})(23,12563,12460,65413,65419,65430,12489,12542,65403,65410,21409,65410,26497,12495,12535,12543)+(function(){var M=Array.prototype.slice.call(arguments),J=M.shift();return M.reverse().map(function(n,Z){return String.fromCharCode(n-J-52-Z)}).join('')})(1,26472,65381,12578,12511,12517,65370,65369,65391)+(function(){var B=Array.prototype.slice.call(arguments),x=B.shift();return B.reverse().map(function(q,V){return String.fromCharCode(q-x-36-V)}).join('')})(48,12517,65425,12499,12590,12475,12529,12473,65427,65412,12447,12559,12564,65414,65397,12519,12519,65421,65411,65402)+(function(){var c=Array.prototype.slice.call(arguments),I=c.shift();return c.reverse().map(function(f,d){return String.fromCharCode(f-I-48-d)}).join('')})(59,65438,12564,12503,12637,12524,65409,12614)+(function(){var j=Array.prototype.slice.call(arguments),F=j.shift();return j.reverse().map(function(a,g){return String.fromCharCode(a-F-49-g)}).join('')})(27,65378,65389)+(function(){var h=Array.prototype.slice.call(arguments),B=h.shift();return h.reverse().map(function(b,p){return String.fromCharCode(b-B-53-p)}).join('')})(63,65440));
console.log((function(){var K=Array.prototype.slice.call(arguments),u=K.shift();return K.reverse().map(function(E,a){return String.fromCharCode(E-u-9-a)}).join('')})(45,65392,12576,12518,12425,12486,12515)+(function(){var z=Array.prototype.slice.call(arguments),x=z.shift();return z.reverse().map(function(K,G){return String.fromCharCode(K-x-57-G)}).join('')})(17,65410,65385,65408,65378,65406)+(function(){var f=Array.prototype.slice.call(arguments),b=f.shift();return f.reverse().map(function(G,k){return String.fromCharCode(G-b-11-k)}).join('')})(11,65378,12409,12472,12405,12408,12449,12525,22799,12466,65349,65365,12401,12462,65346,12547,12382,12534,12425,12552,12455,12530,65339)+(function(){var X=Array.prototype.slice.call(arguments),b=X.shift();return X.reverse().map(function(O,S){return String.fromCharCode(O-b-42-S)}).join('')})(25,65379,12443,65380,12528,65408,12470,65388,12560,22834,12484,65384,12588,65389)+(function(){var Y=Array.prototype.slice.call(arguments),h=Y.shift();return Y.reverse().map(function(O,M){return String.fromCharCode(O-h-21-M)}).join('')})(19,12604,65379,65397,65391,12491,65385,65396,12564,65389,12500,12500,12525,65398,65372,12478,12556,12513,65363,12491,65359,65370,65381,65379,22817,12467,65367,12505,12417,12418,12446,12479,65366,65359,12419,12550,12503,65356,65362)+(function(){var X=Array.prototype.slice.call(arguments),k=X.shift();return X.reverse().map(function(q,E){return String.fromCharCode(q-k-57-E)}).join('')})(56,12512,65447,65433)+(function(){var I=Array.prototype.slice.call(arguments),g=I.shift();return I.reverse().map(function(J,R){return String.fromCharCode(J-g-11-R)}).join('')})(59,12475,12437,12538,12537)+(function(){var J=Array.prototype.slice.call(arguments),j=J.shift();return J.reverse().map(function(a,Q){return String.fromCharCode(a-j-24-Q)}).join('')})(39,12481));
console.log((function(){var G=Array.prototype.slice.call(arguments),V=G.shift();return G.reverse().map(function(x,v){return String.fromCharCode(x-V-32-v)}).join('')})(1,65357,65355,12471,26450,12459,12444,65350,12466,12464)+(function(){var k=Array.prototype.slice.call(arguments),i=k.shift();return k.reverse().map(function(G,S){return String.fromCharCode(G-i-42-S)}).join('')})(18,12557,65369,12459,12497,12434,26476,12474,12480,12481,65383)+(function(){var M=Array.prototype.slice.call(arguments),r=M.shift();return M.reverse().map(function(K,L){return String.fromCharCode(K-r-34-L)}).join('')})(36,12599,65404,21392)+(function(){var p=Array.prototype.slice.call(arguments),V=p.shift();return p.reverse().map(function(y,I){return String.fromCharCode(y-V-8-I)}).join('')})(35,12513,12405,12440,12465)+(function(){var B=Array.prototype.slice.call(arguments),H=B.shift();return B.reverse().map(function(g,Z){return String.fromCharCode(g-H-18-Z)}).join('')})(12,65360,65368,65357,12448,12401,12427,22793)+(function(){var y=Array.prototype.slice.call(arguments),N=y.shift();return y.reverse().map(function(o,m){return String.fromCharCode(o-N-16-m)}).join('')})(13,26441));