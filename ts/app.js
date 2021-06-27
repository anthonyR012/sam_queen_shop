// variables
var aplicationAnimacionScroll = document.querySelector("nav.navbar-expand-sm");
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
    if (valorDeEntrada === true) {
        aplicationAnimacionScroll.classList.add("transicionColorNav-css");
    }
    else {
        if (aplicationAnimacionScroll.className === "transicionColorNav-css") {
            aplicationAnimacionScroll.remove();
        }
    }
}
