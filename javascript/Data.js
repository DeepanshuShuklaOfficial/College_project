// for best offer and top destination card generation
const cards = [
    { name: "Ayodhya", location: "Uttar Pradesh", img: "/images/card/Ayodhya, Uttar Pradesh/1.jpg", price: "₹15,200", discount: "Save 18%" },
    { name: "Taj Mahal", location: "Agra", img: "/images/card/Taj Mahal, Agra/1.jpg", price: "₹15,800", discount: "Save 10%" },
    { name: "Kashi Vishwanath", location: "Varanasi", img: "/images/card/Kashi Vishwanath Temple, Varanasi/1.jpg", price: "₹8,700", discount: "Save 8%" },
    { name: "Shirdi Sai Baba", location: "Maharashtra", img: "/images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg", price: "₹10,100", discount: "Save 10%" },
    { name: "Jaipur", location: "Rajasthan", img: "/images/card/Jaipur, Rajasthan/1.jpg", price: "₹17,300", discount: "Save 15%" },
    { name: "Mumbai", location: "Maharashtra", img: "/images/card/Mumbai, Maharashtra/1.jpg", price: "₹16,400", discount: "Save 12%" },
    { name: "Udaipur", location: "Rajasthan", img: "/images/card/Udaipur, Rajasthan/1.jpg", price: "₹16,900", discount: "Save 15%" },
    { name: "Rishikesh", location: "Uttarakhand", img: "/images/card/Rishikesh, Uttarakhand/1.jpg", price: "₹9,800", discount: "Save 15%" }
];

// Top Destination Data
const topDestinations = [
    { name: "Goa", img: "/images/card/Goa/1.jpg" },
    { name: "Kerala Backwaters", img: "/images/card/Kerala Backwaters/1.jpg" },
    { name: "Delhi", img: "/images/card/Delhi/1.jpg" },
    { name: "Mysore, Karnataka", img: "/images/card/Mysore, Karnataka/1.jpg" },
    { name: "Hampi, Karnataka", img: "/images/card/Hampi, Karnataka/1.jpg" },
    { name: "Jaisalmer, Rajasthan", img: "/images/card/Jaisalmer, Rajasthan/1.jpg" },
    { name: "Amritsar, Punjab", img: "/images/card/Amritsar, Punjab/1.jpg" },
    { name: "Shimla, Himachal Pradesh", img: "/images/card/Shimla, Himachal Pradesh/1.jpg" },
    { name: "Manali, Himachal Pradesh", img: "/images/card/Manali, Himachal Pradesh/1.jpg" },
    { name: "Darjeeling, West Bengal", img: "/images/card/Darjeeling, West Bengal/1.jpg" },
    { name: "Leh-Ladakh, Jammu and Kashmir", img: "/images/card/Leh-Ladakh, Jammu & Kashmir/1.jpg" },
    { name: "Khajuraho, Madhya Pradesh", img: "/images/card/Khajuraho, Madhya Pradesh/1.jpg" },
    { name: "Ajanta and Ellora Caves, Maharashtra", img: "/images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg" },
    { name: "Sundarbans, West Bengal", img: "/images/card/Sundarbans, West Bengal/1.jpg" },
    { name: "Andaman and Nicobar Islands", img: "/images/card/Andaman and Nicobar Islands/1.jpg" }
];

