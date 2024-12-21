// ==UserScript==
// @name         Catbox.moe Paste
// @namespace    yuniDev.catbox-paste
// @version      1.0
// @description  Allows for pasting files directly into catbox.moe
// @author       Alex Davies (yuniDev)
// @match        https://catbox.moe/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=catbox.moe
// @grant        none
// @run-at       document-body
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('paste', async (e) => {
        e.preventDefault();

        [...e.clipboardData.items].forEach(item => Dropzone.instances[0].addFile(item.getAsFile()));
    });
})();
