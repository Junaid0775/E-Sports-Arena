// JavaScript to handle tab switching, form animations, and authentication
document.addEventListener("DOMContentLoaded", () => {
    const openLoginTab = document.getElementById("openLogin");
    const openRegisterTab = document.getElementById("openRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const switchToRegister = document.getElementById("switchToRegister");
    const switchToLogin = document.getElementById("switchToLogin");
    const indicator = document.querySelector(".indicator");

    // Function to activate the login form
    function showLoginForm() {
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
        openLoginTab.classList.add("active");
        openRegisterTab.classList.remove("active");
        indicator.style.left = "0";
    }

    // Function to activate the register form
    function showRegisterForm() {
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
        openRegisterTab.classList.add("active");
        openLoginTab.classList.remove("active");
        indicator.style.left = "50%";
    }

    // Add event listeners for tabs
    openLoginTab.addEventListener("click", showLoginForm);
    openRegisterTab.addEventListener("click", showRegisterForm);

    // Add event listeners for switch links in forms
    switchToRegister.addEventListener("click", showRegisterForm);
    switchToLogin.addEventListener("click", showLoginForm);

    // Handle login functionality
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        if (email && password) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Login successful!");
            window.location.href = "Tournament.html";
        } else {
            alert("Please enter valid login credentials.");
        }
    });

    // Handle registration functionality
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("register-name").value;
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;

        if (name && email && password) {
            localStorage.setItem("isLoggedIn", "true");
            alert("Registration successful!");
            window.location.href = "Tournament.html";
        } else {
            alert("Please fill out all fields.");
        }
    });
});
