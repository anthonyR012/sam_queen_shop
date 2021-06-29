"use strict";
// VARIABLES
var sentenceAround1 = document.querySelector("p.around1");
var sentenceAround2 = document.querySelector("p.around2");
var sentenceAround3 = document.querySelector("p.around3");
// INICIO
eventListners();
function eventListners() {
    window.addEventListener("scroll", positionScroll);
    // setInterval(stateVisible,3000);
}
// FUNCIONES
// function stateVisible(){
//   if(sentenceAround2?.classList.contains("visually-hidden") && sentenceAround3?.classList.contains("visually-hidden")){
//     sentenceAround2?.classList.remove("visually-hidden");
//     sentenceAround1?.classList.add("visually-hidden");
//   }else if(sentenceAround3?.classList.contains("visually-hidden") && sentenceAround1?.classList.contains("visually-hidden")){
//     sentenceAround3?.classList.remove("visually-hidden");   
//     sentenceAround2?.classList.add("visually-hidden");
// }else if( sentenceAround1?.classList.contains("visually-hidden") && sentenceAround2?.classList.contains("visually-hidden")){
//   sentenceAround1?.classList.remove("visually-hidden");
//   sentenceAround3?.classList.add("visually-hidden");
// }
// }
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
