$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 8000,
        dots: true,
        
    });
  
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: 8000,
        arrows: true,
        responsive: [
          {
            breakpoint: 980,
            settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }},{
            breakpoint: 780,
            settings: {
              
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
})

const cartButton = document.querySelector("#cart-button");
const contactButton = document.querySelector("#contacts-form");
const calendButton = document.querySelector("#contacts-calendar");
const modal = document.querySelector(".modal");
const modalContacts = document.querySelector(".modal-contacts");
const modalCalendar = document.querySelector(".modal-contacts-calendar");
const close = document.querySelector(".close");
const closeBut = document.querySelector(".close-button");
const closeButCalend = document.querySelector('.close-button-calendar');

cartButton.addEventListener("click", toggleModal);
contactButton.addEventListener("click", toggleModalBut);
calendButton.addEventListener('click', toggleModalButCalend);
close.addEventListener("click", toggleModal);
closeBut.addEventListener("click", toggleModalBut);
closeButCalend.addEventListener("click", toggleModalButCalend);


function toggleModal() {
  modal.classList.toggle("is-open");
}

function toggleModalBut() {
  modalContacts.classList.toggle("is-open-but");
}

function toggleModalButCalend() {
  modalCalendar.classList.toggle("is-open-but-calend");
}

