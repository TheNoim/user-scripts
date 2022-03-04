// ==UserScript==
// @name         South Park Native Fullscreen
// @version      1.0.0
// @description  Open south park video player in native fullscreen
// @author       Nils Bergmann
// @match        *://www.southpark.de/folgen/**
// @match        *://southpark.de/folgen/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=southpark.de
// @updateURL    https://raw.githubusercontent.com/TheNoim/user-scripts/main/south-park.js
// @downloadURL  https://raw.githubusercontent.com/TheNoim/user-scripts/main/south-park.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    (new MutationObserver(check)).observe(document, {childList: true, subtree: true});

    function check(changes, observer) {
        if (document.querySelector('.edge-gui-fullscreen-button')) {
            console.log("found")
            observer.disconnect();
            document.querySelector(".edge-gui-fullscreen-button").onclick = () => {
                console.log("clicked");
                document.querySelector(".edge-player-content-element").webkitEnterFullscreen();
            }
        }
    }
})();