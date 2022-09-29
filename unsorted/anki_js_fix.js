// the main goal is to change the windows font to a regular ass looking sans serif font, without breaking the android font shuffling system. fucking do this now!
// for some reason, the meiryo font overrides everything even if i explicitly set the sample-sentences font family to yu mincho.
// wag ka na magtagalog putang ina mo bobo ka naman eh

var frontSide = document.getElementsByClassName("front");
var backSide = document.getElementsByClassName("back");
if (front.contains("win") && back.contains("win")) {
} else {
	// front side of the card. it is here because the "front" class is still on the screen when you "flip" the card.
	var frontTypeface = typefaces[Math.floor(Math.random() * typefaces.length)],
	front = document.getElementsByClassName("front")[0];
	front.style.cssText = `font-family:` + frontTypeface + `, _meiryo, sans-serif; font-size: 300%; text-align: center; color: black; background-color: white;  writing-mode: vertical-rl; margin: 0 auto; display: block;}`;
	// sample sentences.
	var sampleSentencesTypeface = typefaces[Math.floor(Math.random() * typefaces.length)],
	sampleSentences = document.getElementsByClassName("sample-sentences")[0];
	sampleSentences.style.cssText = `font-family:` + sampleSentencesTypeface + `, _meiryo, sans-serif; writing-mode: vertical-rl; text-align: left; margin: 0px; padding: 0px; height: 75%; width: 100%;}`;
}

// revert back to this code if everything fucks up
// front side of the card. it is here because the "front" class is still on the screen when you "flip" the card.
var frontTypeface = typefaces[Math.floor(Math.random() * typefaces.length)],
front = document.getElementsByClassName("front")[0];
front.style.cssText = `font-family:` + frontTypeface + `, _meiryo, sans-serif; font-size: 300%; text-align: center; color: black; background-color: white;  writing-mode: vertical-rl; margin: 0 auto; display: block;}`;

// sample sentences.
var sampleSentencesTypeface = typefaces[Math.floor(Math.random() * typefaces.length)],
sampleSentences = document.getElementsByClassName("sample-sentences")[0];
sampleSentences.style.cssText = `font-family:` + sampleSentencesTypeface + `, _meiryo, sans-serif; writing-mode: vertical-rl; text-align: left; margin: 0px; padding: 0px; height: 75%; width: 100%;}`;

// references
/*
https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
https://docs.ankiweb.net/templates/styling.html
*/