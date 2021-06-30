// VARIABLES
const sentenceAround1 = document.querySelector("p.around1");
const sentenceAround2 = document.querySelector("p.around2");
const sentenceAround3 = document.querySelector("p.around3");

// INICIO
eventListners();
function eventListners(){
  window.addEventListener("scroll", positionScroll);
  




  
}
  // FUNCIONES




function positionScroll(){    
  const divAfer :Element|null = document.querySelector(".scroll-css");
  const ubication: DOMRect = divAfer!!.getBoundingClientRect();
        if(ubication.top < 100){
          
          animationHeader(true);
        }else{
          animationHeader(false);
        }
  
    }
  
function  animationHeader(valorDeEntrada: boolean):void {
    const aplicationAnimacionScroll : Element|null = document.querySelector("nav.navbar-expand-sm");

      if(valorDeEntrada===true && aplicationAnimacionScroll){
        
      aplicationAnimacionScroll.classList.add("transicionAfterNav-css");

      }else if(aplicationAnimacionScroll){
          if(aplicationAnimacionScroll.classList.contains("transicionAfterNav-css")){
              
              aplicationAnimacionScroll.classList.remove("transicionAfterNav-css");
              aplicationAnimacionScroll.classList.add("transicionBeforeNav-css");
          }
      }
      
}
  