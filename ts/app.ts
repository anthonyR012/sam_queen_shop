
// variables
const aplicationAnimacionScroll : Element = document.querySelector("nav.navbar-expand-sm");



// inicio app
window.addEventListener("scroll" ,()=>{
  const divAfer :Element = document.querySelector(".scroll-css");
  const ubication: DOMRect = divAfer.getBoundingClientRect();
    if(ubication.top < 100){
        changeAnimation(true);
    }else{
        changeAnimation(false);
    }

})


// funciones
    function  changeAnimation(valorDeEntrada: boolean):void {
        if(valorDeEntrada===true){
        aplicationAnimacionScroll.classList.add("transicionColorNav-css");
        }else{
            if(aplicationAnimacionScroll.className==="transicionColorNav-css"){
                aplicationAnimacionScroll.remove();
            }
        }
        
    }

