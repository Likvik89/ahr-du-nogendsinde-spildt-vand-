// Get references to the input, button, and result container
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

// Define a simple database of items
const itemsDatabase = [
    { name: 'apple', link: '../html/template.html' },
    { name: 'banana', message: 'Bananas are a great source of potassium.' },
    { name: 'carrot', message: 'Carrots are good for your eyesight.' }
];

// Add an event listener to the search button
    searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Get the input value and convert to lowercase
    const foundItem = itemsDatabase.find(item => item.name === searchTerm); // Search for an exact match

    // Redirect to the HTML page if found
    if (foundItem) {
        window.location.href = foundItem.link;
    } else {
        resultContainer.textContent = 'Item not found. Please try again.';
    }
});
;