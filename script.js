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
