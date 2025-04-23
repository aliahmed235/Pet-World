document.addEventListener('DOMContentLoaded', function () {
    const signInBtn = document.getElementById('signInBtn');
    const signInModal = document.getElementById('signInModal');
    const closeModal = document.getElementById('closeModal');
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('error');

    // Ensure elements are found before adding event listeners
    if (signInBtn && signInModal && closeModal && loginButton && errorMessage) {
        // Check login state on page load
        if (sessionStorage.getItem('loggedIn') === 'true') {
            signInBtn.style.display = 'none'; // Hide the sign-in button if logged in
        }

        // Open the modal when the "Sign In" button is clicked
        signInBtn.addEventListener('click', function () {
            signInModal.style.display = 'block';
        });

        // Close the modal when the "X" button is clicked
        closeModal.addEventListener('click', function () {
            signInModal.style.display = 'none';
            // Sign out user when modal is closed
            signOut();
        });

        // Close the modal if the user clicks outside of it
        window.addEventListener('click', function (event) {
            if (event.target === signInModal) {
                signInModal.style.display = 'none';
                // Sign out user when modal is closed
                signOut();
            }
        });

        // Sign In functionality
        loginButton.addEventListener('click', function () {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Dummy login check (replace with actual validation)
            if (email === 'aliahmed@gmail.com' && password === '1234567') {
                // Successfully logged in
                sessionStorage.setItem('loggedIn', 'true'); // Store in sessionStorage
                signInModal.style.display = 'none';
                signInBtn.style.display = 'none'; // Hide Sign In button
            } else {
                // Invalid login
                errorMessage.style.display = 'block';
            }
        });

        // Function to sign out the user
        function signOut() {
            // Clear the login state from sessionStorage
            sessionStorage.removeItem('loggedIn');
            // Reset the Sign In button visibility
            signInBtn.style.display = 'block';
        }

        // Optional: Sign out if the user closes the modal (not required)
        window.addEventListener('beforeunload', function () {
            signOut(); // Sign out when the page is closed or refreshed
        });
    } else {
        console.error("One or more elements not found: 'signInBtn', 'signInModal', 'closeModal', 'loginButton', 'error'");
    }
});
window.addEventListener('beforeunload', function () {
    signOut(); // Sign out when the page is closed or refreshed
});
