// script.js - This controls the interactivity

// Find the button and the body of the webpage
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Listen for a click on the button
toggleButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on and off
    body.classList.toggle('dark-mode');
    
    // Change the button text based on the mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Switch to Light Mode';
    } else {
        toggleButton.textContent = '🌙 Switch to Dark Mode';
    }
});