const hotels = [
    { name: "Ajanta and Ellora Caves, Maharashtra", price: 15600, type: "Hotels", category: "Culture Trips", direction: "West", image: "/images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg" },
    { name: "Amritsar, Punjab", price: 9400, type: "Hotels", category: "Culture Trips", direction: "North", image: "/images/card/Amritsar, Punjab/1.jpg" },
    { name: "Andaman and Nicobar Islands", price: 19400, type: "Resorts", category: "Honeymoon", direction: "East", image: "/images/card/Andaman and Nicobar Islands/1.jpg" },
    { name: "Ayodhya", price: 15200, type: "Hotels", category: "Culture Trips", direction: "North", image: "/images/card/Ayodhya, Uttar Pradesh/1.jpg" },
    { name: "Bodh Gaya, Bihar", price: 11200, type: "Guest Houses", category: "Pilgrimage", direction: "East", image: "/images/card/Bodh Gaya, Bihar/1.jpg" },
    { name: "Chennai, Tamil Nadu", price: 13400, type: "Hotels", category: "Tropical Adventure", direction: "South", image: "/images/card/Chennai, Tamil Nadu/1.jpg" },
    { name: "Coorg, Karnataka", price: 11900, type: "Guest Houses", category: "Family Holidays", direction: "South", image: "/images/card/Coorg, Karnataka/1.jpg" },
    { name: "Darjeeling, West Bengal", price: 12300, type: "Guest Houses", category: "Family Holidays", direction: "East", image: "/images/card/Darjeeling, West Bengal/1.jpg" },
    { name: "Delhi", price: 10600, type: "Hotels", category: "Culture Trips", direction: "North", image: "/images/card/Delhi/1.jpg" },
    { name: "Gangtok, Sikkim", price: 16700, type: "Hotels", category: "Winter Holidays", direction: "East", image: "/images/card/Gangtok, Sikkim/1.jpg" },
    { name: "Goa", price: 20000, type: "Resorts", category: "Honeymoon", direction: "West", image: "/images/card/Goa/1.jpg" },
    { name: "Hampi, Karnataka", price: 11700, type: "Guest Houses", category: "Culture Trips", direction: "South", image: "/images/card/Hampi, Karnataka/1.jpg" },
    { name: "Jaipur", price: 17300, type: "Hotels", category: "Culture Trips", direction: "West", image: "/images/card/Jaipur, Rajasthan/1.jpg" },
    { name: "Jaisalmer, Rajasthan", price: 12900, type: "Resorts", category: "Safari Season", direction: "West", image: "/images/card/Jaisalmer, Rajasthan/1.jpg" },
    { name: "Jim Corbett National Park, Uttarakhand", price: 14200, type: "Resorts", category: "Safari Season", direction: "North", image: "/images/card/Jim Corbett National Park, Uttarakhand/1.jpg" },
    { name: "Kanha National Park, Madhya Pradesh", price: 13500, type: "Resorts", category: "Safari Season", direction: "Central", image: "/images/card/Kanha National Park, Madhya Pradesh/1.jpg" },
    { name: "Kashi Vishwanath", price: 8700, type: "Guest Houses", category: "Culture Trips", direction: "North", image: "/images/card/Kashi Vishwanath Temple, Varanasi/1.jpg" },
    { name: "Kaziranga National Park, Assam", price: 15700, type: "Resorts", category: "Safari Season", direction: "East", image: "/images/card/Kaziranga National Park, Assam/1.jpg" },
    { name: "Kerala Backwaters", price: 17300, type: "Guest Houses", category: "Winter Holidays", direction: "South", image: "/images/card/Kerala Backwaters/1.jpg" },
    { name: "Khajuraho, Madhya Pradesh", price: 10800, type: "Guest Houses", category: "Culture Trips", direction: "Central", image: "/images/card/Khajuraho, Madhya Pradesh/1.jpg" },
    { name: "Kolkata, West Bengal", price: 9200, type: "Guest Houses", category: "Culture Trips", direction: "East", image: "/images/card/Kolkata, West Bengal/1.jpg" },
    { name: "Kutch, Gujarat", price: 14800, type: "Resorts", category: "Tropical Adventure", direction: "West", image: "/images/card/Kutch, Gujarat/1.jpg" },
    { name: "Leh-Ladakh, Jammu and Kashmir", price: 20000, type: "Resorts", category: "Tropical Adventure", direction: "North", image: "/images/card/Leh-Ladakh, Jammu & Kashmir/1.jpg" },
    { name: "Lonavala, Maharashtra", price: 13800, type: "Hotels", category: "Family Holidays", direction: "West", image: "/images/card/Lonavala, Maharashtra/1.jpg" },
    { name: "Mahabalipuram, Tamil Nadu", price: 14200, type: "Hotels", category: "Tropical Adventure", direction: "South", image: "/images/card/Mahabalipuram, Tamil Nadu/1.jpg" },
    { name: "Manali, Himachal Pradesh", price: 19500, type: "Hotels", category: "Winter Holidays", direction: "North", image: "/images/card/Manali, Himachal Pradesh/1.jpg" },
    { name: "Mount Abu, Rajasthan", price: 15400, type: "Hotels", category: "Luxury Cities", direction: "West", image: "/images/card/Mount Abu, Rajasthan/1.jpg" },
    { name: "Mumbai", price: 16400, type: "Hotels", category: "Luxury Cities", direction: "West", image: "/images/card/Mumbai, Maharashtra/1.jpg" },
    { name: "Mysore, Karnataka", price: 15200, type: "Hotels", category: "Luxury Cities", direction: "South", image: "/images/card/Mysore, Karnataka/1.jpg" },
    { name: "Ooty, Tamil Nadu", price: 15800, type: "Resorts", category: "Family Holidays", direction: "South", image: "/images/card/Ooty, Tamil Nadu/1.jpg" },
    { name: "Pondicherry", price: 11300, type: "Guest Houses", category: "Culture Trips", direction: "South", image: "/images/card/Pondicherry/1.jpg" },
    { name: "Ranthambore National Park, Rajasthan", price: 17900, type: "Resorts", category: "Safari Season", direction: "West", image: "/images/card/Ranthambore National Park, Rajasthan/1.jpg" },
    { name: "Rishikesh", price: 9800, type: "Guest Houses", category: "Tropical Adventure", direction: "North", image: "/images/card/Rishikesh, Uttarakhand/1.jpg" },
    { name: "Shillong, Meghalaya", price: 12500, type: "Guest Houses", category: "Winter Holidays", direction: "East", image: "/images/card/Shillong, Meghalaya/1.jpg" },
    { name: "Shimla, Himachal Pradesh", price: 14900, type: "Hotels", category: "Winter Holidays", direction: "North", image: "/images/card/Shimla, Himachal Pradesh/1.jpg" },
    { name: "Shirdi Sai Baba", price: 10100, type: "Guest Houses", category: "Pilgrimage", direction: "West", image: "/images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg" },
    { name: "Srinagar, Jammu & Kashmir", price: 18600, type: "Hotels", category: "Winter Holidays", direction: "North", image: "/images/card/Srinagar, Jammu & Kashmir/1.jpg" },
    { name: "Sundarbans, West Bengal", price: 13200, type: "Guest Houses", category: "Safari Season", direction: "East", image: "/images/card/Sundarbans, West Bengal/1.jpg" },
    { name: "Taj Mahal", price: 15800, type: "Hotels", category: "Culture Trips", direction: "North", image: "/images/card/Taj Mahal, Agra/1.jpg" },
    { name: "Udaipur", price: 16900, type: "Hotels", category: "Luxury Cities", direction: "West", image: "/images/card/Udaipur, Rajasthan/1.jpg" }
];

