const tours = {
    "ayodhya": {
        title: "Ayodhya Tour",
        location: "Uttar Pradesh, India",
        price: "₹8,000",
        discount: "Save 18%",
        description: "Experience the rich cultural heritage of Ayodhya with expert guides.",
        images: [
            "images/card/Ayodhya, Uttar Pradesh/1.jpg",
            "images/card/Ayodhya, Uttar Pradesh/1.jpg",
            "images/card/Ayodhya, Uttar Pradesh/1.jpg"
        ],
        highlights: ["Historical Sites", "Local Guide", "Cultural Experience"],
        faq: [
            { question: "Is food included?", answer: "No, but there are restaurants nearby." },
            { question: "Are pets allowed?", answer: "No, pets are not allowed except for service animals." }
        ]
    },
    "taj-mahal": {
        title: "Taj Mahal Tour",
        location: "Agra, India",
        price: "₹6,000",
        discount: "Save 25%",
        description: "Explore the beauty of the Taj Mahal with a guided tour, including visits to Agra Fort & local markets.",
        images: [
            "images/card/Taj Mahal, Agra/1.jpg"
        ],
        highlights: ["Guided Tour", "Free WiFi", "Meals Included", "Hotel Pickup"],
        faq: [
            { question: "What is included in the tour?", answer: "The tour includes guided visits, meals, and hotel pickup." },
            { question: "Can I cancel my booking?", answer: "Yes, cancellations are allowed up to 24 hours before departure." }
        ]
    },
    "kashi-vishwanath": {
        title: "Kashi Vishwanath Tour",
        location: "Varanasi, India",
        price: "₹10,000",
        discount: "Save 12%",
        description: "Visit the sacred Kashi Vishwanath Temple and explore the spiritual essence of Varanasi.",
        images: [
            "images/card/Kashi Vishwanath Temple, Varanasi/1.jpg"
        ],
        highlights: ["Spiritual Experience", "Ganga Aarti", "Local Guide"],
        faq: [
            { question: "Are photography and videography allowed?", answer: "Photography is restricted inside the temple premises." },
            { question: "Is there a dress code?", answer: "Yes, visitors are advised to wear traditional attire." }
        ]
    },
    "shirdi-sai-baba": {
        title: "Shirdi Sai Baba Tour",
        location: "Maharashtra, India",
        price: "₹5,500",
        discount: "Save 30%",
        description: "Seek the blessings of Sai Baba at the holy town of Shirdi with a spiritual tour.",
        images: [
            "images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg"
        ],
        highlights: ["Darshan Experience", "Accommodation Assistance", "Local Sightseeing"],
        faq: [
            { question: "Is prasad provided?", answer: "Yes, prasad is available at the temple." },
            { question: "Is there a VIP entry?", answer: "Yes, VIP darshan tickets are available at an extra cost." }
        ]
    },
    "jaipur": {
        title: "Jaipur Tour",
        location: "Rajasthan, India",
        price: "₹9,000",
        discount: "Save 20%",
        description: "Discover the royal heritage of Jaipur, including palaces, forts, and local markets.",
        images: [
            "images/card/Jaipur, Rajasthan/1.jpg"
        ],
        highlights: ["Heritage Walk", "Fort Visits", "Local Cuisine"],
        faq: [
            { question: "Is transportation provided?", answer: "Yes, transport is included for sightseeing." },
            { question: "Are entry fees included?", answer: "No, monument entry fees are not included." }
        ]
    },
    "mumbai": {
        title: "Mumbai Tour",
        location: "Maharashtra, India",
        price: "₹12,000",
        discount: "Save 15%",
        description: "Explore the bustling city of Mumbai with its iconic landmarks and vibrant culture.",
        images: [
            "images/card/Mumbai, Maharashtra/1.jpg"
        ],
        highlights: ["City Tour", "Bollywood Experience", "Beach Walks"],
        faq: [
            { question: "Can we visit Bollywood studios?", answer: "Yes, optional Bollywood tours are available." },
            { question: "Is accommodation included?", answer: "No, but we can assist in booking hotels." }
        ]
    },
    "udaipur": {
        title: "Udaipur Tour",
        location: "Rajasthan, India",
        price: "₹10,000",
        discount: "Save 28%",
        description: "Enjoy the beautiful lakes, palaces, and rich history of Udaipur.",
        images: [
            "images/card/Udaipur, Rajasthan/1.jpg"
        ],
        highlights: ["Lake Pichola Boat Ride", "Palace Tour", "Cultural Shows"],
        faq: [
            { question: "Are boat rides included?", answer: "Yes, the package includes a boat ride on Lake Pichola." },
            { question: "Is the tour suitable for kids?", answer: "Yes, the tour is family-friendly." }
        ]
    },
    "rishikesh": {
        title: "Rishikesh Tour",
        location: "Uttarakhand, India",
        price: "₹8,500",
        discount: "Save 22%",
        description: "Experience adventure and spirituality in the yoga capital of the world, Rishikesh.",
        images: [
            "images/card/Rishikesh, Uttarakhand/1.jpg"
        ],
        highlights: ["River Rafting", "Yoga & Meditation", "Ganga Aarti"],
        faq: [
            { question: "Is river rafting safe?", answer: "Yes, it is conducted with professional guides and safety measures." },
            { question: "Are yoga sessions included?", answer: "Yes, the tour includes a guided yoga session." }
        ]
    }
};


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const selectedTourKey = getQueryParam("destination");
const tour = tours[selectedTourKey];
const tourContainer = document.getElementById("tour-container");

