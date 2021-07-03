"use strict";
// VARIABLES
var aplicationAnimacionScrollCategory = document.querySelector(".sticky-top");
// INICIO
eventListners();
function eventListners() {
    window.addEventListener("scroll", positionScroll);
}
// FUNCIONES
function positionScroll() {
    var ubication = aplicationAnimacionScrollCategory.getBoundingClientRect();
    if (ubication.top < 110) {
        animationHeader(true);
    }
    else {
        animationHeader(false);
    }
}
function animationHeader(valorDeEntrada) {
    var aplicationAnimacionScrollHeader = document.querySelector(".navbarPosition-css");
    if (valorDeEntrada === true && aplicationAnimacionScrollHeader) {
        if (!(aplicationAnimacionScrollCategory === null || aplicationAnimacionScrollCategory === void 0 ? void 0 : aplicationAnimacionScrollCategory.classList.contains("transitionBefore-cs"))) {
            aplicationAnimacionScrollHeader.classList.add("transitionBefore-css");
            aplicationAnimacionScrollCategory === null || aplicationAnimacionScrollCategory === void 0 ? void 0 : aplicationAnimacionScrollCategory.classList.add("transitionAfter-css");
        }
        else {
            aplicationAnimacionScrollHeader === null || aplicationAnimacionScrollHeader === void 0 ? void 0 : aplicationAnimacionScrollHeader.classList.remove("withoutAnimation-css");
            aplicationAnimacionScrollCategory === null || aplicationAnimacionScrollCategory === void 0 ? void 0 : aplicationAnimacionScrollCategory.classList.remove("withoutAnimation-css");
            aplicationAnimacionScrollCategory === null || aplicationAnimacionScrollCategory === void 0 ? void 0 : aplicationAnimacionScrollCategory.classList.remove("transitionAfter-css");
        }
    }
    else if (aplicationAnimacionScrollHeader) {
        if (aplicationAnimacionScrollHeader.classList.contains("transitionBefore-css")) {
            aplicationAnimacionScrollHeader === null || aplicationAnimacionScrollHeader === void 0 ? void 0 : aplicationAnimacionScrollHeader.classList.remove("transitionBefore-css");
            aplicationAnimacionScrollCategory === null || aplicationAnimacionScrollCategory === void 0 ? void 0 : aplicationAnimacionScrollCategory.classList.remove("transitionAfter-css");
            aplicationAnimacionScrollHeader === null || aplicationAnimacionScrollHeader === void 0 ? void 0 : aplicationAnimacionScrollHeader.classList.add("withoutAnimation-css");
            aplicationAnimacionScrollCategory === null || aplicationAnimacionScrollCategory === void 0 ? void 0 : aplicationAnimacionScrollCategory.classList.add("withoutAnimation-css");
        }
    }
}
