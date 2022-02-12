// ==UserScript==
// @name        Heise-Anti-Popup
// @description Try to remove the annoying heise pop up
// @match       *://www.heise.de/*
// @match       *://heise.de/*
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/TheNoim/user-scripts/main/heise.js
// @downloadURL https://raw.githubusercontent.com/TheNoim/user-scripts/main/heise.js
// ==/UserScript==

const observer = new MutationObserver((mutationsList, observer) => {
	for (const mutation of mutationsList) {
		if (mutation.type !== "attributes") continue;
		if (mutation.attributeName !== "class") continue;
		const target = mutation.target;
		if (target.classList.value.includes("sp-message-open")) {
			observer.disconnect();
			const html = document.getElementsByTagName("html")[0];
			html.classList.remove("sp-message-open");
			setTimeout(() => {
				for (const element of document.querySelectorAll('div[id*="sp_message_container"]')) {
					element.remove();
				}
			}, 100);
		}
	}
});

observer.observe(document.getElementsByTagName("html")[0], {
	attributes: true,
});
