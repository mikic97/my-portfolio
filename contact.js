// slider 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4.2,
    
    
  });

  const toggleNav = () => {
    document.body.dataset.nav =
      document.body.dataset.nav === "true" ? "false" : "true";
  };

  
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  validateInput()
})

const validateInput = () => {
  let email = emailInput.value
  let textarea = textareaInput.value

  if (!email && !textarea) {
    setError(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please fill in the required inputs')
  } else if (!email && textarea) {
    setError(emailInput.parentElement)
    showMessage("Oops Email can't be empty")
  } else if (!textarea && email) {
    setError(textareaInput.parentElement)
    showMessage('Please provide a message')
  } else if (!validateEmail(emailInput.value)) {
    setError(emailInput.parentElement) 
    showMessage('Please provide correct email')
  } else if (email && textarea) {
    emailjs.sendForm(
      'service_b97dsll',
      'template_br8a0qp',
      contactForm,
      'NkJzVcVs79TDOIU55',
    )
    setSuccess(emailInput.parentElement)
    setSuccess(textareaInput.parentElement)
    showMessage('Message sent successfully', 'green')
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    subjectInput.value = ''
  }
}

const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}
const setSuccess = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const validateEmail = email => {
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
  return true;
} 
return false;
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messageDiv.prepend(divContent)

  
  messageDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 2000)
}

  
  
  
var lat = 46.54921;
var lng = 15.55092;
 
var map = L.map('map').setView([lat, lng], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([lat, lng]).addTo(map)
.bindPopup(`Nikola Mikic </br> Slovenia, Maribor <br> mikiic997@gmail.com`)
    .openPopup();