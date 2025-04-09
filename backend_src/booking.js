
async function createBooking(){
  const phoneno = document.getElementById("phoneno").value;
   const bookon = document.getElementById("bookon").value;
    const adult = document.getElementById("adult").value;
    const child = document.getElementById("child").value;
        try {
          const response = await fetch("https://tour-backend-hac6.onrender.com/booking/book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              phoneno,
              bookon,
              adult,
              child,
            }),
          });

          const data = await response.json();
          console.log("Booking Response:", data);
          // getUserBooking();
        } catch (error) {
          console.error("Error creating booking:", error);
        }
      }