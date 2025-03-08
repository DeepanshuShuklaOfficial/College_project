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










// for login and signup form 
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const formTitle = document.getElementById("form-title");
const toggleText = document.getElementById("toggle-text");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    if (loginForm.classList.contains("hidden")) {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        formTitle.textContent = "Login";
        toggleText.textContent = "Don't have an account?";
        toggleBtn.textContent = "Sign up";
    } else {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        formTitle.textContent = "Sign Up";
        toggleText.textContent = "Already have an account?";
        toggleBtn.textContent = "Login";
    }
});

function togglePassword(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// for login scroll 

function scrollToLogin() {
    const loginSection = document.getElementById("login-section");
    if (loginSection) {
        loginSection.scrollIntoView({ behavior: "smooth" });
    }
}
