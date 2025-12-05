document.addEventListener('DOMContentLoaded', function () {

    const getStartedBtn = document.querySelector('.hero-section .btn.btn-lg');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function () {

            const loggedInUser = 
                                 localStorage.getItem("loggedInUser");

            if (loggedInUser) {
                // Logged in → go to user dashboard
                window.location.href = "user.html";
            } else {
                //  Not logged in → show message & redirect to Home Page
                window.location.href = "Login.html";
            }
        });
    }

    //Register button
    const btnRegister = document.getElementById("btnRegister");
    if (btnRegister) {
        btnRegister.onclick = () => {
            window.location.href = "signup.html";
        };
    }

    // Sign In button
    const btnSignIn = document.getElementById("btnSignIn");
    if (btnSignIn) {
        btnSignIn.onclick = () => {
            window.location.href = "Login.html";
        };
    }

});
