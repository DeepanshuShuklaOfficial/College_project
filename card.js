document.addEventListener("DOMContentLoaded",() => {
   document.getElementById("bookbtn").addEventListener("click",createBooking);
});
function openbook(){
       const token = localStorage.getItem("token");
        if (!token) {
             alert("please login first")
            history.back();
          return;
        }else{
    const showbookingpage = document.getElementById("Booking-form");
    const main = document.getElementById("tour-container");
    const hidden = showbookingpage.classList.contains("hidden");
    if(hidden){
     showbookingpage.classList.remove("hidden");
     main.classList.add("hidden");
    }
}
};

function closebook(){
    const showbookingpage = document.getElementById("Booking-form");
    const main = document.getElementById("tour-container");
    const hidden = main.classList.contains("hidden");
    if(hidden){
     showbookingpage.classList.add("hidden");
     main.classList.remove("hidden");
    }
};
const tours = {
    "ajanta-and-ellora-caves-maharashtra": {
        title: "Ajanta and Ellora Caves Tour",
        location: "Maharashtra, India",
        price: "₹15,600",
        discount: "Save 10%",
        description: "Explore the stunning rock-cut caves of Ajanta and Ellora with expert guides.",
        images: ["images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg","images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg"],
        highlights: ["Historical Monuments", "Cultural Heritage", "Local Guide"],
        faq: [
            { question: "Are entry fees included?", answer: "No, entry fees need to be paid separately." },
            { question: "Is transportation provided?", answer: "Yes, transport from major cities is available." }
        ]
    },
    "amritsar-punjab": {
        title: "Amritsar Tour",
        location: "Punjab, India",
        price: "₹9,400",
        discount: "Save 12%",
        description: "Experience the spiritual and historical wonders of Amritsar, including the Golden Temple and Jallianwala Bagh.",
        images: ["images/card/Amritsar, Punjab/1.jpg"],
        highlights: ["Golden Temple Visit", "Local Cuisine", "Cultural Experience"],
        faq: [
            { question: "Is food included?", answer: "No, but you can explore local Punjabi cuisine." },
            { question: "Can I attend the Wagah Border ceremony?", answer: "Yes, the tour includes an optional visit." }
        ]
    },
    "andaman-and-nicobar-islands": {
        title: "Andaman and Nicobar Islands Tour",
        location: "India",
        price: "₹19,400",
        discount: "Save 15%",
        description: "Enjoy the pristine beaches and exotic marine life of Andaman and Nicobar Islands.",
        images: ["images/card/Andaman and Nicobar Islands/1.jpg"],
        highlights: ["Scuba Diving", "Beach Resorts", "Snorkeling"],
        faq: [
            { question: "Is airfare included?", answer: "No, airfare is not included." },
            { question: "Are water activities safe?", answer: "Yes, all activities are conducted under professional supervision." }
        ]
    },
    "ayodhya": {
        title: "Ayodhya Tour",
        location: "Uttar Pradesh, India",
        price: "₹15,200",
        discount: "Save 18%",
        description: "Experience the rich cultural heritage of Ayodhya with expert guides.",
        images: ["images/card/Ayodhya, Uttar Pradesh/1.jpg"],
        highlights: ["Historical Sites", "Local Guide", "Cultural Experience"],
        faq: [
            { question: "Is food included?", answer: "No, but there are restaurants nearby." },
            { question: "Are pets allowed?", answer: "No, pets are not allowed except for service animals." }
        ]
    },
    "bodh-gaya-bihar": {
        title: "Bodh Gaya Tour",
        location: "Bihar, India",
        price: "₹11,200",
        discount: "Save 14%",
        description: "Visit the sacred site where Lord Buddha attained enlightenment.",
        images: ["images/card/Bodh Gaya, Bihar/1.jpg"],
        highlights: ["Mahabodhi Temple", "Spiritual Retreat", "Monastic Tours"],
        faq: [
            { question: "Are meditation sessions included?", answer: "Yes, guided meditation sessions are available." },
            { question: "Is there a dress code?", answer: "Visitors are advised to wear modest attire." }
        ]
    },
    "chennai-tamil-nadu": {
        title: "Chennai Tour",
        location: "Tamil Nadu, India",
        price: "₹13,400",
        discount: "Save 10%",
        description: "Explore the coastal beauty and cultural heritage of Chennai.",
        images: ["images/card/Chennai, Tamil Nadu/1.jpg"],
        highlights: ["Marina Beach", "Temple Visits", "Cultural Shows"],
        faq: [
            { question: "Is transportation provided?", answer: "Yes, local transportation is included." },
            { question: "Are temple entry fees included?", answer: "No, visitors need to pay separately." }
        ]
    },
    "coorg-karnataka": {
        title: "Coorg Tour",
        location: "Karnataka, India",
        price: "₹11,900",
        discount: "Save 15%",
        description: "Experience the lush greenery and coffee plantations of Coorg.",
        images: ["images/card/Coorg, Karnataka/1.jpg"],
        highlights: ["Coffee Plantations", "Waterfalls", "Nature Walks"],
        faq: [
            { question: "Is accommodation included?", answer: "No, but homestay options are available." },
            { question: "Can I visit a coffee estate?", answer: "Yes, the tour includes a coffee estate visit." }
        ]
    },
    "darjeeling-west-bengal": {
        title: "Darjeeling Tour",
        location: "West Bengal, India",
        price: "₹12,300",
        discount: "Save 12%",
        description: "Enjoy the breathtaking views of the Himalayas and Darjeeling’s tea gardens.",
        images: ["images/card/Darjeeling, West Bengal/1.jpg"],
        highlights: ["Toy Train Ride", "Tea Plantations", "Sunrise at Tiger Hill"],
        faq: [
            { question: "Is toy train ride included?", answer: "Yes, the tour includes a toy train ride." },
            { question: "Can I buy Darjeeling tea?", answer: "Yes, local tea shops offer the best varieties." }
        ]
    },
    "delhi": {
        title: "Delhi Tour",
        location: "India",
        price: "₹10,600",
        discount: "Save 14%",
        description: "Explore the capital city’s rich history and vibrant culture.",
        images: ["images/card/Delhi/1.jpg"],
        highlights: ["Heritage Walks", "Local Markets", "Monument Visits"],
        faq: [
            { question: "Is food included?", answer: "No, but you can explore Delhi’s street food." },
            { question: "Are entry fees included?", answer: "No, monument entry fees are separate." }
        ]
    },
    "gangtok-sikkim": {
        title: "Gangtok Tour",
        location: "Sikkim, India",
        price: "₹16,700",
        discount: "Save 20%",
        description: "Experience the breathtaking beauty of the Himalayas in Gangtok.",
        images: ["images/card/Gangtok, Sikkim/1.jpg"],
        highlights: ["Tsomgo Lake", "Monastery Visits", "Scenic Views"],
        faq: [
            { question: "Is snowfall guaranteed?", answer: "It depends on the season." },
            { question: "Is transport included?", answer: "Yes, local transport is included." }
        ]
    },
    "goa": {
        title: "Goa Honeymoon Tour",
        location: "Goa, India",
        price: "₹20,000",
        discount: "Save 10%",
        description: "Enjoy a luxurious honeymoon in the beautiful beaches and resorts of Goa.",
        images: ["images/card/Goa/1.jpg"],
        highlights: ["Beach Resorts", "Nightlife", "Water Sports"],
        faq: [
            { question: "Are flights included?", answer: "No, flights are not included." },
            { question: "Is food included?", answer: "Breakfast is included, other meals are chargeable." }
        ]
    },
    "hampi-karnataka": {
        title: "Hampi Cultural Trip",
        location: "Karnataka, India",
        price: "₹11,700",
        discount: "Save 12%",
        description: "Explore the UNESCO World Heritage Site of Hampi with guided tours.",
        images: ["images/card/Hampi, Karnataka/1.jpg"],
        highlights: ["Ancient Temples", "Historical Ruins", "Local Culture"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in guest houses." },
            { question: "Are local transport options available?", answer: "Yes, auto-rickshaws and bicycles are available for rent." }
        ]
    },
    "jaipur": {
        title: "Jaipur Heritage Tour",
        location: "Rajasthan, India",
        price: "₹17,300",
        discount: "Save 15%",
        description: "Discover the royal history of Jaipur with visits to forts and palaces.",
        images: ["images/card/Jaipur, Rajasthan/1.jpg"],
        highlights: ["City Palace", "Amber Fort", "Hawa Mahal"],
        faq: [
            { question: "Is transportation included?", answer: "Yes, local sightseeing transport is included." },
            { question: "Are entry fees covered?", answer: "No, monument entry fees need to be paid separately." }
        ]
    },
    "jaisalmer-rajasthan": {
        title: "Jaisalmer Safari Tour",
        location: "Rajasthan, India",
        price: "₹12,900",
        discount: "Save 10%",
        description: "Experience the golden sand dunes and royal heritage of Jaisalmer.",
        images: ["images/card/Jaisalmer, Rajasthan/1.jpg"],
        highlights: ["Desert Safari", "Camel Ride", "Jaisalmer Fort"],
        faq: [
            { question: "Are desert camps included?", answer: "Yes, overnight desert camps are included." },
            { question: "Is cultural entertainment provided?", answer: "Yes, traditional folk music and dance performances are arranged." }
        ]
    },
    "jim-corbett-national-park-uttarakhand": {
        title: "Jim Corbett National Park Safari",
        location: "Uttarakhand, India",
        price: "₹14,200",
        discount: "Save 12%",
        description: "Explore the wildlife of Jim Corbett National Park with jungle safaris.",
        images: ["images/card/Jim Corbett National Park, Uttarakhand/1.jpg"],
        highlights: ["Jeep Safari", "Tiger Sighting", "Nature Walks"],
        faq: [
            { question: "Is safari included?", answer: "Yes, jeep safari is included." },
            { question: "Are accommodations available inside the park?", answer: "Yes, forest lodges and resorts are available." }
        ]
    },
    "kanha-national-park-madhya-pradesh": {
        title: "Kanha National Park Safari",
        location: "Madhya Pradesh, India",
        price: "₹13,500",
        discount: "Save 10%",
        description: "Witness the diverse wildlife of Kanha National Park.",
        images: ["images/card/Kanha National Park, Madhya Pradesh/1.jpg"],
        highlights: ["Jungle Safari", "Tiger Reserve", "Scenic Landscapes"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in jungle lodges." },
            { question: "Are guided tours available?", answer: "Yes, professional guides will accompany safaris." }
        ]
    },
    "kashi-vishwanath": {
        title: "Kashi Vishwanath Temple Tour",
        location: "Varanasi, India",
        price: "₹8,700",
        discount: "Save 8%",
        description: "Experience the spiritual aura of Kashi Vishwanath Temple and the ghats of Varanasi.",
        images: ["images/card/Kashi Vishwanath Temple, Varanasi/1.jpg"],
        highlights: ["Spiritual Experience", "Ganga Aarti", "Historical Temples"],
        faq: [
            { question: "Is food included?", answer: "No, but plenty of local eateries are nearby." },
            { question: "Are boat rides included?", answer: "Yes, morning and evening boat rides on the Ganges are available." }
        ]
    },
    "kaziranga-national-park-assam": {
        title: "Kaziranga National Park Tour",
        location: "Assam, India",
        price: "₹15,700",
        discount: "Save 10%",
        description: "Discover the one-horned rhinoceroses and diverse wildlife of Kaziranga.",
        images: ["images/card/Kaziranga National Park, Assam/1.jpg"],
        highlights: ["Elephant Safari", "Bird Watching", "Wildlife Photography"],
        faq: [
            { question: "Is transportation provided?", answer: "Yes, pick-up and drop-off from Guwahati are included." },
            { question: "Are meals included?", answer: "Breakfast and dinner are included." }
        ]
    },
    "kerala-backwaters": {
        title: "Kerala Backwaters Tour",
        location: "Kerala, India",
        price: "₹17,300",
        discount: "Save 12%",
        description: "Relax in houseboats while exploring the scenic Kerala backwaters.",
        images: ["images/card/Kerala Backwaters/1.jpg"],
        highlights: ["Houseboat Stay", "Ayurvedic Spa", "Local Cuisine"],
        faq: [
            { question: "Are houseboat stays included?", answer: "Yes, one-night houseboat stay is included." },
            { question: "Are guided village tours available?", answer: "Yes, local village tours are part of the package." }
        ]
    },
    "khajuraho-madhya-pradesh": {
        title: "Khajuraho Heritage Tour",
        location: "Madhya Pradesh, India",
        price: "₹10,800",
        discount: "Save 10%",
        description: "Explore the ancient temples of Khajuraho, known for their intricate carvings.",
        images: ["images/card/Khajuraho, Madhya Pradesh/1.jpg"],
        highlights: ["Temple Tour", "Light & Sound Show", "Cultural Experience"],
        faq: [
            { question: "Are guided tours available?", answer: "Yes, experienced guides will provide insights." },
            { question: "Are camera charges included?", answer: "No, visitors must pay separately for camera fees." }
        ]
    },
    "kolkata-west-bengal": {
        title: "Kolkata Cultural Tour",
        location: "West Bengal, India",
        price: "₹9,200",
        discount: "Save 10%",
        description: "Experience the rich culture and heritage of Kolkata, the City of Joy.",
        images: ["images/card/Kolkata, West Bengal/1.jpg"],
        highlights: ["Historical Monuments", "Local Cuisine", "Cultural Heritage"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, guest house stays are included." },
            { question: "Are guided tours available?", answer: "Yes, expert guides will accompany the tour." }
        ]
    },
    "kutch-gujarat": {
        title: "Kutch Desert Adventure",
        location: "Gujarat, India",
        price: "₹14,800",
        discount: "Save 12%",
        description: "Explore the vast white desert of Kutch with luxurious resort stays.",
        images: ["images/card/Kutch, Gujarat/1.jpg"],
        highlights: ["Rann of Kutch", "Local Handicrafts", "Camel Safari"],
        faq: [
            { question: "Are resort stays included?", answer: "Yes, accommodation is provided in premium resorts." },
            { question: "Is transportation included?", answer: "Yes, transport from Bhuj is included." }
        ]
    },
    "leh-ladakh-jammu-and-kashmir": {
        title: "Leh-Ladakh Adventure Tour",
        location: "Jammu & Kashmir, India",
        price: "₹20,000",
        discount: "Save 15%",
        description: "Witness the breathtaking landscapes and monasteries of Leh-Ladakh.",
        images: ["images/card/Leh-Ladakh, Jammu & Kashmir/1.jpg"],
        highlights: ["Pangong Lake", "Bike Rides", "Monastery Visits"],
        faq: [
            { question: "Is airfare included?", answer: "No, airfare is not included." },
            { question: "Is acclimatization necessary?", answer: "Yes, a day of rest is advised upon arrival." }
        ]
    },
    "lonavala-maharashtra": {
        title: "Lonavala Hill Station Tour",
        location: "Maharashtra, India",
        price: "₹13,800",
        discount: "Save 10%",
        description: "Enjoy the serene beauty of Lonavala with comfortable hotel stays.",
        images: ["images/card/Lonavala, Maharashtra/1.jpg"],
        highlights: ["Scenic Hills", "Waterfalls", "Nature Walks"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in premium hotels." },
            { question: "Are sightseeing tours included?", answer: "Yes, guided local sightseeing is part of the package." }
        ]
    },
    "mahabalipuram-tamil-nadu": {
        title: "Mahabalipuram Beach Tour",
        location: "Tamil Nadu, India",
        price: "₹14,200",
        discount: "Save 12%",
        description: "Discover the stunning beaches and historic temples of Mahabalipuram.",
        images: ["images/card/Mahabalipuram, Tamil Nadu/1.jpg"],
        highlights: ["Shore Temple", "Sculpture Workshops", "Beach Activities"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in premium hotels." },
            { question: "Are guided temple tours available?", answer: "Yes, expert-guided temple tours are provided." }
        ]
    },
    "manali-himachal-pradesh": {
        title: "Manali Winter Wonderland",
        location: "Himachal Pradesh, India",
        price: "₹19,500",
        discount: "Save 15%",
        description: "Experience the snowy landscapes and adventure sports of Manali.",
        images: ["images/card/Manali, Himachal Pradesh/1.jpg"],
        highlights: ["Skiing", "Solang Valley", "Hot Springs"],
        faq: [
            { question: "Is transportation included?", answer: "Yes, transport from Delhi is available." },
            { question: "Are adventure activities included?", answer: "Yes, skiing and paragliding options are available." }
        ]
    },
    "mount-abu-rajasthan": {
        title: "Mount Abu Hill Station Tour",
        location: "Rajasthan, India",
        price: "₹15,400",
        discount: "Save 10%",
        description: "Escape to the only hill station of Rajasthan with a relaxing stay.",
        images: ["images/card/Mount Abu, Rajasthan/1.jpg"],
        highlights: ["Dilwara Temples", "Nakki Lake", "Sunset Point"],
        faq: [
            { question: "Is hotel stay included?", answer: "Yes, accommodation in luxury hotels is provided." },
            { question: "Are guided sightseeing tours included?", answer: "Yes, expert guides are available." }
        ]
    },
    "mumbai": {
        title: "Mumbai City Tour",
        location: "Maharashtra, India",
        price: "₹16,400",
        discount: "Save 12%",
        description: "Discover the vibrant culture and heritage of Mumbai, the City of Dreams.",
        images: ["images/card/Mumbai, Maharashtra/1.jpg"],
        highlights: ["Gateway of India", "Bollywood Tour", "Street Food"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in luxury hotels." },
            { question: "Are entry fees included?", answer: "No, monument entry fees need to be paid separately." }
        ]
    },
    "mysore-karnataka": {
        title: "Mysore Heritage Tour",
        location: "Karnataka, India",
        price: "₹15,200",
        discount: "Save 10%",
        description: "Explore the royal palaces and cultural heritage of Mysore.",
        images: ["images/card/Mysore, Karnataka/1.jpg"],
        highlights: ["Mysore Palace", "Chamundi Hills", "Local Handicrafts"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in luxury hotels." },
            { question: "Are guided tours available?", answer: "Yes, experienced guides will lead the tours." }
        ]
    },
    "ooty-tamil-nadu": {
        title: "Ooty Hill Station Tour",
        location: "Tamil Nadu, India",
        price: "₹15,800",
        discount: "Save 12%",
        description: "Enjoy the lush greenery and scenic beauty of Ooty with comfortable stays.",
        images: ["images/card/Ooty, Tamil Nadu/1.jpg"],
        highlights: ["Botanical Gardens", "Tea Plantations", "Scenic Train Ride"],
        faq: [
            { question: "Is accommodation included?", answer: "Yes, in premium resorts." },
            { question: "Is the toy train ride included?", answer: "Yes, tickets for the Nilgiri Mountain Railway are provided." }
        ]
    },
    "pondicherry": {
        title: "Pondicherry Tour",
        location: "Pondicherry, India",
        price: "₹11,300",
        discount: "Save 10%",
        description: "Explore the French colonial charm and beautiful beaches of Pondicherry.",
        images: ["images/card/Pondicherry/1.jpg"],
        highlights: ["Culture Trips", "Guest Houses", "Scenic Beaches"],
        faq: [
            { question: "Is food included?", answer: "No, but there are plenty of cafes and restaurants nearby." },
            { question: "Is transportation provided?", answer: "Yes, local transport is included." }
        ]
    },
    "ranthambore-national-park-rajasthan": {
        title: "Ranthambore National Park Tour",
        location: "Rajasthan, India",
        price: "₹17,900",
        discount: "Save 12%",
        description: "Experience thrilling wildlife safaris in Ranthambore National Park.",
        images: ["images/card/Ranthambore National Park, Rajasthan/1.jpg"],
        highlights: ["Safari Season", "Resorts", "Wildlife Encounters"],
        faq: [
            { question: "Are safari permits included?", answer: "No, permits must be booked separately." },
            { question: "Is accommodation provided?", answer: "Yes, stay in comfortable resorts." }
        ]
    },
    "rishikesh": {
        title: "Rishikesh Adventure Tour",
        location: "Uttarakhand, India",
        price: "₹9,800",
        discount: "Save 15%",
        description: "Experience thrilling river rafting and spiritual retreats in Rishikesh.",
        images: ["images/card/Rishikesh, Uttarakhand/1.jpg"],
        highlights: ["Tropical Adventure", "Guest Houses", "Yoga Retreats"],
        faq: [
            { question: "Is river rafting included?", answer: "Yes, guided rafting is part of the package." },
            { question: "Are yoga sessions available?", answer: "Yes, optional yoga classes can be arranged." }
        ]
    },
    "shillong-meghalaya": {
        title: "Shillong Winter Tour",
        location: "Meghalaya, India",
        price: "₹12,500",
        discount: "Save 10%",
        description: "Explore the mesmerizing landscapes and waterfalls of Shillong.",
        images: ["images/card/Shillong, Meghalaya/1.jpg"],
        highlights: ["Winter Holidays", "Guest Houses", "Scenic Views"],
        faq: [
            { question: "Is transport included?", answer: "Yes, local transport is included." },
            { question: "Are sightseeing tickets included?", answer: "No, tickets must be purchased separately." }
        ]
    },
    "shimla-himachal-pradesh": {
        title: "Shimla Hill Station Tour",
        location: "Himachal Pradesh, India",
        price: "₹14,900",
        discount: "Save 12%",
        description: "Enjoy the snow-clad mountains and colonial charm of Shimla.",
        images: ["images/card/Shimla, Himachal Pradesh/1.jpg"],
        highlights: ["Winter Holidays", "Hotels", "Scenic Views"],
        faq: [
            { question: "Is snowfall guaranteed?", answer: "It depends on the season." },
            { question: "Are hotel stays included?", answer: "Yes, hotel accommodation is included." }
        ]
    },
    "shirdi-sai-baba": {
        title: "Shirdi Pilgrimage Tour",
        location: "Maharashtra, India",
        price: "₹10,100",
        discount: "Save 10%",
        description: "Visit the sacred shrine of Sai Baba in Shirdi.",
        images: ["images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg"],
        highlights: ["Pilgrimage", "Guest Houses", "Spiritual Experience"],
        faq: [
            { question: "Are temple entry fees included?", answer: "No, visitors need to pay separately." },
            { question: "Is local transport provided?", answer: "Yes, transport is included." }
        ]
    },
    "srinagar-jammu-&-kashmir": {
        title: "Srinagar Winter Tour",
        location: "Jammu & Kashmir, India",
        price: "₹18,600",
        discount: "Save 15%",
        description: "Enjoy the stunning landscapes of Srinagar and stay in houseboats.",
        images: ["images/card/Srinagar, Jammu & Kashmir/1.jpg"],
        highlights: ["Winter Holidays", "Hotels", "Shikara Rides"],
        faq: [
            { question: "Is snowfall guaranteed?", answer: "It depends on the season." },
            { question: "Is houseboat stay included?", answer: "Yes, houseboat accommodation is included." }
        ]
    },
    "sundarbans-west-bengal": {
        title: "Sundarbans Safari Tour",
        location: "West Bengal, India",
        price: "₹13,200",
        discount: "Save 12%",
        description: "Explore the mangrove forests and spot the Royal Bengal Tiger.",
        images: ["images/card/Sundarbans, West Bengal/1.jpg"],
        highlights: ["Safari Season", "Guest Houses", "Wildlife Adventure"],
        faq: [
            { question: "Are safari permits included?", answer: "No, permits must be booked separately." },
            { question: "Is accommodation provided?", answer: "Yes, guest house stays are included." }
        ]
    },
    "taj-mahal": {
        title: "Taj Mahal & Agra Tour",
        location: "Uttar Pradesh, India",
        price: "₹15,800",
        discount: "Save 10%",
        description: "Visit the iconic Taj Mahal and explore Agra’s rich history.",
        images: ["images/card/Taj Mahal, Agra/1.jpg"],
        highlights: ["Culture Trips", "Hotels", "Historical Landmarks"],
        faq: [
            { question: "Are monument entry fees included?", answer: "No, tickets must be purchased separately." },
            { question: "Is guided tour available?", answer: "Yes, expert guides are available on request." }
        ]
    },
    "udaipur": {
        title: "Udaipur Luxury Tour",
        location: "Rajasthan, India",
        price: "₹16,900",
        discount: "Save 15%",
        description: "Experience the royal palaces and lakes of Udaipur.",
        images: ["images/card/Udaipur, Rajasthan/1.jpg"],
        highlights: ["Luxury Cities", "Hotels", "Lakes & Palaces"],
        faq: [
            { question: "Are boat rides included?", answer: "Yes, a boat ride on Lake Pichola is included." },
            { question: "Is hotel stay included?", answer: "Yes, stay in luxury hotels." }
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
    tourElement.classList.add("imp", "shadow-lg", "rounded", "p-4" , "md:p-6" , "border-1" , "border-[#253d2c]");

    tourElement.innerHTML = `
    <div class="relative w-full md:h-[70vh] h-[40vh] rounded flex items-center justify-center">
        <button id="prev-btn" class="cursor-pointer absolute left-2 head dark1 z-20 px-3 py-1 rounded-lg" onclick="prevImage()">❮</button>
        <img id="main-image" src="${tour.images[currentIndex]}"class="sharp w-full h-full object-cover rounded-lg">
        <button id="next-btn" class="cursor-pointer absolute right-2 head dark1 z-20 px-3 py-1 rounded-lg" onclick="nextImage()">❯</button>
    </div>

    <p id="image-index"class="text-center font-bold dark1 mt-2">Image 1 of ${tour.images.length}</p>
    
    <div class="flex mt-2 space-x-2 justify-center">
        ${tour.images.map((img, index) => `
            <img src="${img}" class="thumbnail sharp rounded ${index === 0 ? 'active' : ''}" 
            onclick="changeImage(${index})">
        `).join("")}
    </div>

    <h1 class="text-2xl font-bold dark4 mt-4">${tour.title}</h1>
    <p class="dark1 font-bold">${tour.location}</p>
    <p class="dark4 mt-2 font-semibold">${tour.description}</p>
    <p class="text-lg font-bold dark1 mt-2">${tour.price} 
        <span class="dark4 bg p-1 rounded text-sm ml-2">${tour.discount}</span>
    </p>

    <h2 class="text-xl font-semibold dark1 mt-4">Tour Highlights</h2>
    <ul class="mt-2 dark4">
        ${tour.highlights.map(highlight => `
            <li class="flex items-center font-semibold space-x-2">
                ✅<span>&nbsp;${highlight}</span>
            </li>
        `).join("")}
    </ul>

    <button id="bookingbtn" onclick="openbook()" class="footer dark1 px-4 py-2 rounded cursor-pointer font-bold mt-4"> Book Now</button>

    <h2 class="text-xl dark4 font-semibold mt-4">Frequently Asked Questions</h2>
    <ul class="mt-2 dark1">
        ${tour.faq.map((f, index) => `
            <li class="border-b py-2 cursor-pointer" onclick="toggleFAQ(${index})">
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-[16px] md:text-[20px] px-5">${f.question}</span>
                    <span id="icon-${index}" class="text-[16px] md:text-[20px]">+</span>
                </div>
                <div id="answer-${index}"class="faq-answer dark4 mt-2 text-[16px] md:text-[20px] px-5 hidden">${f.answer}</div>
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


let cities = [];

// Fetch Indian cities once
fetch("https://countriesnow.space/api/v0.1/countries/cities", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ country: "India" }),
})
  .then((res) => res.json())
  .then((data) => {
    cities = data.data;
  })
  .catch((err) => console.error("Error fetching cities:", err));

