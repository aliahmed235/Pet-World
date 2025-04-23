// // Array of pet objects
// const pets = [
//     { name: "Buddy", age: "2 years", description: "Friendly and playful Labrador.", img: "photo/dog.jpg" },
//     { name: "Mittens", age: "1 year", description: "Calm and cuddly Tabby.", img: "photo/cat.jpg" },
//     { name: "Charlie", age: "3 years", description: "Energetic Golden Retriever.", img: "photo/dog2.jpg" },
//     { name: "Luna", age: "6 months", description: "Curious and mischievous kitten.", img: "photo/cat2.jpg" }
// ];

// // Generate pet cards dynamically
// document.addEventListener("DOMContentLoaded", () => {
//     const petGrid = document.getElementById("pet-grid");

//     if (petGrid) {
//         pets.forEach(pet => {
//             const petCard = document.createElement("div");
//             petCard.className = "pet-card";

//             petCard.innerHTML = `
//                 <img src="${pet.img}" alt="${pet.name}">
//                 <h3>${pet.name}</h3>
//                 <p>${pet.age} old</p>
//                 <p>${pet.description}</p>
//                 <a href="#" class="btn btn-secondary">Adopt Me</a>
//             `;

//             petGrid.appendChild(petCard);
//         });
//     }
// });

// // Contact form validation
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("form");

//     if (form) {
//         form.addEventListener("submit", function (event) {
//             const name = form.name.value.trim();
//             const email = form.email.value.trim();
//             const message = form.message.value.trim();

//             if (!name || !email || !message) {
//                 event.preventDefault();
//                 alert("Please fill in all fields.");
//             } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//                 event.preventDefault();
//                 alert("Please enter a valid email address.");
//             } else {
//                 alert("Thank you for your message!");
//             }
//         });
//     }
// });
// page 1
// adopt page :
// Function to display pets
const pets = [
    { name: "Buddy", type: "dog", age: "2 years", description: "Friendly and playful Labrador.", img: "photo/dog.jpg" },
    { name: "Mittens", type: "cat", age: "1 year", description: "Calm and cuddly Tabby.", img: "photo/cat.jpg" },
    { name: "Charlie", type: "dog", age: "3 years", description: "Energetic Golden Retriever.", img: "photo/dog2.jpg" },
    { name: "Luna", type: "cat", age: "6 months", description: "Curious and mischievous kitten.", img: "photo/cat2.jpg" }
];

// Function to display pets
function displayPets(filter) {
    const adoptionGrid = document.getElementById("adoption-grid");
    adoptionGrid.innerHTML = ""; // Clear existing content

    const filteredPets = filter === "all" ? pets : pets.filter(pet => pet.type === filter);

    filteredPets.forEach(pet => {
        const petCard = `
            <div class="pet-card">
                <img src="${pet.img}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>${pet.age} old</p>
                <p>${pet.description}</p>
                <a href="#" class="btn btn-secondary">Adopt Me</a>
            </div>
        `;
        adoptionGrid.innerHTML += petCard;
    });
}

// Initial display
document.addEventListener("DOMContentLoaded", () => {
    const filterSelect = document.getElementById("filter");
    displayPets("all"); // Show all pets by default

    // Add event listener for filter
    filterSelect.addEventListener("change", () => {
        displayPets(filterSelect.value);
    });
});
// Function to handle the active class on the navbar links
document.addEventListener("DOMContentLoaded", () => {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Loop through links and add the 'active' class to the current page
    navLinks.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === window.location.href) {
            // Add the 'active' class only if it's not already applied
            if (!link.classList.contains('active')) {
                link.classList.add('active');
            }
        }
    });
});
