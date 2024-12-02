// script.js

// Login form validation
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Example of a simple authentication (replace with actual authentication logic)
    const validEmail = "user@example.com"; // Replace with your valid email
    const validPassword = "password123"; // Replace with your valid password

    if (email === validEmail && password === validPassword) {
        alert('Login successful!');
        // Redirect to index.html upon successful login
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// script.js

// script.js

// Immediately Invoked Function Expression (IIFE) to encapsulate the sign-up logic
