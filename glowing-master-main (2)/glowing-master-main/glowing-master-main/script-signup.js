// script.js

// Immediately Invoked Function Expression (IIFE) to encapsulate the sign-up logic
(function() {
    // Select the sign-up form
    const signupForm = document.getElementById('signup-form');
    
    // Check if the sign-up form exists
    if (signupForm) {
        // Add an event listener for form submission
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission behavior

            // Retrieve values from the form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Basic validation
            if (name === '' || email === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }

            // Store credentials in localStorage
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password); // In a real application, do not store passwords in plain text!

            alert('Sign up successful! Redirecting to index.html...');
            
            // Redirect to index.html
            window.location.href = 'index.html';
        });
    }
})();