"use strict";
// VARIABLES
var aplicationAnimacionScrollCategory = document.querySelector(".sticky-top");
var colorClickDesplegable = document.querySelector(".activeDesplegable-css");
var categoryCarrusel = document.querySelector(".sticky-top");
// INICIO
eventListners();
function eventListners() {
    window.addEventListener("scroll", positionScroll);
    document.onclick = eventsClickDocuments;
}
// FUNCIONES
function eventsClickDocuments(e) {
    var clickState = e.target.classList;
    if (clickState.contains("logoMenuIzquierdo-css")) {
        clickCategorySliderState(1);
    }
    else if (clickState.contains("btn-close") || e.target.classList.contains("modal-backdrop")) {
        clickCategorySliderState(0);
    }
    else if (clickState.contains("activeDesplegable-css")) {
        clickAtDesplegable();
    }
}
function clickCategorySliderState(e) {
    if (e == 1) {
        categoryCarrusel === null || categoryCarrusel === void 0 ? void 0 : categoryCarrusel.setAttribute("style", "opacity:0;transition-duration:0.2s;visibility:hidden");
    }
    else {
        categoryCarrusel === null || categoryCarrusel === void 0 ? void 0 : categoryCarrusel.setAttribute("style", "opacity:100;transition-duration:3s;visibility:visible");
    }
}
function clickAtDesplegable() {
    var objectColorHeader = document.querySelector(".navbarPosition-css");
    var colorFondoState = window.getComputedStyle(objectColorHeader).backgroundColor;
    if (objectColorHeader && colorFondoState == "rgba(0, 0, 0, 0)") {
        objectColorHeader.setAttribute("style", "background-color:#266b76;transition-duration:0.5s");
        colorClickDesplegable === null || colorClickDesplegable === void 0 ? void 0 : colorClickDesplegable.classList.add("disabled");
        sloganOpacoHeader(1);
        setTimeout(function () {
            colorClickDesplegable === null || colorClickDesplegable === void 0 ? void 0 : colorClickDesplegable.classList.remove("disabled");
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
        slogan.setAttribute("style", "opacity:0");
    }
    else if (slogan) {
        slogan.setAttribute("style", "opacity:100");
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
