const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };

  // slider 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4.2,
    
    
  });
   
  const website = document.querySelector('.website')
  const code = document.querySelector('.code')
  const overlay = document.querySelector('.overlay')

