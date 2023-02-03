const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };
  
  const btn = document.querySelector('#nav-toggle')
  const arrow = document.querySelector('.arrow')
  
  btn.addEventListener('click', function (){
    arrow.classList.toggle('hidden')
  })
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4.2,
    
    
  });
 