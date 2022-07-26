const slides = document.querySelectorAll("section div.slides");
const arrowTag =  document.querySelector("img.arrow")

const easing = function (x) {
    return x * x * x
  }

slides.forEach(slide => {

    let current = 0; 
    let z = 100;
    
    const images = slide.querySelectorAll("img");
    
    images.forEach(image => {
        z = z - 1;
        image.style.zIndex = z;
    })

    const timeline = gsap.timeline()

    timeline
    .set(images, {
        x: () =>{
            return 500 * Math.random() - 250
        } , 
        y:"500%",
        rotation: () => {
            return 90 * Math.random() - 45
        } 
    })
    .to(images, { x:0, y:0 , stagger: -0.25})
    .to(images, { 
        rotation: () =>{
            return 16 * Math.random() - 8
        } 
    })

    slide.addEventListener("click", function(){
        
        z = z - 1;
    
        images[current].style.zIndex = z; 

        current = current + 1;
        current = current % images.length;
    })

})


const fadeArrow = function () {
    const pixels = window.pageYOffset
    
    arrowTag.style.opacity = 1 - easing(pixels / 100)
  }


window.addEventListener("scroll", function () {
    // fadeHeader()
    fadeArrow();
    // checkBlobs()
  })
  
  
  