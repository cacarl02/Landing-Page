//navbar toggle

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.nav-link');

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

//faqlist reveal
const toggleFaq = document.querySelectorAll('.faqtoggle');
const faqArray = document.querySelectorAll('.faqans');

for (let i=0; i<toggleFaq.length; i++) {
  toggleFaq[i].addEventListener('click', function() {
    toggleFaq[i].classList.toggle('toggled');
    faqArray[i].classList.toggle('hidden');
  })
}

//form pop-up and close
const openForm = document.querySelectorAll('.enrollnow');
const closeForm = document.querySelector('.close');

for (let i=0; i<openForm.length; i++) {
  openForm[i].addEventListener('click', function() {
    document.querySelector('#formpopup').classList.add('active');
  })
}

closeForm.addEventListener('click', function() {
  document.querySelector('#formpopup').classList.remove('active');
})

// forms validation
let isNameValid = false;
let isEmailValid = false;
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");

const validateInput = () => {
  nameInput.classList.add('invalid');
  nameInput.nextElementSibling.classList.remove('hidden');
  isNameValid = false;
  if(nameInput.value) {
    nameInput.classList.remove('invalid');
    nameInput.nextElementSibling.classList.add('hidden');
    isNameValid = true;
  }
  emailInput.classList.add('invalid');
  emailInput.nextElementSibling.classList.remove('hidden');
  isEmailValid = false;
  if(emailInput.value.match(pattern)) {
    isEmailValid = true;
    emailInput.classList.remove('invalid');
    emailInput.nextElementSibling.classList.add('hidden');
  }
}

form.addEventListener("submit", (event) => {
  validateInput();
  if(isEmailValid && isNameValid) {
    form.submit();
  } else {
    event.preventDefault();
  }
});

nameInput.addEventListener('submit', () => {
  validateInput();
})

//for scroll reveal
window.addEventListener('scroll', reveal);

function reveal (){
  var revealLeft = document.querySelectorAll('.reveal-left');
  var revealRight = document.querySelectorAll('.reveal-right');
  var revealUp = document.querySelectorAll('.reveal-up');

  for (let i=0; i<revealLeft.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = revealLeft[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if(revealtop < windowheight - revealpoint){
      revealLeft[i].classList.add('active');
    } else {
      revealLeft[i].classList.remove('active')
    }
  }
  for (let i=0; i<revealRight.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = revealRight[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if(revealtop < windowheight - revealpoint){
      revealRight[i].classList.add('active');
    } else {
      revealRight[i].classList.remove('active')
    }
  }
  for (let i=0; i<revealUp.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = revealUp[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if(revealtop < windowheight - revealpoint){
      revealUp[i].classList.add('active');
    } else {
      revealUp[i].classList.remove('active')
    }
  }
}

//for checking of queries
console.log(toggleButton);
console.log(navbarLinks);
console.log(openForm);
console.log(closeForm);
console.log(nameInput);
console.log(emailInput);
console.log(form);