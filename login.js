document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("username").value.trim();   // ← email field
    const passwordInput = document.getElementById("password").value.trim();

    if (emailInput === "admin@gmail.com" && passwordInput === "admin123") {
        window.location.href = "admin.html";
        alert("welcome");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
        u => u.email === emailInput && u.password === passwordInput
    );

    if (foundUser) {
        sessionStorage.setItem("loggedInUser", foundUser.username); 
        window.location.href = "Home.html";
    } else {
        const msg = document.getElementById("msg");
        if (msg) {
            msg.innerText = "Invalid Email or password";
            msg.style.color = "red";
        }
    }
});
