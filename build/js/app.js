"use strict";
// VARIABLES
var arrowChange = document.querySelectorAll(".iconMover-css");
var categoryChange = document.querySelector(".iconSlider-css");
var iconLeft = document.querySelector(".iconLeft-css");
var iconRigth = document.querySelector(".iconRigth-css");
// INICIO
eventListners();
function eventListners() {
    window.addEventListener("scroll", positionScroll);
    arrowChange[0].addEventListener("click", function () {
        //  if(categoryChange?.classList.contains("move-left")){
        //   categoryChange.classList.remove("move-left");
        //  }else{
        //  categoryChange?.classList.add("move-left");
        //  }
        if (categoryChange === null || categoryChange === void 0 ? void 0 : categoryChange.classList.contains("move-left")) {
            categoryChange.classList.remove("move-left");
        }
        else {
            iconLeft === null || iconLeft === void 0 ? void 0 : iconLeft.classList.add("move-left");
            console.log(iconLeft);
        }
    });
    arrowChange[1].addEventListener("click", function () {
        // if(categoryChange?.classList.contains("move-rigth")){
        //   categoryChange?.classList.remove("move-rigth");
        // }else{
        // categoryChange?.classList.add("move-rigth");
        // }
        if (categoryChange === null || categoryChange === void 0 ? void 0 : categoryChange.classList.contains("move-rigth")) {
            categoryChange === null || categoryChange === void 0 ? void 0 : categoryChange.classList.remove("move-rigth");
        }
        else {
            iconLeft === null || iconLeft === void 0 ? void 0 : iconLeft.classList.add("move-rigth");
            console.log(iconRigth);
        }
    });
}
// FUNCIONES
function positionScroll() {
    var divAfer = document.querySelector(".scroll-css");
    var ubication = divAfer.getBoundingClientRect();
    if (ubication.top < 100) {
        animationHeader(true);
    }
    else {
        animationHeader(false);
    }
}
function animationHeader(valorDeEntrada) {
    var aplicationAnimacionScroll = document.querySelector("nav.navbar-expand-sm");
    if (valorDeEntrada === true && aplicationAnimacionScroll) {
        aplicationAnimacionScroll.classList.add("transicionAfterNav-css");
    }
    else if (aplicationAnimacionScroll) {
        if (aplicationAnimacionScroll.classList.contains("transicionAfterNav-css")) {
            aplicationAnimacionScroll.classList.remove("transicionAfterNav-css");
            aplicationAnimacionScroll.classList.add("transicionBeforeNav-css");
        }
    }
}
