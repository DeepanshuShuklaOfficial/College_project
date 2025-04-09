const hotels = [
    { name: "Ajanta and Ellora Caves, Maharashtra", price: 15600, type: "Hotels", category: "Culture Trips", direction: "West", image: "images/card/Ajanta and Ellora Caves, Maharashtra/1.jpg" },
    { name: "Amritsar, Punjab", price: 9400, type: "Hotels", category: "Culture Trips", direction: "North", image: "images/card/Amritsar, Punjab/1.jpg" },
    { name: "Andaman and Nicobar Islands", price: 19400, type: "Resorts", category: "Honeymoon", direction: "East", image: "images/card/Andaman and Nicobar Islands/1.jpg" },
    { name: "Ayodhya", price: 15200, type: "Hotels", category: "Culture Trips", direction: "North", image: "images/card/Ayodhya, Uttar Pradesh/1.jpg" },
    { name: "Bodh Gaya, Bihar", price: 11200, type: "Guest Houses", category: "Pilgrimage", direction: "East", image: "images/card/Bodh Gaya, Bihar/1.jpg" },
    { name: "Chennai, Tamil Nadu", price: 13400, type: "Hotels", category: "Tropical Adventure", direction: "South", image: "images/card/Chennai, Tamil Nadu/1.jpg" },
    { name: "Coorg, Karnataka", price: 11900, type: "Guest Houses", category: "Family Holidays", direction: "South", image: "images/card/Coorg, Karnataka/1.jpg" },
    { name: "Darjeeling, West Bengal", price: 12300, type: "Guest Houses", category: "Family Holidays", direction: "East", image: "images/card/Darjeeling, West Bengal/1.jpg" },
    { name: "Delhi", price: 10600, type: "Hotels", category: "Culture Trips", direction: "North", image: "images/card/Delhi/1.jpg" },
    { name: "Gangtok, Sikkim", price: 16700, type: "Hotels", category: "Winter Holidays", direction: "East", image: "images/card/Gangtok, Sikkim/1.jpg" },
    { name: "Goa", price: 20000, type: "Resorts", category: "Honeymoon", direction: "West", image: "images/card/Goa/1.jpg" },
    { name: "Hampi, Karnataka", price: 11700, type: "Guest Houses", category: "Culture Trips", direction: "South", image: "images/card/Hampi, Karnataka/1.jpg" },
    { name: "Jaipur", price: 17300, type: "Hotels", category: "Culture Trips", direction: "West", image: "images/card/Jaipur, Rajasthan/1.jpg" },
    { name: "Jaisalmer, Rajasthan", price: 12900, type: "Resorts", category: "Safari Season", direction: "West", image: "images/card/Jaisalmer, Rajasthan/1.jpg" },
    { name: "Jim Corbett National Park, Uttarakhand", price: 14200, type: "Resorts", category: "Safari Season", direction: "North", image: "images/card/Jim Corbett National Park, Uttarakhand/1.jpg" },
    { name: "Kanha National Park, Madhya Pradesh", price: 13500, type: "Resorts", category: "Safari Season", direction: "Central", image: "images/card/Kanha National Park, Madhya Pradesh/1.jpg" },
    { name: "Kashi Vishwanath", price: 8700, type: "Guest Houses", category: "Culture Trips", direction: "North", image: "images/card/Kashi Vishwanath Temple, Varanasi/1.jpg" },
    { name: "Kaziranga National Park, Assam", price: 15700, type: "Resorts", category: "Safari Season", direction: "East", image: "images/card/Kaziranga National Park, Assam/1.jpg" },
    { name: "Kerala Backwaters", price: 17300, type: "Guest Houses", category: "Winter Holidays", direction: "South", image: "images/card/Kerala Backwaters/1.jpg" },
    { name: "Khajuraho, Madhya Pradesh", price: 10800, type: "Guest Houses", category: "Culture Trips", direction: "Central", image: "images/card/Khajuraho, Madhya Pradesh/1.jpg" },
    { name: "Kolkata, West Bengal", price: 9200, type: "Guest Houses", category: "Culture Trips", direction: "East", image: "images/card/Kolkata, West Bengal/1.jpg" },
    { name: "Kutch, Gujarat", price: 14800, type: "Resorts", category: "Tropical Adventure", direction: "West", image: "images/card/Kutch, Gujarat/1.jpg" },
    { name: "Leh-Ladakh, Jammu and Kashmir", price: 20000, type: "Resorts", category: "Tropical Adventure", direction: "North", image: "images/card/Leh-Ladakh, Jammu & Kashmir/1.jpg" },
    { name: "Lonavala, Maharashtra", price: 13800, type: "Hotels", category: "Family Holidays", direction: "West", image: "images/card/Lonavala, Maharashtra/1.jpg" },
    { name: "Mahabalipuram, Tamil Nadu", price: 14200, type: "Hotels", category: "Tropical Adventure", direction: "South", image: "images/card/Mahabalipuram, Tamil Nadu/1.jpg" },
    { name: "Manali, Himachal Pradesh", price: 19500, type: "Hotels", category: "Winter Holidays", direction: "North", image: "images/card/Manali, Himachal Pradesh/1.jpg" },
    { name: "Mount Abu, Rajasthan", price: 15400, type: "Hotels", category: "Luxury Cities", direction: "West", image: "images/card/Mount Abu, Rajasthan/1.jpg" },
    { name: "Mumbai", price: 16400, type: "Hotels", category: "Luxury Cities", direction: "West", image: "images/card/Mumbai, Maharashtra/1.jpg" },
    { name: "Mysore, Karnataka", price: 15200, type: "Hotels", category: "Luxury Cities", direction: "South", image: "images/card/Mysore, Karnataka/1.jpg" },
    { name: "Ooty, Tamil Nadu", price: 15800, type: "Resorts", category: "Family Holidays", direction: "South", image: "images/card/Ooty, Tamil Nadu/1.jpg" },
    { name: "Pondicherry", price: 11300, type: "Guest Houses", category: "Culture Trips", direction: "South", image: "images/card/Pondicherry/1.jpg" },
    { name: "Ranthambore National Park, Rajasthan", price: 17900, type: "Resorts", category: "Safari Season", direction: "West", image: "images/card/Ranthambore National Park, Rajasthan/1.jpg" },
    { name: "Rishikesh", price: 9800, type: "Guest Houses", category: "Tropical Adventure", direction: "North", image: "images/card/Rishikesh, Uttarakhand/1.jpg" },
    { name: "Shillong, Meghalaya", price: 12500, type: "Guest Houses", category: "Winter Holidays", direction: "East", image: "images/card/Shillong, Meghalaya/1.jpg" },
    { name: "Shimla, Himachal Pradesh", price: 14900, type: "Hotels", category: "Winter Holidays", direction: "North", image: "images/card/Shimla, Himachal Pradesh/1.jpg" },
    { name: "Shirdi Sai Baba", price: 10100, type: "Guest Houses", category: "Pilgrimage", direction: "West", image: "images/card/Shirdi Sai Baba Temple, Maharashtra/1.jpg" },
    { name: "Srinagar, Jammu & Kashmir", price: 18600, type: "Hotels", category: "Winter Holidays", direction: "North", image: "images/card/Srinagar, Jammu & Kashmir/1.jpg" },
    { name: "Sundarbans, West Bengal", price: 13200, type: "Guest Houses", category: "Safari Season", direction: "East", image: "images/card/Sundarbans, West Bengal/1.jpg" },
    { name: "Taj Mahal", price: 15800, type: "Hotels", category: "Culture Trips", direction: "North", image: "images/card/Taj Mahal, Agra/1.jpg" },
    { name: "Udaipur", price: 16900, type: "Hotels", category: "Luxury Cities", direction: "West", image: "images/card/Udaipur, Rajasthan/1.jpg" }
];