if (tour) {
    let currentIndex = 0;

    const tourElement = document.createElement("div");
    tourElement.classList.add("bg-amber-50", "shadow-lg", "rounded-lg", "p-6" , "border-2");

    tourElement.innerHTML = `
    <div class="relative w-full md:h-[60vh] h-[40vh] bg-gray-300 rounded-lg flex items-center justify-center">
        <button id="prev-btn" class="absolute left-4 bg-gray-800 text-white px-3 py-1 rounded-lg" onclick="prevImage()" disabled>❮</button>
        <img id="main-image" src="${tour.images[currentIndex]}" class="w-full h-full object-cover rounded-lg">
        <button id="next-btn" class="absolute right-4 bg-gray-800 text-white px-3 py-1 rounded-lg" onclick="nextImage()">❯</button>
    </div>

    <p id="image-index" class="text-center text-gray-600 mt-2">Image 1 of ${tour.images.length}</p>
    
    <div class="flex mt-2 space-x-2 justify-center">
        ${tour.images.map((img, index) => `
            <img src="${img}" class="thumbnail rounded-lg ${index === 0 ? 'active' : ''}" 
            onclick="changeImage(${index})">
        `).join("")}
    </div>

    <h1 class="text-2xl font-bold mt-4">${tour.title}</h1>
    <p class="text-gray-600">${tour.location}</p>
    <p class="text-black-800 mt-2">${tour.description}</p>
    <p class="text-lg font-semibold text-green-600 mt-2">${tour.price} 
        <span class="text-red-500 text-sm ml-2">${tour.discount}</span>
    </p>

    <h2 class="text-xl font-semibold mt-4">Tour Highlights</h2>
    <ul class="mt-2 text-gray-700">
        ${tour.highlights.map(highlight => `
            <li class="flex items-center space-x-2">
                ✅ <span>${highlight}</span>
            </li>
        `).join("")}
    </ul>

    <button class="bg-amber-500 text-white px-4 py-2 rounded-lg mt-4">Book Now</button>

    <h2 class="text-xl font-semibold mt-4">Frequently Asked Questions</h2>
    <ul class="mt-2 text-gray-700">
        ${tour.faq.map((f, index) => `
            <li class="border-b py-2 cursor-pointer" onclick="toggleFAQ(${index})">
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-[16px] md:text-[20px] px-5">${f.question}</span>
                    <span id="icon-${index}" class="text-lg">+</span>
                </div>
                <div id="answer-${index}" class="faq-answer text-black mt-2 text-[16px] md:text-[20px] px-5 hidden">${f.answer}</div>
            </li>
        `).join("")}
    </ul>
`;


    tourContainer.appendChild(tourElement);

    window.changeImage = function(index) {
        currentIndex = index;
        updateImage();
    };

    window.prevImage = function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    };

    window.nextImage = function() {
        if (currentIndex < tour.images.length - 1) {
            currentIndex++;
            updateImage();
        }
    };

    function updateImage() {
        document.getElementById("main-image").src = tour.images[currentIndex];
        document.getElementById("image-index").innerText = `Image ${currentIndex + 1} of ${tour.images.length}`;
        
        document.querySelectorAll(".thumbnail").forEach(img => img.classList.remove("active"));
        document.querySelectorAll(".thumbnail")[currentIndex].classList.add("active");

        document.getElementById("prev-btn").disabled = currentIndex === 0;
        document.getElementById("next-btn").disabled = currentIndex === tour.images.length - 1;
    }
}

function toggleFAQ(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.innerText = "+";
    } else {
        answer.style.display = "block";
        icon.innerText = "−";
    }
}
