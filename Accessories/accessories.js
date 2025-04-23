// Function to fetch and display local accessory data
async function fetchLocalAccessories() {
    try {
        const response = await fetch('accessories.json'); // Path to your JSON file
        const accessories = await response.json();
        displayAccessories(accessories); // Call function to display fetched data
    } catch (error) {
        console.error("Error fetching local accessory data:", error);
    }
}

// Function to display accessories with a "Buy" button
function displayAccessories(accessories) {
    const accessoryList = document.getElementById('accessoryList');
    accessoryList.innerHTML = ''; // Clear any existing accessories

    accessories.forEach(accessory => {
        const accessoryCard = document.createElement('div');
        accessoryCard.classList.add('accessory-card', accessory.category);

        const img = document.createElement('img');
        img.src = accessory.image;
        img.alt = `${accessory.name} image`;

        const h2 = document.createElement('h2');
        h2.textContent = `${accessory.name} (Price: $${accessory.price})`;

        const pDescription = document.createElement('p');
        pDescription.textContent = accessory.description;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.classList.add('buy-btn');
        buyButton.onclick = () => openModal(accessory.name);

        accessoryCard.appendChild(img);
        accessoryCard.appendChild(h2);
        accessoryCard.appendChild(pDescription);
        accessoryCard.appendChild(buyButton);

        accessoryList.appendChild(accessoryCard);
    });
}

// Function to filter accessories by category
function filterAccessories(category) {
    const allAccessories = document.querySelectorAll('.accessory-card');
    allAccessories.forEach(accessory => {
        if (category === 'all') {
            accessory.style.display = 'block';
        } else if (accessory.classList.contains(category)) {
            accessory.style.display = 'block';
        } else {
            accessory.style.display = 'none';
        }
    });
}

// Function to open the modal
function openModal(accessoryName) {
    const modal = document.getElementById('buyModal');
    const selectedAccessory = document.getElementById('selectedAccessory');
    selectedAccessory.textContent = `You are buying: ${accessoryName}`;
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

// Initialize the page by fetching local accessory data
document.addEventListener('DOMContentLoaded', () => {
    fetchLocalAccessories();
});