function renderHotels(filteredHotels = hotels) {
    const grid = document.getElementById("hotelGrid");
    grid.innerHTML = filteredHotels.map(hotel =>
        `   
        <a href="card.html?destination=${hotel.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}" class="block">
            <div class="border border-[#253d2c] hover:shadow-md m-auto rounded h-full w-full imp p-2 ">
            <img class=" mb-1 rounded sharp h-[100px] md:h-[160px] w-full object-cover object-top" src="${hotel.image}" alt="">
                <div class="flex justify-between">
                    <h3 class="dark4 font-bold text-[12px] md:text-[16px]">${hotel.name}</h3>
                    <button><i class="fa-solid fa-circle-right dark1 text-[14px] md:text-[18px]"></i></button>
                </div>
                <p class="font-bold dark1 text-[14px] md:text-[18px]">₹ ${hotel.price}</p>
            </div>
        </a>
        `).join('');

    updateResultCount(filteredHotels.length);  //Total results update karna
}

function updateResultCount(count) {
    document.getElementById("resultCount").textContent = `Results Found: ${count}`;
}





function applyFilters() {
    let price = document.getElementById("priceRange").value;
    document.getElementById("priceValue").textContent = price;

    let selectedTypes = [...document.querySelectorAll("input[data-filter='type']:checked")].map(el => el.value);
    let selectedCategories = [...document.querySelectorAll("input[data-filter='category']:checked")].map(el => el.value);
    let selectedDirections = [...document.querySelectorAll("input[data-filter='direction']:checked")].map(el => el.value);

    let filteredHotels = hotels.filter(hotel =>
        hotel.price <= price &&
        (selectedTypes.length === 0 || selectedTypes.includes(hotel.type)) &&
        (selectedCategories.length === 0 || selectedCategories.includes(hotel.category)) &&
        (selectedDirections.length === 0 || selectedDirections.includes(hotel.direction))
    );

    renderHotels(filteredHotels);
}

