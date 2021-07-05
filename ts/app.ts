// VARIABLES
const aplicationAnimacionScrollCategory :Element|null = document.querySelector(".sticky-top");
const colorClickDesplegable = document.querySelector(".activeDesplegable-css");
const categoryCarrusel = document.querySelector("#carouselExampleControls");



// INICIO
eventListners();
function eventListners(){

 window.addEventListener("scroll", positionScroll);
 document.onclick = eventsClickDocuments;
  
}
  // FUNCIONES

function eventsClickDocuments(e:any){
  const clickState = e.target.classList;

  if(clickState.contains("logoSam-css")){
    
    clickCategorySliderState(1)

  }else if(clickState.contains("btn-close") || e.target.classList.contains("modal-backdrop")){
    
    clickCategorySliderState(0)

  }else if(clickState.contains("activeDesplegable-css")){
    clickAtDesplegable();
  }

}
  
function clickCategorySliderState(e:number){

  if(e == 1){
    categoryCarrusel?.setAttribute("style", "opacity:0;transition-duration:0.2s;visibility:hidden");
  }else{
    categoryCarrusel?.setAttribute("style", "opacity:100;transition-duration:3s;visibility:visible");
  }
}

  function clickAtDesplegable(){
    const objectColorHeader :Element|null = document.querySelector(".navbarPosition-css");
    const colorFondoState = window.getComputedStyle(objectColorHeader!!).backgroundColor;

    if(objectColorHeader && colorFondoState == "rgba(0, 0, 0, 0)"){
        objectColorHeader.setAttribute("style", "background-color:#266b76;transition-duration:1s");

        colorClickDesplegable?.classList.add("disabled");
        
        sloganOpacoHeader(1);
        setTimeout(() => {
          colorClickDesplegable?.classList.remove("disabled");
          
        }, 1000);


    }else if(objectColorHeader){
      objectColorHeader.setAttribute("style", "background-color:none;transition-duration:0.5s");
      sloganOpacoHeader(0);
    }
    

  }


  function sloganOpacoHeader(param: number){
    const slogan:Element|null = document.querySelector(".containerSlogan-css");
    if(param == 1 && slogan){
      slogan.setAttribute("style", "opacity:0;transition-duration:0.2s");
    }else if(slogan){
      slogan.setAttribute("style", "opacity:100;transition-duration:0.5s");
    }
  }

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



