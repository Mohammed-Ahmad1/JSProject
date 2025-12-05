document.getElementById("Signup-Form").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = document.getElementById("Signup-Form");

    let data = {
        username: form.username.value.trim(),
        email: form.email.value.trim(),
        dateOfBirth: form.dateOfBirth.value.trim(),
        phone: form.phone.value.trim(),
        password: form.password.value.trim(),
        confirmPassword: form.confirmPassword.value.trim()
    };

    if (!data.username || !data.email || !data.dateOfBirth || !data.phone || !data.password || !data.confirmPassword) {
        alert("All fields are required.");
        return;
    }

    if (data.password !== data.confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (/^[0-9]/.test(data.username)) {
    alert("Username must not start with a number.");
    return;
}


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
        alert("Invalid email format.");
        return;
    } 

      function calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);

        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const age = calculateAge(data.dateOfBirth);
    if (age < 12) {
        alert("You must be at least 12years old to register.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.username === data.username)) {
        alert("Username already exists!");
        return;
    }
  
    delete data.confirmPassword;

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    console.log("All users:", users);
    alert("Registered Successfully!");

    
});