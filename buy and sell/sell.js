// Function to handle form submission
document.getElementById('sellAnimalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get form data
    const animalName = document.getElementById('animalName').value;
    const animalAge = document.getElementById('animalAge').value;
    const animalCategory = document.getElementById('animalCategory').value;
    const animalDescription = document.getElementById('animalDescription').value;
    const animalImage = document.getElementById('animalImage').files[0]; // Get the file object
    const sellerEmail = document.getElementById('sellerEmail').value;
    const sellerPhone = document.getElementById('sellerPhone').value;

    // Optionally, handle the image upload or data submission to a server here
    // You can send this data to a server via an API or simply store it locally.

    // Display confirmation message
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation-message');
    confirmationMessage.innerHTML = 'Your request has been sent. We will preview your request shortly!';
    document.body.appendChild(confirmationMessage);

    // Set a timer to hide the confirmation message after 5 seconds
    setTimeout(function() {
        confirmationMessage.style.opacity = '0';
        confirmationMessage.style.transform = 'translateY(20px)';
    }, 5000);

    // Optionally, reset the form after submission
    document.getElementById('sellAnimalForm').reset();
});
