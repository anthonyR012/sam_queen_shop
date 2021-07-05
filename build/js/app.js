"use strict";
// VARIABLES
var aplicationAnimacionScrollCategory = document.querySelector(".sticky-top");
var colorClickDesplegable = document.querySelector(".activeDesplegable-css");
// INICIO
eventListners();
function eventListners() {
    colorClickDesplegable === null || colorClickDesplegable === void 0 ? void 0 : colorClickDesplegable.addEventListener("click", clickAtDesplegable);
    window.addEventListener("scroll", positionScroll);
}
// FUNCIONES
function clickAtDesplegable() {
    var objectColorHeader = document.querySelector(".navbarPosition-css");
    var colorFondo = window.getComputedStyle(objectColorHeader).backgroundColor;
    if (objectColorHeader && colorFondo == "rgba(0, 0, 0, 0)") {
        objectColorHeader.setAttribute("style", "background-color:#266b76;transition-duration:1s");
        colorClickDesplegable === null || colorClickDesplegable === void 0 ? void 0 : colorClickDesplegable.classList.add("disabled");
        sloganOpacoHeader(1);
        setTimeout(function () {
            colorClickDesplegable === null || colorClickDesplegable === void 0 ? void 0 : colorClickDesplegable.classList.remove("disabled");
            console.log(colorClickDesplegable);
        }, 1000);
    }
    else if (objectColorHeader) {
        objectColorHeader.setAttribute("style", "background-color:none;transition-duration:0.5s");
        sloganOpacoHeader(0);
    }
}
function sloganOpacoHeader(param) {
    var slogan = document.querySelector(".containerSlogan-css");
    if (param == 1 && slogan) {
        slogan.setAttribute("style", "opacity:0;transition-duration:0.2s");
    }
    else if (slogan) {
        slogan.setAttribute("style", "opacity:100;transition-duration:0.5s");
    }
}
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
