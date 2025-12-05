// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the "Get Started" button and the arrow icon
    const getStartedBtn = document.querySelector('.hero-section .btn.btn-lg');
    const arrowIcon = document.querySelector('.hero-section .fa-arrow-right');

    // Redirect function
    function redirectToHomepage() {
        window.location.href = "user.html";
    }

    // Add click event listeners
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', redirectToHomepage);
    }

});