const tours = {
    "ajanta-and-ellora-caves-maharashtra": {
        title: "Ajanta and Ellora Caves Tour",
        location: "Maharashtra, India",
        price: "₹15,600",
        discount: "Save 10%",
        description: "Explore the stunning rock-cut caves of Ajanta and Ellora with expert guides.",
        images: ["/images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg","/images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg"],
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
        images: ["/images/card/Amritsar, Punjab/1.jpg"],
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
        images: ["/images/card/Andaman and Nicobar Islands/1.jpg"],
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
        images: ["/images/card/Ayodhya, Uttar Pradesh/1.jpg"],
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
        images: ["/images/card/Bodh Gaya, Bihar/1.jpg"],
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
        images: ["/images/card/Chennai, Tamil Nadu/1.jpg"],
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
        images: ["/images/card/Coorg, Karnataka/1.jpg"],
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
        images: ["/images/card/Darjeeling, West Bengal/1.jpg"],
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
        images: ["/images/card/Delhi/1.jpg"],
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
        images: ["/images/card/Gangtok, Sikkim/1.jpg"],
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
        images: ["/images/card/Goa/1.jpg"],
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
        images: ["/images/card/Hampi, Karnataka/1.jpg"],
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
        images: ["/images/card/Jaipur, Rajasthan/1.jpg"],
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
        images: ["/images/card/Jaisalmer, Rajasthan/1.jpg"],
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
        images: ["/images/card/Jim Corbett National Park, Uttarakhand/1.jpg"],
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
        images: ["/images/card/Kanha National Park, Madhya Pradesh/1.jpg"],
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
        images: ["/images/card/Kashi Vishwanath Temple, Varanasi/1.jpg"],
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
        images: ["/images/card/Kaziranga National Park, Assam/1.jpg"],
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
        images: ["/images/card/Kerala Backwaters/1.jpg"],
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
        images: ["/images/card/Khajuraho, Madhya Pradesh/1.jpg"],
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
        images: ["/images/card/Kolkata, West Bengal/1.jpg"],
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
        images: ["/images/card/Kutch, Gujarat/1.jpg"],
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
        images: ["/images/card/Leh-Ladakh, Jammu & Kashmir/1.jpg"],
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
        images: ["/images/card/Lonavala, Maharashtra/1.jpg"],
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
        images: ["/images/card/Mahabalipuram, Tamil Nadu/1.jpg"],
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
        images: ["/images/card/Manali, Himachal Pradesh/1.jpg"],
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
        images: ["/images/card/Mount Abu, Rajasthan/1.jpg"],
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
        images: ["/images/card/Mumbai, Maharashtra/1.jpg"],
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
        images: ["/images/card/Mysore, Karnataka/1.jpg"],
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
        images: ["/images/card/Ooty, Tamil Nadu/1.jpg"],
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
        images: ["/images/card/Pondicherry/1.jpg"],
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
        images: ["/images/card/Ranthambore National Park, Rajasthan/1.jpg"],
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
        images: ["/images/card/Rishikesh, Uttarakhand/1.jpg"],
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
        images: ["/images/card/Shillong, Meghalaya/1.jpg"],
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
        images: ["/images/card/Shimla, Himachal Pradesh/1.jpg"],
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
        images: ["/images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg"],
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
        images: ["/images/card/Srinagar, Jammu & Kashmir/1.jpg"],
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
        images: ["/images/card/Sundarbans, West Bengal/1.jpg"],
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
        images: ["/images/card/Taj Mahal, Agra/1.jpg"],
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
        images: ["/images/card/Udaipur, Rajasthan/1.jpg"],
        highlights: ["Luxury Cities", "Hotels", "Lakes & Palaces"],
        faq: [
            { question: "Are boat rides included?", answer: "Yes, a boat ride on Lake Pichola is included." },
            { question: "Is hotel stay included?", answer: "Yes, stay in luxury hotels." }
        ]
    }
    
};