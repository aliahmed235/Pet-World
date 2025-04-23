// Function to fetch and display local animal data
async function fetchLocalAnimals() {
    try {
        const response = await fetch('animals.json'); // Path to your JSON file
        const animals = await response.json();
        displayAnimals(animals); // Call function to display fetched data
    } catch (error) {
        console.error("Error fetching local animal data:", error);
    }
}

// Function to display animals with a "Buy" button
function displayAnimals(animals) {
    const animalList = document.getElementById('animalList');
    animalList.innerHTML = ''; // Clear any existing animals

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card', animal.category);

        const img = document.createElement('img');
        img.src = animal.image;
        img.alt = `${animal.name} image`;

        const h2 = document.createElement('h2');
        h2.textContent = `${animal.name} (Age: ${animal.age} years)`;

        const pDescription = document.createElement('p');
        pDescription.textContent = animal.description;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.classList.add('buy-btn');
        buyButton.onclick = () => openModal(animal.name);

        animalCard.appendChild(img);
        animalCard.appendChild(h2);
        animalCard.appendChild(pDescription);
        animalCard.appendChild(buyButton);

        animalList.appendChild(animalCard);
    });
}

// Function to filter animals by category
function filterPets(category) {
    const allAnimals = document.querySelectorAll('.animal-card');
    allAnimals.forEach(animal => {
        if (category === 'all') {
            animal.style.display = 'block';
        } else if (animal.classList.contains(category)) {
            animal.style.display = 'block';
        } else {
            animal.style.display = 'none';
        }
    });
}

// Function to open the modal
function openModal(petName) {
    const modal = document.getElementById('buyModal');
    const selectedPet = document.getElementById('selectedPet');
    selectedPet.textContent = `You are buying: ${petName}`;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('buyModal');
    modal.style.display = 'none';
}

// Submit form (example functionality)
document.getElementById('buyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your purchase! We will contact you soon.');
    closeModal();
});

// Initialize the page by fetching local animal data
document.addEventListener('DOMContentLoaded', () => {
    fetchLocalAnimals();
});// Function to fetch and display local animal data
async function fetchLocalAnimals() {
    try {
        const response = await fetch('animals.json'); // Path to your JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const animals = await response.json();
        if (Array.isArray(animals) && animals.length > 0) {
            displayAnimals(animals); // Call function to display fetched data
        } else {
            console.error('No animal data available or invalid format');
        }
    } catch (error) {
        console.error("Error fetching local animal data:", error);
    }
}

// Function to display animals with a "Buy" button
function displayAnimals(animals) {
    const animalList = document.getElementById('animalList');
    animalList.innerHTML = ''; // Clear any existing animals

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card', animal.category);

        const img = document.createElement('img');
        img.src = animal.image;
        img.alt = `${animal.name} image`;

        const h2 = document.createElement('h2');
        h2.textContent = `${animal.name} (Age: ${animal.age} years)`;

        const pDescription = document.createElement('p');
        pDescription.textContent = animal.description;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.classList.add('buy-btn');
        buyButton.onclick = () => openModal(animal.name);

        animalCard.appendChild(img);
        animalCard.appendChild(h2);
        animalCard.appendChild(pDescription);
        animalCard.appendChild(buyButton);

        animalList.appendChild(animalCard);
    });
}

// Function to filter animals by category
function filterPets(category) {
    const allAnimals = document.querySelectorAll('.animal-card');
    allAnimals.forEach(animal => {
        if (category === 'all') {
            animal.style.display = 'block';
        } else if (animal.classList.contains(category)) {
            animal.style.display = 'block';
        } else {
            animal.style.display = 'none';
        }
    });
}

// Function to open the modal
function openModal(petName) {
    const modal = document.getElementById('buyModal');
    const selectedPet = document.getElementById('selectedPet');
    selectedPet.textContent = `You are buying: ${petName}`;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('buyModal');
    modal.style.display = 'none';
}

// Submit form (example functionality)
document.getElementById('buyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your purchase! We will contact you soon.');
    closeModal();
});

// Close the modal if user clicks outside the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('buyModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Initialize the page by fetching local animal data
document.addEventListener('DOMContentLoaded', () => {
    fetchLocalAnimals();
});

