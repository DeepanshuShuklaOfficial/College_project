const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");
let counter = 0;

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    } else {
        counter = 0; // Loop back to first image
        slideImage();
    }
};

const goPre = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    } else {
        counter = slides.length - 1; // Loop back to last image
        slideImage();
    }
};

const slideImage = () => {
    slider.style.transform = `translateX(-${counter * 100}%)`;
};

// Auto-slide every 5 seconds
setInterval(goNext, 5000);


// for card section 

let index = 0;
const cardWrapper = document.getElementById("cardWrapper");
const totalCards = document.querySelectorAll(".card").length;

function getCardsToShow() {
    return window.innerWidth < 768 ? 2 : 4; // true pe mobile view , false pe pc view
}

function updateSlide() {
    const cardsToShow = getCardsToShow();
    const totalSlides = Math.ceil(totalCards / cardsToShow);

    index = Math.max(0, Math.min(index, totalSlides - 1));
    const translateX = index * -100;
    cardWrapper.style.transform = `translateX(${translateX}%)`;
}

function nextSlide() {
    index++;
    updateSlide();
}

function prevSlide() {
    index--;
    updateSlide();
}

window.addEventListener("resize", updateSlide);
