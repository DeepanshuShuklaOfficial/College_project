//This is for image slider section at the top
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");
let counter = 0;

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    } else {
        counter = 0;
        slideImage();
    }
};

const goPre = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    } else {
        counter = slides.length - 1;
        slideImage();
    }
};

const slideImage = () => {
    slider.style.transform = `translateX(-${counter * 100}%)`;
};

setInterval(goNext, 4000);

//This is for best offer cards
function generateCards() {
    const cardWrapper = document.getElementById("cardWrapper");
    cardWrapper.innerHTML = "";
    cards.forEach(card => {
        const cardDiv = `
            <div class="card imp hover:shadow-md border box-border border-[#253d2c] p-1.5 mx-1 rounded min-w-[calc(100%/2-6px)] md:min-w-[calc(100%/4-6px)]">
             <a href="card.html?destination=${card.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}" class="block">
            <img class="mb-1 m-auto sharp rounded h-[100px] md:h-[200px] w-full object-cover object-top" src="${card.img}" alt="${card.name}" loading="lazy">
                <h1 class="text-[16px] text-white font-extrabold">${card.name}</h1>
                <h2 class="text-[12px] dark1">${card.location}</h2>
                <div class="head h-0.5 my-2"></div>
                <div class="flex justify-between items-center">
                    <p class="text-[13px] dark4 rounded font-bold">${card.discount}</p>
                    <button class="head cursor-pointer dark1 font-bold p-1 px-2 rounded">${card.price}</button>
 
                </div>
            </div>
           </a> 
        `;
        cardWrapper.innerHTML += cardDiv;
    });
}

//This is for best offer cards slide functionality 

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

//This is for Top Destinations cards
function generateTopDestinations() {
    const topDestWrapper = document.getElementById("topDestWrapper");
    topDestWrapper.innerHTML = "";
    topDestinations.forEach(dest => {
        const destDiv = `
         <a href="card.html?destination=${dest.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}" class="block">
            <div class="border border-[#253d2c] imp m-auto rounded h-full w-full p-1.5 flex flex-col justify-between hover:shadow-md transition-all">
                <img class="rounded sharp h-[80px] md:h-[160px] w-full object-cover object-top" src="${dest.img}" alt="${dest.name}" loading="lazy">
                <div class="flex justify-between items-end mt-auto">
                    <h2 class="text-white font-bold text-[12px] md:text-[16px] w-[80%]">${dest.name}</h2>
                    <i class="fa-solid fa-circle-right dark4 text-[18px]"></i>
                </div>
            </div>
        </a>
        `;
        topDestWrapper.innerHTML += destDiv;
    });
}
generateCards();
generateTopDestinations();

//This is for the login and signup forms 
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

// These is for scroll functionalities that applied different elements in the index.html pages 
function scrollToLogin() {
    const loginSection = document.getElementById("login-section");
    if (loginSection) {
        loginSection.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToTop() {
    const header = document.getElementById("header");
    if (header) {
        header.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToBookNow() {
    const BookNow = document.getElementById("Booking");
    if (BookNow) {
        BookNow.scrollIntoView({ behavior: "smooth" });
    }
}


function scrollToTopDestination() {
    const topDestinations = document.getElementById("destinations");
    if (topDestinations) {
        topDestinations.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollTobottom() {
    const footer = document.getElementById("footer");
    if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
    }
}

// this controls the slide in functionality of navigation div extender [only for small screen devices]

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full'); 
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full'); 
});


function profilebtn() {
    const profile = document.getElementById("auth-container");
    if (profile.style.display === "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
}


// this controls the destination tab both in desktop and phones
const btn = document.getElementById('destinations-btn');
const dropdown = document.getElementById('dropdown-menu');
const desktopChevron = document.getElementById('desktop-chevron');

let desktopMenuOpen = false;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    desktopMenuOpen = !desktopMenuOpen;

    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('flex');

    if (desktopMenuOpen) {
        desktopChevron.classList.add('rotate-180');
    } else {
        desktopChevron.classList.remove('rotate-180');
    }
});

document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
        dropdown.classList.remove('flex');
        desktopChevron.classList.remove('rotate-180');
        desktopMenuOpen = false;
    }
});


const dropdownBtn = document.getElementById("mobile-destinations-btn");
const dropdownMenu = document.getElementById("mobile-dropdown-menu");
const chevron = document.getElementById("mobile-chevron");

let isOpen = false;

dropdownBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        dropdownMenu.classList.remove("max-h-0");
        dropdownMenu.classList.add("max-h-64");
        chevron.classList.add("rotate-180");
    } else {
        dropdownMenu.classList.remove("max-h-64");
        dropdownMenu.classList.add("max-h-0");
        chevron.classList.remove("rotate-180");
    }
});












