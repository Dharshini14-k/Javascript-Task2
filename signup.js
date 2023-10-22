function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");

    var nameRegex = /^[A-Za-z]+$/;
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!nameRegex.test(nameInput.value)) {
        alert("Please enter a valid name with only characters.");
        return false;
    }

    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
        return false;
    }

    var userData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };
 
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful! You can now log in with your email and password.");

    
    window.location.href = "login.html";
}
