document.addEventListener("DOMContentLoaded", function(){
document.getElementById("bookbtn").addEventListener("click",createBooking);
});

async function createBooking(event){
  event.preventDefault();
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phoneno = document.getElementById("phoneno").value;
  const current_location = document.getElementById("location").value;
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
            body: JSON.stringify({fullname,email,
              phoneno, current_location,
              bookon,
              adult,
              child,
            }),
          });

          const data = await response.json();
          console.log("Booking Response:", data);
           if (response.ok) {
       const msg= document.getElementById("msg").innerHTML;
       msg = "booking successful"
        location.reload(); 
    } else {
        console.log(data.error);
    }
          // getUserBooking();
        } catch (error) {
          console.error("Error creating booking:", error);
        }
      }