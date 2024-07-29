const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false,startX,startScrollLeft;
//Add event listeners for the buttons to scroll the carousel left and right
arrowBtns.forEach(btn=>{
    btn.addEventListener("click",()=>{
carousel.scrollLeft +=btn.id ==="left"? -firstCardWidth : firstCardWidth ;
    })
})
const dragStart = (e) => {
    isDragging = true ;
  carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX =e.pageX;
    startScrollLeft =carousel.scrollLeft;
}
const dragging =(e)=>{
    if(!isDragging) return; //if isDragging is false return from here 
    // Updates the scroll position of the carousel based on the cursor movement 
    carousel.scrollLeft = startScrollLeft - (e.pageX -startX) ;
}
const dragStop=()=>{
    isDragging=false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);





const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function showPrevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Automatically show next slide every 5 seconds
setInterval(showNextSlide, 4000);























