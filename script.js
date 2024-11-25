// script.js

// Select the container
const container = document.getElementById("footprints-container");

// Function to create a footprint
function createFootprint(x, y, rotation) {
    const footprint = document.createElement("div");
    footprint.classList.add("footprint");
    footprint.style.left = `${x}px`;
    footprint.style.top = `${y}px`;
    footprint.style.transform = `rotate(${rotation}deg)`;
    container.appendChild(footprint);

    // Remove the footprint after animation
    setTimeout(() => {
        footprint.remove();
    }, 4000); // Adjust time as needed
}

// Generate footprints at intervals
let x = 50, y = 50, step = 50;
setInterval(() => {
    createFootprint(x, y, Math.random() > 0.5 ? -15 : 15);
    x += Math.random() * 2 > 1 ? step : -step;
    y += step;

    // Reset if out of bounds
    if (x > window.innerWidth || x < 0 || y > window.innerHeight || y < 0) {
        x = 50;
        y = 50;
    }
}, 500); // Adjust interval as needed
