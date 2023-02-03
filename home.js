
const btn = document.querySelector('#nav-toggle')
const arrow = document.querySelector('.arrow')
const myImage = document.querySelector('.my_image')
let el = document.getElementById('tilt')

// function for menu to open and close 
const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

// event listener for arrow to remove on click 
btn.addEventListener('click', function (){
  arrow.classList.toggle('hidden')
})

// slider 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4.2,
  spaceBetween: 10,

  breakpoints:{
    
    1312:{
      slidesPerView: 4.2,
      spaceBetween:50,
    },
    
    850:{
     slidesPerView:3.8,
    },
    670:{
      slidesPerView:3.5,
      spaceBetween: 40,
    },
   
   550:{
    slidesPerView:3.2,
   }, 

   310:{
    slidesPerView:3, 
   },

   280:{
    slidesPerView:2.6,
   }
  }
  
  
  
});

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  */
el.addEventListener('mousemove', handleMove)


function handleMove(e) {
  
  const xVal = e.layerX
 
  const yVal = e.layerY
  
  const yRotation = 8 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -8 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})


