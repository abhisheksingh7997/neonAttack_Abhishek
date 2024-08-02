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

// for frequently asked questions .
let questionsVisible = false;

function toggleQuestions() {
    const faqs = document.querySelectorAll('.faq');
    const faqHeaderSign = document.querySelector('.faq-header .plus-sign');

    faqs.forEach(faq => {
        faq.style.display = questionsVisible ? 'none' : 'block';
    });
    faqHeaderSign.style.transform = questionsVisible ? "rotate(0deg)" : "rotate(45deg)";
    questionsVisible = !questionsVisible;
}

function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    const plusSigns = document.querySelectorAll('.faq .plus-sign');

    if (answers[index].style.maxHeight) {
        answers[index].style.maxHeight = null;
        plusSigns[index].style.transform = "rotate(0deg)";
    } else {
        answers.forEach((answer, i) => {
            answer.style.maxHeight = null;
            plusSigns[i].style.transform = "rotate(0deg)";
        });
        answers[index].style.maxHeight = answers[index].scrollHeight + "px";
        plusSigns[index].style.transform = "rotate(45deg)";
    }
}


const menuLinks = document.querySelectorAll('.pack');
const cardContainers = document.querySelectorAll('.card-container');

menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        const target = link.getAttribute('data-target');
        
        cardContainers.forEach(container => {
            container.style.display = 'none';
        });
        
        document.getElementById(target).style.display = 'flex';
    });

    link.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (![...cardContainers].some(container => container.matches(':hover'))) {
                cardContainers.forEach(container => {
                    container.style.display = 'none';
                });
            }
        }, 200);
    });
});

cardContainers.forEach(container => {
    container.addEventListener('mouseleave', () => {
        container.style.display = 'none';
    });

    container.addEventListener('mouseover', () => {
        container.style.display = 'flex';
    });
});



















