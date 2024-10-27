document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required';
        document.getElementById('emailError').style.display = 'block';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordError').style.display = 'block';
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword !== password) {
        isValid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    // Display success message if valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
        document.getElementById('successMessage').style.display = 'block';
    } else {
        document.getElementById('successMessage').style.display = 'none';
    }
});
