document.addEventListener('DOMContentLoaded', () => {
    // Highlight the active navbar link
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Show description based on animal type
function showDescription() {
    const animalType = document.getElementById('animalType').value;
    const descriptionContainer = document.getElementById('descriptionContainer');
    descriptionContainer.style.display = animalType ? 'block' : 'none';
}

