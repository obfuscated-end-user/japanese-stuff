started doing this on 2022/10/15. you think you're hot shit because you wrote all of this crap by hand? fuck outta here and touch some grass you asocial fat fuck!  
github does not support word wrap. sorry that you had to scroll all the way to the right to read some text. open this in a text editor with word wrap and see it do its magic.  
EDIT 2023/07/13: turns out word wrap is supported now  

## WHAT TO DO:
the screen on the left contains the convert to anki thing, with checkboxes within each field (for example, one for the readings, another one for the definition, etc.). on the bottom of the screen, there should be a convert button that converts the following data from the fields above to the appropriate html code for anki conversion later. apply the same thing you did from the txt2markup files earlier like the copy to clipboard textbox etc and the conversion thing. (TBD)

the screen on the right contains a search bar that asks for some japanese word and some radio buttons indicating what source to use when searching a word that is based on whatever is on the textbox. disable the search button if the search box is empty. the sources that you should use are wiktionary and jisho for definitions, and some sites like massif for example sentences.

add a button that goes back and forward on the iframe's history (is this even possible?)  
try to modify the contents of the clipboard like converting all those left facing parentheses to its respective html codes? (no, this would screw up the kana conversion thing)

make code that generates google search queries, for example:  
site:en.wiktionary.org "嚼"  
and some even more specific ones to find japanese alt-forms.

it's okay to swear in this document because nobody will take this shit seriously anyway. i write shit code, i expect a lot of bugs. simple. swearing relieves me and makes my frustration go away. just don't swear too much, or else you're gonna sound like you're 7 and play cod idk fuk off bicht

### 2023/03/12  
make something that automatically makes a verb template on a kanji verb. get the value of the entry on the search box, get the furigana on the readings textbox, and then make a template in the format of (kanji)[furigana]する - &#40;transitive) to < !--verbする- -> (space added because it messes up the format)  
^ turns out that this is really hard to do

### 2024/03/04  
add another textbox for the card title and you include whatever is in it to the associated generated card thing you fucking know what i'm talking about

