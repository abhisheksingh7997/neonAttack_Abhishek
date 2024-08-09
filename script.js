const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
let isDragging = false, startX, startScrollLeft;
//Add event listeners for the buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragging) return; //if isDragging is false return from here 
    // Updates the scroll position of the carousel based on the cursor movement 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);





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

// for sliding hovers
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
        }, 100);
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

// for countdown timer at top
document.addEventListener("DOMContentLoaded", function () {
    // Set the end time for the countdown (for example, 7 hours from now)
    let endTime = new Date().getTime() + (7 * 60 * 60 * 1000);

    // Update the countdown every second
    let countdownTimer = setInterval(function () {
        let now = new Date().getTime();
        let timeLeft = endTime - now;

        // Calculate hours, minutes, and seconds
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

        // If the countdown is over, clear the interval
        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").textContent = "EXPIRED";
        }
    }, 1000);

    // Close the notification banner
    document.getElementById("closeButton").onclick = function () {
        document.getElementById("notificationBanner").style.display = "none";
    };
});