document.getElementById("priceRange").addEventListener("input", function () {
    document.getElementById("priceValue").textContent = this.value;
    applyFilters();
});

document.querySelectorAll(".filter").forEach(el => el.addEventListener("change", applyFilters));


document.getElementById("toggleSidebar").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
});

renderHotels();

document.getElementById("sort").addEventListener("change", function () {
    let sortBy = this.value;
    let sortedHotels = [...hotels];

    if (sortBy === "name-asc") {
        sortedHotels.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
        sortedHotels.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "price-asc") {
        sortedHotels.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        sortedHotels.sort((a, b) => b.price - a.price);
    }

    renderHotels(sortedHotels);
});



// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Check for category filter from URL on page load
document.addEventListener("DOMContentLoaded", function () {
    const categoryParam = getQueryParam("category");

    if (categoryParam) {
        // Check the corresponding checkbox for category
        let categoryCheckbox = document.querySelector(`input[data-filter='category'][value="${categoryParam}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
        }

        // Apply filters automatically
        applyFilters();
    }
});


// for search bar

function getHotelLink(destination) {
    let hotel = hotels.find(h => h.name.toLowerCase() === destination.toLowerCase());
    return hotel ? `card.html?destination=${hotel.name.toLowerCase().replace(/\s+/g, '-').replace(/,/g, '')}` : null;
}

function showSuggestions() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBox");

    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    if (input === "") {
        suggestionsBox.classList.add("hidden");
        return;
    }

    let filtered = hotels.filter(h => h.name.toLowerCase().includes(input));

    if (filtered.length === 0) {
        suggestionsBox.classList.add("hidden");
        return;
    }

    filtered.forEach(hotel => {
        let li = document.createElement("li");
        let hotelLink = getHotelLink(hotel.name);
        li.innerHTML = `<a href="${hotelLink}" class="block px-4 py-2 cursor-pointer hover:bg-[#cfffdc] hover:text-[#2e6f40]">${hotel.name}</a>`;
        suggestionsBox.appendChild(li);
    });

    suggestionsBox.classList.remove("hidden");
}

// 🔍 Search Functionality on Icon Click
function performSearch() {
    let query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Please enter a search term!");
        return;
    }

    let hotelLink = getHotelLink(query);

    if (hotelLink) {
        window.location.href = hotelLink;  // Open hotel link in same tab
    } else {
        window.location.href = "notfound.html";
    }
}


// Hide suggestions on click outside
document.addEventListener("click", function (event) {
    let searchBox = document.getElementById("searchInput");
    let suggestionsBox = document.getElementById("suggestionsBox");
    if (!searchBox.contains(event.target)) {
        suggestionsBox.classList.add("hidden");
    }
});

document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
});