## RESOURCES
be sure to save all of these at least once on the wayback machine  
remember, no antiquated jquery shit  
### GeeksforGeeks (don't go here)  
* https://www.geeksforgeeks.org/html-dom-input-checkbox-name-property
### Mozilla Developer Network (MDN) Docs
* https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/checkbox
* https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert
* https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
* https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
* https://developer.mozilla.org/en-US/docs/Web/API/Element/append
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
* https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/play
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/fastSeek
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
* https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
* https://developer.mozilla.org/en-US/docs/Web/CSS/resize
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
* https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
* https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise  
### Stack Overflow
* https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments
* https://stackoverflow.com/questions/2637696/how-to-place-div-side-by-side
* https://stackoverflow.com/questions/17217766/two-divs-side-by-side-fluid-display
* https://stackoverflow.com/questions/5235142/how-do-i-disable-the-resizable-property-of-a-textarea
* https://stackoverflow.com/questions/3896537/should-i-size-a-textarea-with-css-width-height-or-html-cols-rows-attributes
* https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript
* https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked
* https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript
* https://stackoverflow.com/questions/28516561/how-can-i-load-a-webpage-into-a-div-element
* https://stackoverflow.com/questions/38931125/how-to-add-iframe-default-content-page
* https://stackoverflow.com/questions/86428/what-s-the-best-way-to-reload-refresh-an-iframe
* https://stackoverflow.com/questions/11863423/how-do-i-select-an-element-only-when-inside-another-element
* https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
* https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
* https://stackoverflow.com/questions/38905647/css-scroll-bar-auto-scrolling-with-added-content
* https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
* https://stackoverflow.com/questions/75978659/what-does-the-message-request-for-font-noto-sans-blocked-at-visibility-level
* https://stackoverflow.com/questions/15519454/how-to-access-session-variables-and-set-them-in-javascript
* https://stackoverflow.com/questions/2257631/how-to-create-a-session-using-javascript
* https://stackoverflow.com/questions/5119041/how-can-i-get-a-web-sites-favicon
* https://stackoverflow.com/questions/11872404/font-awesome-not-properly-displaying-on-firefox-how-to-vend-via-cdn
* https://stackoverflow.com/questions/16679146/force-footer-on-bottom-on-pages-with-little-content
* https://stackoverflow.com/questions/46867358/w3c-font-family-parse-error-open-sans-helvetica-arial-sans-serif
* https://stackoverflow.com/questions/6494721/override-body-style-for-content-in-an-iframe
* https://stackoverflow.com/questions/1378260/how-can-i-retrieve-a-website-icon
* https://stackoverflow.com/questions/36378371/how-to-make-automatic-line-numbers-next-to-an-html-text-box-with-javascript
* https://stackoverflow.com/questions/16676166/apply-border-radius-to-scrollbars-with-css
* https://stackoverflow.com/questions/46313294/check-if-the-session-exists-with-javascript
* https://stackoverflow.com/questions/13325798/invert-colors-of-an-image-in-css-or-javascript
* https://stackoverflow.com/questions/36512542/edit-css-of-elements-within-iframe
* https://stackoverflow.com/questions/57419640/fonts-are-blocked-by-firefox-cross-origin-request-blocked-the-same-origin-polic
* https://stackoverflow.com/questions/71820200/google-fonts-not-showing-on-firefox-duplicated
* https://stackoverflow.com/questions/217776/how-to-apply-css-to-iframe
* https://stackoverflow.com/questions/58173994/how-can-i-prevent-iframe-messing-browsers-history-after-interactions-with-it
* https://stackoverflow.com/questions/108207/how-do-i-make-an-html-text-box-show-a-hint-when-empty
* https://stackoverflow.com/questions/821359/reload-an-iframe-without-adding-to-the-history
* https://stackoverflow.com/questions/28137461/remove-history-from-external-iframe-redirects-and-links
* https://stackoverflow.com/questions/63907168/removing-iframe-affects-the-session-history-in-some-browsers-but-not-in-chrome
* https://stackoverflow.com/questions/32198016/how-to-check-whether-session-exists-from-javascript
* https://stackoverflow.com/questions/12539006/tooltips-for-mobile-browsers
* https://stackoverflow.com/questions/583753/using-css-to-affect-div-style-inside-iframe
* https://stackoverflow.com/questions/7312623/insert-line-break-inside-placeholder-attribute-of-a-textarea
* https://stackoverflow.com/questions/6358673/javascript-checkbox-onchange
* https://stackoverflow.com/questions/49980749/how-can-i-add-event-listener-to-a-function-expression
* https://stackoverflow.com/questions/1276870/how-to-pass-an-event-object-to-a-function-in-javascript
* https://stackoverflow.com/questions/39953067/javascript-function-parameter-is-undefined
* https://stackoverflow.com/questions/4705848/rendering-html-inside-textarea
* https://stackoverflow.com/questions/3751511/div-size-automatically-size-of-content
* https://stackoverflow.com/questions/2554149/how-can-i-change-div-content-with-javascript
* https://stackoverflow.com/questions/11405835/equivalent-div-property-for-row-in-textarea-in-html
* https://stackoverflow.com/questions/69140350/how-to-display-html-code-without-rendering-on-page
* https://stackoverflow.com/questions/20300138/is-it-possible-to-add-placeholder-in-div-tag
* https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
* https://stackoverflow.com/questions/37125674/how-to-check-for-attribute-value
* https://stackoverflow.com/questions/7693224/how-do-i-right-align-div-elements
* https://stackoverflow.com/questions/18271868/can-i-hide-the-html-source-code-from-the-browser-view-source
* https://stackoverflow.com/questions/2797143/html-entity-is-not-rendered
* https://stackoverflow.com/questions/17711146/how-to-open-link-in-a-new-tab-in-html
* https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable
* https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
* https://stackoverflow.com/questions/44846614/trigger-css-animations-in-javascript
* https://stackoverflow.com/questions/12836227/change-select-box-option-background-color
* https://stackoverflow.com/questions/2041388/how-to-remove-the-underline-for-anchorslinks
* https://stackoverflow.com/questions/154059/how-do-i-check-for-an-empty-undefined-null-string-in-javascript
* https://stackoverflow.com/questions/1001009/javascript-textbox-event
* https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
* https://stackoverflow.com/questions/9150796/change-how-fast-title-attributes-tooltip-appears
* https://stackoverflow.com/questions/18729338/how-to-make-a-div-appear-on-top-of-everything-else-on-the-screen
* https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
* https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
* https://stackoverflow.com/questions/31715188/buttons-click-sounds
* https://stackoverflow.com/questions/14834520/html5-audio-stop-function
* https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
* https://stackoverflow.com/questions/19030397/syntaxerror-unterminated-parenthetical-for-validating-the-local-file-path
* https://stackoverflow.com/questions/7365027/how-to-use-a-regexp-literal-as-object-key
* https://stackoverflow.com/questions/75247972/changes-in-values-will-not-be-reflected-outside-of-function
* https://stackoverflow.com/questions/1518511/how-do-i-pass-an-html-element-as-an-argument-to-a-javascript-function
* https://stackoverflow.com/questions/47384766/passing-html-value-into-javascript-function
* https://stackoverflow.com/questions/4173391/getting-dom-element-value-using-pure-javascript
* https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
* https://stackoverflow.com/questions/57910429/syntaxerror-unterminated-parenthetical-how-to-handle
* https://stackoverflow.com/questions/3777630/unterminated-parenthetical-error-with-a-regular-expression-in-javascript
* https://stackoverflow.com/questions/30225552/regex-for-diacritics
* https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
* https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
* https://stackoverflow.com/questions/4005614/elseif-syntax-in-javascript
* https://stackoverflow.com/questions/42501428/using-calc-with-a-dynamic-value
* https://stackoverflow.com/questions/22893866/css-dynamically-calculate-width
* https://stackoverflow.com/questions/12896985/regex-modifier-u-in-javascript
* https://stackoverflow.com/questions/17727884/range-out-of-order-in-character-class-in-javascript
* https://stackoverflow.com/questions/45456543/make-text-show-up-on-hover-over-button
* https://stackoverflow.com/questions/26067590/get-body-element-of-site-using-only-javascript
* https://stackoverflow.com/questions/42419614/javascript-createelement-button
* https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript
* https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom
* https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
* https://stackoverflow.com/questions/15741006/adding-div-element-to-body-or-document-in-javascript
* https://stackoverflow.com/questions/2928688/how-to-hide-elements-without-having-them-take-space-on-the-page
* https://stackoverflow.com/questions/413439/how-to-dynamically-change-a-web-pages-title
* https://stackoverflow.com/questions/13739568/how-do-i-link-a-javascript-file-to-a-html-file
* https://stackoverflow.com/questions/56375215/import-js-from-script-tag-in-html-file-possible
* https://stackoverflow.com/questions/2185519/what-are-valid-attributes-for-the-div-element-in-html
* https://stackoverflow.com/questions/4888377/how-to-add-a-browser-tab-icon-favicon-for-a-website
### Tutorialspoint
* https://www.tutorialspoint.com/how-to-create-a-split-screen-50-50-with-css
### w3schools
* https://www.w3schools.com/howto/howto_css_split_screen.asp
* https://www.w3schools.com/tags/att_input_type_radio.asp
* https://www.w3schools.com/tags/att_iframe_sandbox.asp
* https://www.w3schools.com/howto/howto_css_animate_buttons.asp
* https://www.w3schools.com/css/css3_animations.asp
* https://www.w3schools.com/css/css_colors_hex.asp
* https://www.w3schools.com/css/css_colors_keywords.asp
* https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
* https://www.w3schools.com/html/html_entities.asp
* https://www.w3schools.com/jsref/met_element_hasattribute.asp
* https://www.w3schools.com/tags/att_script_type.asp
* https://www.w3schools.com/tags/tag_select.asp
* https://www.w3schools.com/jsref/jsref_concat_string.asp
* https://www.w3schools.com/jsref/event_onchange.asp
* https://www.w3schools.com/css/css_tooltip.asp
### Other
* https://dev.to/phuocng/display-the-line-numbers-in-a-text-area-46mk
* https://www.codeproject.com/Tips/5163219/HTML-Line-Numbering-using-textarea
* https://docs.wpbeaverbuilder.com/bb-theme/defaults-for-layouts-content/footers/force-footer-to-bottom-on-short-pages
* https://www.w3.org/wiki/CSS/Properties/color/keywords
* https://dev.to/billypentester/how-to-hide-the-source-code-of-an-html-web-page-12n5
* https://www.reddit.com/r/learnprogramming/comments/v2s697/adding_external_css_file_to_html_doc

### link formats:
replace "term" with your word of choice
* wiktionary: https://en.wiktionary.org/wiki/term#Japanese
* jisho: https://jisho.org/search/term - i used search instead of the word page itself because of alternative forms
	- names: https://jisho.org/search/term %23names
	- kanji https://jisho.org/search/term %23kanji
	- sentences: https://jisho.org/search/term %23sentences
* massif: https://massif.la/ja/search?q=term
* yourei (ADD THIS ;; ADDED 2022/10/30): https://yourei.jp/term
* https://qiita.com/fubarworld2/items/9da655df4d6d69750c06
* https://qiita.com/kt-tsutsumi/items/599f287f15b8e4cb84f3