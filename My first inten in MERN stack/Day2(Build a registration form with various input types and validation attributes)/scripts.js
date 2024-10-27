document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Password validation
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // All validation passed, you can now submit the form or do further processing
    alert("Registration successful!");
});
