function validateForm() {
    var emailInput = document.querySelector(".email");
    var passwordInput = document.querySelector(".password");
    var errorElement = document.getElementById("error-message");

    errorElement.innerText = "";
 
    var storedUserData = JSON.parse(localStorage.getItem("user"));  
    if (
        storedUserData &&
        emailInput.value === storedUserData.email &&
        passwordInput.value === storedUserData.password
    ) {
        alert("Login successful!");
        window.location.href = "fetch.html";  
    } else {
        errorElement.innerText = "Invalid email or password. Please try again.";
    }
}
