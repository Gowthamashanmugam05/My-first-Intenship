document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful!");
});

// Responsive JavaScript for animations
window.addEventListener('resize', function() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const bounding = group.getBoundingClientRect();
        const offset = bounding.top + bounding.height / 2 - window.innerHeight / 2;
        const opacity = Math.max(0, 1 - Math.abs(offset) / 200);
        group.style.opacity = opacity;
        group.style.transform = `translateY(${offset * 0.2}px)`;
    });
});

window.addEventListener('scroll', function() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const bounding = group.getBoundingClientRect();
        const offset = bounding.top + bounding.height / 2 - window.innerHeight / 2;
        const opacity = Math.max(0, 1 - Math.abs(offset) / 200);
        group.style.opacity = opacity;
        group.style.transform = `translateY(${offset * 0.2}px)`;
    });
});
