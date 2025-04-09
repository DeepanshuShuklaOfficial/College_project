document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (user || token) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("profilebnt").style.display ="block";
        document.getElementById("loginbnt").style.display = "none";
        const userIcon = document.createElement("h1username");
        userIcon.innerHTML = user.username
        userIcon.style.cursor = "pointer";
        document.getElementById("auth-singup").appendChild(userIcon);
    }
    document.getElementById("login-button").addEventListener("click", login);
});

async function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = "user";  // Default role, modify as needed

    const response = await fetch("https://tour-backend-hac6.onrender.com/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role })
    });

    const data = await response.json();

    if (response.ok) {
        alert("User registered successfully!");
        localStorage.setItem("user", JSON.stringify(data.user)); 
        location.reload(); 
    } else {
        console.log(data.error);
    }

}


async function login(e) {
       e.preventDefault();
        const email = document.getElementById("loginemail").value;
        const password = document.getElementById("loginpassword").value;
        
        if (!email || !password) {
        console.log("Please enter both email and password.");
        return;
    }

        try {
          const res = await fetch("https://tour-backend-hac6.onrender.com/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          })
          .then()
           
          const data = await res.json();

          // Debugging logs
          console.log("Login Response Status:", res.status);
          console.log("Login Response Data:", data);

          if (!res.ok) {
            console.log(data.error || "Login failed");
            return;
          }

          if (data.token) {
            localStorage.setItem("token", data.token);
            console.log("Token Saved:", localStorage.getItem("token")); // Debugging
            console.log("Login successful!");
            location.reload();
            getProfile()// Call profile fetch function
          }
          else {
            console.log("No token received from server!");
          }
        } catch (error) {
          console.error("Login Error:", error);
          console.log("An error occurred during login.");
        }
      }
  
       async function getProfile() {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("Please login first");
          return;
        }

        const res = await fetch("https://tour-backend-hac6.onrender.com/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ensure "Bearer" is included
          },
        });

        const data = await res.json();
        console.log("user:",data );
         const logname= document.createElement("logname");
         logname.innerHTML = data.username
        logname.style.cursor = "pointer";
         const logemail = document.createElement("logemail");
        logemail.innerHTML = data.email
        logemail.style.cursor = "pointer";
   document.getElementById("auth-container")
      
       
      }

       
       async function updateProfile() {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("Please login first");
          return;
        }

        const username = document.getElementById("upd-username").value;
        const email = document.getElementById("upd-email").value;

        const res = await fetch("https://tour-backend-ac6.onrender.com/user/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ username, email }),
        });
        const data = await res.json();
        console.log(data.message || data.error);
        getProfile();
      }

    
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.reload(); // Refresh page after logout
}
