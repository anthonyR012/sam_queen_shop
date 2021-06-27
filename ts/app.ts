
// variables




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
        const aplicationAnimacionScroll : Element = document.querySelector("nav.navbar-expand-sm");
        if(valorDeEntrada===true){
           
        aplicationAnimacionScroll.classList.add("transicionAfterNav-css");

        }else{
            if(aplicationAnimacionScroll.classList.contains("transicionAfterNav-css")){
                
                aplicationAnimacionScroll.classList.remove("transicionAfterNav-css");
                aplicationAnimacionScroll.classList.add("transicionBeforeNav-css");
            }
        }
        
    }

