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
            <img id="main-image" src="${tour.images[currentIndex]}"class="sharp w-full h-full object-cover rounded-lg" loading="lazy">
            <button id="next-btn" class="cursor-pointer absolute right-2 head dark1 z-20 px-3 py-1 rounded-lg" onclick="nextImage()">❯</button>
        </div>
    
        <p id="image-index"class="text-center font-bold dark1 mt-2">Image 1 of ${tour.images.length}</p>
        
        <div class="flex mt-2 space-x-2 justify-center">
            ${tour.images.map((img, index) => `
                <img src="${img}" class="thumbnail sharp rounded ${index === 0 ? 'active' : ''}" 
                onclick="changeImage(${index})" loading="lazy">
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
        const parent_ID = Math.random().toString(36).substring(2, 15);
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
                parent_ID,
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