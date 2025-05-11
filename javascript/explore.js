

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

function applyFiltersAndSort() {
    let price = document.getElementById("priceRange").value;
    document.getElementById("priceValue").textContent = price;

    let selectedTypes = [...document.querySelectorAll("input[data-filter='type']:checked")].map(el => el.value);
    let selectedCategories = [...document.querySelectorAll("input[data-filter='category']:checked")].map(el => el.value);
    let selectedDirections = [...document.querySelectorAll("input[data-filter='direction']:checked")].map(el => el.value);

    // Filter Hotels
    let filteredHotels = hotels.filter(hotel =>
        hotel.price <= price &&
        (selectedTypes.length === 0 || selectedTypes.includes(hotel.type)) &&
        (selectedCategories.length === 0 || selectedCategories.includes(hotel.category)) &&
        (selectedDirections.length === 0 || selectedDirections.includes(hotel.direction))
    );

    // Sorting Logic
    let sortBy = document.getElementById("sort").value;
    if (sortBy === "name-asc") {
        filteredHotels.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
        filteredHotels.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "price-asc") {
        filteredHotels.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        filteredHotels.sort((a, b) => b.price - a.price);
    }

    renderHotels(filteredHotels);  // Render the filtered and sorted hotels
}

document.getElementById("priceRange").addEventListener("input", function () {
    document.getElementById("priceValue").textContent = this.value;
    applyFiltersAndSort();  // Apply both filter and sort
});

document.querySelectorAll(".filter").forEach(el => el.addEventListener("change", applyFiltersAndSort));

renderHotels();  // Initial render of hotels

document.getElementById("sort").addEventListener("change", applyFiltersAndSort);  // Apply sort whenever the sorting option is changed

document.getElementById("toggleSidebar").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
});

// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Check for category, direction, and type filters from URL on page load
document.addEventListener("DOMContentLoaded", function () {
    const categoryParam = getQueryParam("category");
    const directionParam = getQueryParam("direction");
    const typeParam = getQueryParam("type");

    if (categoryParam) {
        let categoryCheckbox = document.querySelector(`input[data-filter='category'][value="${categoryParam}"]`);
        if (categoryCheckbox) categoryCheckbox.checked = true;
    }

    if (directionParam) {
        let directionCheckbox = document.querySelector(`input[data-filter='direction'][value="${directionParam}"]`);
        if (directionCheckbox) directionCheckbox.checked = true;
    }

    if (typeParam) {
        let typeCheckbox = document.querySelector(`input[data-filter='type'][value="${typeParam}"]`);
        if (typeCheckbox) typeCheckbox.checked = true;
    }

    applyFiltersAndSort();  // Always call applyFiltersAndSort if any filter param is present
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
    if (!searchBox.contains(event.target) && !suggestionsBox.contains(event.target)) {
        suggestionsBox.classList.add("hidden");
    }
});

document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
