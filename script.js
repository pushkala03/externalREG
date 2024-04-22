document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match";
        return;
    }

    var phoneNumber = document.getElementById('phoneNumber').value;
    if (!(/^\d{10}$/.test(phoneNumber))) {
        message.innerHTML = "Phone number must be 10 digits";
        return;
    }

    // You can add more validation rules as needed

    // If all validations pass, show success message
    message.innerHTML = "Registration successful!";
});
