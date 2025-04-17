document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    if (token) {
        getProfile();
        document.getElementById("login-section").style.display = "none";
        document.getElementById("profilebnt").style.display = "block";
        document.getElementById("loginbnt").style.display = "none";
    }
    document.getElementById("login-button").addEventListener("click", login);
});

async function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userreg = document.getElementById("userreg");

    // ✅ Validate input
    if (!validateEmail(email)) {
        userreg.textContent = "Please enter a valid email address.";
        return;
    }

    if (!validatePassword(password)) {
        userreg.textContent = "Password must be at least 8 characters long and include letters and numbers.";
        return;
    }

    const response = await fetch("https://tour-backend-hac6.onrender.com/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
        console.log("User registered successfully!");
        userreg.textContent = " successfully!";

        if (data.token) {
            localStorage.setItem("token", data.token);
        }
        localStorage.setItem("user", JSON.stringify(data.user));
        location.reload();
    } else {
        console.log(data.error || "Registration failed");
    }
}

async function login(e) {
    e.preventDefault();
    const email = document.getElementById("loginemail").value;
    const password = document.getElementById("loginpassword").value;
    const logingerror = document.getElementById("logingerror");
    const infillmsg = document.getElementById("infillmsg");

    // 🔥 Clear previous messages
    logingerror.textContent = "";
    infillmsg.textContent = "";

    if (!email || !password) {
        infillmsg.textContent = "Please enter both email and password.";
        return;
    }
    if (!validateEmail(email)) {
        infillmsg.textContent = "Please enter a valid email.";
        return;
    }

    if (!validatePassword(password)) {
        infillmsg.textContent = "Invalid password. Use at least 8 characters with a mix of letters and numbers.";
        return;
    }


    try {
        const res = await fetch("https://tour-backend-hac6.onrender.com/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
        const data = await res.json();
        console.log("Login Response Status:", res.status);
        console.log("Login Response Data:", data);

        if (!res.ok) {
            console.log(data.error || "Login failed");
            logingerror.textContent = data.error;
            return;
        }

        if (data.token) {
            localStorage.setItem("token", data.token);
            console.log("Login successful!");
            location.reload();
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

    try {
        const res = await fetch("https://tour-backend-hac6.onrender.com/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        if (res.ok) {
            // ✅ Auto-fill form inputs
            const usernameInput = document.getElementById("fullname");
            const emailInput = document.getElementById("bookemail");

            if (usernameInput && emailInput) {
                usernameInput.value = data.username;
                emailInput.value = data.email;
            }

            // ✅ Optional: display on the page too
            const usernameEl = document.getElementById("profile-username");
            const emailEl = document.getElementById("profile-email");

            if (usernameEl && emailEl) {
                usernameEl.textContent = `Username: ${data.username}`;
                emailEl.textContent = `Email: ${data.email}`;
            }
        } else {
            console.log(data.error || "Failed to load profile");
        }

        if (data.error === "Invalid token") {
            localStorage.removeItem("token");
            location.reload();
        }

    } catch (error) {
        console.error("Error fetching profile:", error);
    }
}


function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.reload(); // Refresh page after logout
}