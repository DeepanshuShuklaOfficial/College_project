// for best offer and top destination card generation
// Card Data
const cards = [
    { name: "Ayodhya", location: "Uttar Pradesh", img: "images/card/Ayodhya, Uttar Pradesh/1.jpg", price: "₹8,000", discount: "Save 18%" },
    { name: "Taj Mahal", location: "Agra", img: "images/card/Taj Mahal, Agra/1.jpg", price: "₹6,000", discount: "Save 25%" },
    { name: "Kashi Vishwanath", location: "Varanasi", img: "images/card/Kashi Vishwanath Temple, Varanasi/1.jpg", price: "₹10,000", discount: "Save 12%" },
    { name: "Shirdi Sai Baba", location: "Maharashtra", img: "images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg", price: "₹5,500", discount: "Save 30%" },
    { name: "Jaipur", location: "Rajasthan", img: "images/card/Jaipur, Rajasthan/1.jpg", price: "₹9,000", discount: "Save 20%" },
    { name: "Mumbai", location: "Maharashtra", img: "images/card/Mumbai, Maharashtra/1.jpg", price: "₹12,000", discount: "Save 15%" },
    { name: "Udaipur", location: "Rajasthan", img: "images/card/Udaipur, Rajasthan/1.jpg", price: "₹10,000", discount: "Save 28%" },
    { name: "Rishikesh", location: "Uttarakhand", img: "images/card/Rishikesh, Uttarakhand/1.jpg", price: "₹8,500", discount: "Save 22%" }
];

// Top Destination Data
const topDestinations = [
    { name: "Goa", img: "images/card/Goa/1.jpg" },
    { name: "Kerala Backwaters", img: "images/card/Kerala Backwaters/1.jpg" },
    { name: "Delhi", img: "images/card/Delhi/1.jpg" },
    { name: "Mysore, Karnataka", img: "images/card/Mysore, Karnataka/1.jpg" },
    { name: "Hampi, Karnataka", img: "images/card/Hampi, Karnataka/1.jpg" },
    { name: "Jaisalmer, Rajasthan", img: "images/card/Jaisalmer, Rajasthan/1.jpg" },
    { name: "Amritsar, Punjab", img: "images/card/Amritsar, Punjab/1.jpg" },
    { name: "Shimla, Himachal Pradesh", img: "images/card/Shimla, Himachal Pradesh/1.jpg" },
    { name: "Manali, Himachal Pradesh", img: "images/card/Manali, Himachal Pradesh/1.jpg" },
    { name: "Darjeeling, West Bengal", img: "images/card/Darjeeling, West Bengal/1.jpg" },
    { name: "Leh-Ladakh, Jammu and Kashmir", img: "images/card/Leh-Ladakh, Jammu & Kashmir/1.jpg" },
    { name: "Khajuraho, Madhya Pradesh", img: "images/card/Khajuraho, Madhya Pradesh/1.jpg" },
    { name: "Ajanta and Ellora Caves, Maharashtra", img: "images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg" },
    { name: "Sundarbans, West Bengal", img: "images/card/Sundarbans, West Bengal/1.jpg" },
    { name: "Andaman and Nicobar Islands", img: "images/card/Andaman and Nicobar Islands/1.jpg" }
];

// Generate Cards
function generateCards() {
    const cardWrapper = document.getElementById("cardWrapper");
    cardWrapper.innerHTML = "";
    cards.forEach(card => {
        const cardDiv = `
            <div class="card imp hover:shadow-md border box-border border-[#253d2c] p-1.5 mx-1 rounded min-w-[calc(100%/2-6px)] md:min-w-[calc(100%/4-6px)]">
             <a href="card.html?destination=${card.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}" class="block">
            <img class="mb-1 m-auto sharp rounded h-[100px] md:h-[200px] w-full object-cover object-top" src="${card.img}" alt="${card.name}">
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



// Generate Top Destinations
function generateTopDestinations() {
    const topDestWrapper = document.getElementById("topDestWrapper");
    topDestWrapper.innerHTML = "";
    topDestinations.forEach(dest => {
        const destDiv = `
         <a href="card.html?destination=${dest.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}" class="block">
            <div class="border imp m-auto rounded h-full w-full p-1.5 flex flex-col justify-between hover:shadow-md transition-all">
                <img class="rounded sharp h-[80px] md:h-[160px] w-full object-cover object-top" src="${dest.img}" alt="${dest.name}">
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

// Call Functions
generateCards();
generateTopDestinations();


// ================================================================================================================================================================================



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

// for last to top scroll

function scrollToTop() {
    const header = document.getElementById("header");
    if (header) {
        header.scrollIntoView({ behavior: "smooth" });
    }
}

// for scroll to booking
function scrollToBookNow() {
    const Booking = document.getElementById("Booking");
    if (Booking) {
        Booking.scrollIntoView({ behavior: "smooth" });
    }
}


// for hamburger menu

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full'); // Slide in
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full'); // Slide out
});



