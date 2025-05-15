window.onload = () => {
  const Orders = JSON.parse(sessionStorage.getItem("orders"));

  if (!Orders || !Array.isArray(Orders.bookings)) {
    console.error("Orders.bookings is not an array:", Orders);
    return;
  }

  const bookings = Orders.bookings;
  const container = document.getElementById("data");

  if (bookings.length === 0) {
    container.innerHTML = `
        <p class="text-center text-gray-500 col-span-full">No bookings found.</p>
      `;
    return;
  }

  bookings.forEach((booking) => {
    const isCancelled = booking.status.toLowerCase() === "cancelled";
    const statusColorClass = isCancelled ? "bg-red-500" : "bg-green-500";

    // Format date nicely
    const formattedDate = new Date(booking.bookon).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const card = document.createElement("div");
    card.className =
      "relative bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 min-h-[360px] flex flex-col justify-between";
    card.id = `booking-${booking._id}`;

    card.innerHTML = `
        <div>
          <h2 class="text-xl font-bold text-gray-800 mb-3">${booking.booking_place || "Tour Name"}</h2>
          <p class="text-sm text-gray-600">Fullname: <span class="font-semibold">${booking.fullname}</span></p>
          <p class="text-sm text-gray-600 truncate">Email: <span class="font-medium break-all">${booking.email}</span></p>
          <p class="text-sm text-gray-600">Phone No: <span class="font-medium">${booking.phoneno}</span></p>
          <p class="text-sm text-gray-600">Pickup Location: <span class="font-medium">${booking.current_location}</span></p>
          <p class="text-sm text-gray-600">Date: <span class="font-medium">${formattedDate}</span></p>
          <p class="text-sm text-gray-600">Adults: <span class="font-medium">${booking.adult}</span></p>
          <p class="text-sm text-gray-600">Children: <span class="font-medium">${booking.child}</span></p>
          <p class="text-sm text-gray-600">Status:
            <span class="inline-flex items-center gap-1 px-2 py-1 rounded text-white text-xs ${statusColorClass}">
              ${isCancelled
        ? `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> Cancelled`
        : `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Confirmed`
      }
            </span>
          </p>
        </div>

        ${!isCancelled
        ? `
        <div class="flex justify-between mt-4 gap-3">
          <button onclick="showEditForm('${booking._id}')" class="w-full py-2 rounded-3xl bg-yellow-400 hover:bg-yellow-300 text-sm font-medium">Change</button>
          <button onclick="cancelBooking('${booking._id}')" class="w-full py-2 rounded-3xl bg-cyan-400 hover:bg-cyan-300 text-sm font-medium">Cancel Order</button>
        </div>
        <form id="form-${booking._id}" class="mt-4 hidden space-y-3" onsubmit="submitEdit(event, '${booking._id}')">
  <h3 class="font-semibold text-sm mb-2">Change your travel date and group size:</h3>
  <input type="date" name="bookon" class="w-full p-2 border rounded" required>
  <label class="text-sm">Adults:</label>
  <input type="number" name="adult" value="${booking.adult}" min="1" class="w-full p-2 border rounded" required>
  <label class="text-sm">Children:</label>
  <input type="number" name="child" value="${booking.child}" min="0" class="w-full p-2 border rounded" required>
  <p class="text-sm text-red-500" id="error-${booking._id}"></p>
  <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm font-medium">Save</button>
</form>

        `
        : ""
      }
      `;

    container.appendChild(card);
  });
};

function showEditForm(bookingId) {
  const form = document.getElementById(`form-${bookingId}`);
  form.classList.toggle("hidden");
}

function submitEdit(event, bookingId) {
  event.preventDefault();
  const form = document.getElementById(`form-${bookingId}`);
  const errorEl = document.getElementById(`error-${bookingId}`);
  const token = localStorage.getItem("token");

  const bookon = form.bookon.value;
  const adult = parseInt(form.adult.value);
  const child = parseInt(form.child.value);

  const today = new Date();
  const selectedDate = new Date(bookon);
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6); 

  errorEl.textContent = ""; 

  // Date validation
  if (!bookon) {
    errorEl.textContent = "Please select a valid booking date.";
    return;
  }

  if (selectedDate < today.setHours(0, 0, 0, 0)) {
    errorEl.textContent = "Booking date cannot be in the past.";
    return;
  }

  if (selectedDate > maxDate) {
    errorEl.textContent = "Booking date cannot be more than 6 months from today.";
    return;
  }

  if (isNaN(adult) || adult < 1 || adult > 30) {
    errorEl.textContent = "Number of adults must be between 1 and 30.";
    return;
  }

  if (isNaN(child) || child < 0 || child > 20) {
    errorEl.textContent = "Number of children must be between 0 and 20.";
    return;
  }

  const updatedData = {
    bookon,
    adult,
    child,
  };

  fetch(`https://tour-backend-hac6.onrender.com/booking/update/${bookingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message || "Booking updated");
      const orders = JSON.parse(sessionStorage.getItem("orders"));
      const updatedBookings = orders.bookings.map((booking) =>
        booking._id === bookingId ? { ...booking, ...updatedData } : booking
      );
      orders.bookings = updatedBookings;
      sessionStorage.setItem("orders", JSON.stringify(orders));
      location.reload();
    })
    .catch((err) => {
      console.error(err);
      errorEl.textContent = "Failed to update booking. Please try again later.";
    });
}

function deleteBooking(bookingId) {
  const token = localStorage.getItem("token");

  fetch(`https://tour-backend-hac6.onrender.com/booking/cancel/${bookingId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message || "Booking cancelled");
      document.getElementById(`booking-${bookingId}`).remove();
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to cancel booking");
    });
}

function cancelBooking(bookingId) {
  const token = localStorage.getItem("token");

  fetch(`https://tour-backend-hac6.onrender.com/booking/status/${bookingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: "cancelled" }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.message || "Booking cancelled");
      const orders = JSON.parse(sessionStorage.getItem("orders"));
      const updatedBookings = orders.bookings.map((booking) => {
        if (booking._id === bookingId) {
          booking.status = "Cancelled";
        }
        return booking;
      });
      sessionStorage.setItem("orders", JSON.stringify(orders));
      location.reload();
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to cancel booking");
    });
}