function filterCities() {
  const input = document.getElementById("currentLocation");
  const errorMsg = document.getElementById("errorMsg");
  const suggestionBox = document.getElementById("suggestions");
  const query = input.value.trim().toLowerCase();

  suggestionBox.innerHTML = "";
  suggestionBox.classList.add("hidden");
  errorMsg.textContent = "";

  if (!query) return;

  const matches = cities.filter((city) => city.toLowerCase().startsWith(query));

  if (matches.length === 0) {
    errorMsg.textContent = "Please enter a correct city name";
  } else {
    suggestionBox.classList.remove("hidden");
    matches.forEach((city) => {
      const li = document.createElement("li");
      li.textContent = city;
      li.className =
        "px-4 py-2 cursor-pointer hover:bg-blue-100 transition-colors";
      li.onclick = () => {
        input.value = city;
        suggestionBox.innerHTML = "";
        suggestionBox.classList.add("hidden");
      };
      suggestionBox.appendChild(li);
    });
  }
}

// Set the booking place dynamically
document.getElementById("bookingplace").value = tour.title;

async function createBooking(event) {
  event.preventDefault();

  let isValid = true;

  // Reset error messages
  resetErrorMessages();

  // Validate Full Name
  const fullname = document.getElementById("fullname");
  if (!fullname.value.trim()) {
    toggleErrorMessage("fullname-error", true);
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("bookemail");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    toggleErrorMessage("email-error", true);
    isValid = false;
  }

  // Validate Phone Number
  const phoneno = document.getElementById("phoneno");
  if (!/^\d{10}$/.test(phoneno.value)) {
    toggleErrorMessage("phone-error", true);
    isValid = false;
  }

  // Validate Current Location
  const currentLocation = document.getElementById("currentLocation");
  if (!currentLocation.value.trim()) {
    toggleErrorMessage("location-error", true);
    isValid = false;
  }

  // Validate Date
  const bookon = document.getElementById("bookon");
  if (new Date(bookon.value) < new Date()) {
    toggleErrorMessage("date-error", true);
    isValid = false;
  }

  // Validate Adult
  const adult = document.getElementById("adult");
  if (adult.value < 0 || adult.value > 30) {
    toggleErrorMessage("adult-error", true);
    isValid = false;
  }

  // Validate Child
  const child = document.getElementById("child");
  if (child.value < 0 || child.value > 20) {
    toggleErrorMessage("child-error", true);
    isValid = false;
  }

  // If validation passes, proceed with booking
  if (isValid) {
    // Proceed with creating the booking
    const booking_place = document.getElementById("bookingplace").value = tour.title;
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("bookemail").value;
    const phoneno = document.getElementById("phoneno").value;
    const current_location = document.getElementById("currentLocation").value;
    const bookon = document.getElementById("bookon").value;
    const adult = document.getElementById("adult").value;
    const child = document.getElementById("child").value;
    const status = "confirmed";

    try {
      const response = await fetch("https://tour-backend-hac6.onrender.com/booking/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          booking_place,
          fullname,
          email,
          phoneno,
          current_location,
          bookon,
          adult,
          child,
          status,
        }),
      });

      const data = await response.json();
      console.log("Booking Response:", data);
      if (response.ok) {
        // Get the success message container and message element
        const msg = document.getElementById("msg");
        const resmsg = document.getElementById("resmsg");

        // Set the success message
        msg.innerHTML = "Booking successful";

        // Show the message container
        resmsg.style.display = "block";

        // Optionally, hide the message after 5 seconds
        setTimeout(function () {
          location.reload();
        }, 4000);
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  }
}

// Reset all error messages
function resetErrorMessages() {
  const errorMessages = document.querySelectorAll(".text-red-500");
  errorMessages.forEach((msg) => {
    msg.classList.add("hidden");
    msg.classList.remove("block");
  });
}

// Toggle the visibility of error messages
function toggleErrorMessage(id, show) {
  const errorMsg = document.getElementById(id);
  if (show) {
    errorMsg.classList.remove("hidden");
    errorMsg.classList.add("block");
  } else {
    errorMsg.classList.add("hidden");
    errorMsg.classList.remove("block");
  }
}
