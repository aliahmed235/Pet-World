// Initialize the map
const map = L.map('map').setView([26.8206, 30.8025], 6); // Egypt center

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Clinic data with coordinates
const clinicData = {
    cairo: [
        { name: "Happy Pets Clinic - Maadi", coords: [29.9602, 31.2694] },
        { name: "Cairo Vet Center - Nasr City", coords: [30.0544, 31.3442] },
        { name: "The Animal Hospital - New Cairo", coords: [30.0281, 31.4709] },
    ],
    alexandria: [
        { name: "Alex Pet Care - Smouha", coords: [31.2001, 29.9092] },
        { name: "VetPlus Clinic - Stanley", coords: [31.2357, 29.9556] },
        { name: "Green Vet Center - Montaza", coords: [31.2803, 30.0123] },
    ],
    giza: [
        { name: "Giza Animal Care - Mohandessin", coords: [30.0496, 31.2107] },
        { name: "Veterinary Hub - Dokki", coords: [30.0388, 31.2155] },
        { name: "Pyramid Pets Clinic - Haram", coords: [29.9761, 31.1313] },
    ],
    sharm: [
        { name: "Sharm Vet Clinic - Naama Bay", coords: [27.9158, 34.3299] },
        { name: "Sea Breeze Animal Center", coords: [27.8800, 34.3043] },
    ],
};

// Create markers and add them to the map
let currentMarkers = []; // Array to store markers

function updateMap(location) {
    // Clear existing markers
    currentMarkers.forEach((marker) => map.removeLayer(marker));
    currentMarkers = [];

    if (clinicData[location]) {
        clinicData[location].forEach((clinic) => {
            const marker = L.marker(clinic.coords).addTo(map).bindPopup(clinic.name);
            currentMarkers.push(marker);
        });
    }
}

// Update clinic list and map
function updateClinics(location) {
    const clinicList = document.getElementById('clinicNames');
    clinicList.innerHTML = ""; // Clear the list

    if (clinicData[location]) {
        clinicData[location].forEach((clinic) => {
            const listItem = document.createElement('li');
            listItem.textContent = clinic.name;
            listItem.style.cursor = "pointer";
            listItem.onclick = () => {
                map.setView(clinic.coords, 15);
                L.popup()
                    .setLatLng(clinic.coords)
                    .setContent(clinic.name)
                    .openOn(map);
            };
            clinicList.appendChild(listItem);
        });
    }

    // Add markers to the map
    updateMap(location);
}

// Dropdown event listener
document.getElementById('locationSelect').addEventListener('change', (e) => {
    const location = e.target.value;

    // Update clinics and map
    updateClinics(location);

    // Center map on location
    const locationCoordinates = {
        cairo: [30.0444, 31.2357],
        alexandria: [31.2156, 29.9553],
        giza: [29.9765, 31.1313],
        sharm: [27.9158, 34.3299],
    };

    if (locationCoordinates[location]) {
        map.setView(locationCoordinates[location], 10);
    }
});
