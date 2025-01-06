// ==UserScript==
// @name          Enable Copying for Question Headers
// @author        https://github.com/Anghkooey/
// @namespace     https://github.com/Anghkooey/focus-mode-bypass
// @version       1.1.0
// @description   Allows copying of question headers without interfering with buttons or other elements
// @include       *
// @run-at        document-end
// ==/UserScript==

(() => {
    // Target specific elements (e.g., headers of questions)
    const enableQuestionCopying = () => {
        document.querySelectorAll('.eminus_test_question h3.eminus_test_question_details.noselect').forEach((el) => {
            el.classList.remove('noselect'); // Remove 'noselect' class
            el.style.userSelect = 'text'; // Enable text selection
        });
    };

    // Monitor DOM for dynamically loaded content
    const observer = new MutationObserver(enableQuestionCopying);

    // Start observing changes
    observer.observe(document, { childList: true, subtree: true });

    // Initial run
    enableQuestionCopying();
})();