// variables
// inicio app
window.addEventListener("scroll", function () {
    var divAfer = document.querySelector(".scroll-css");
    var ubication = divAfer.getBoundingClientRect();
    if (ubication.top < 100) {
        changeAnimation(true);
    }
    else {
        changeAnimation(false);
    }
});
// funciones
function changeAnimation(valorDeEntrada) {
    var aplicationAnimacionScroll = document.querySelector("nav.navbar-expand-sm");
    if (valorDeEntrada === true) {
        aplicationAnimacionScroll.classList.add("transicionAfterNav-css");
    }
    else {
        if (aplicationAnimacionScroll.classList.contains("transicionAfterNav-css")) {
            aplicationAnimacionScroll.classList.remove("transicionAfterNav-css");
            aplicationAnimacionScroll.classList.add("transicionBeforeNav-css");
        }
    }
}
