// VARIABLES
const aplicationAnimacionScrollCategory :Element|null = document.querySelector(".sticky-top");

// INICIO
eventListners();
function eventListners(){
 
 window.addEventListener("scroll", positionScroll);



  
}
  // FUNCIONES
  function positionScroll(){    

    const ubication: DOMRect = aplicationAnimacionScrollCategory!!.getBoundingClientRect();
          if(ubication.top < 110){
            
            animationHeader(true);
          }else{
           
            animationHeader(false);
          }
    
      }


      function  animationHeader(valorDeEntrada: boolean):void {
        const aplicationAnimacionScrollHeader : Element|null = document.querySelector(".navbarPosition-css");
        
          if(valorDeEntrada===true && aplicationAnimacionScrollHeader){
           
            if(!aplicationAnimacionScrollCategory?.classList.contains("transitionBefore-cs")){
              aplicationAnimacionScrollHeader.classList.add("transitionBefore-css");
              aplicationAnimacionScrollCategory?.classList.add("transitionAfter-css");
            }else{
              aplicationAnimacionScrollHeader?.classList.remove("withoutAnimation-css");
              aplicationAnimacionScrollCategory?.classList.remove("withoutAnimation-css");
              aplicationAnimacionScrollCategory?.classList.remove("transitionAfter-css");
            }
         

    
    
          }else if(aplicationAnimacionScrollHeader){
              if(aplicationAnimacionScrollHeader.classList.contains("transitionBefore-css")){
           
                aplicationAnimacionScrollHeader?.classList.remove("transitionBefore-css");
                  aplicationAnimacionScrollCategory?.classList.remove("transitionAfter-css");
                  aplicationAnimacionScrollHeader?.classList.add("withoutAnimation-css");
                  aplicationAnimacionScrollCategory?.classList.add("withoutAnimation-css");
                  
              }
          }
          
    }



