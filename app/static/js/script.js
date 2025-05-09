// Get references to the input, button, and result container
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

// Define a simple database of items
const itemsDatabase = [
    { name: 'Vådserviet' },
    { name: 'Hår' },
    { name: 'Tampon' },
    { name: 'Toiletpapir' },
    { name: 'Neglelak' },
    { name: 'P-piller' },
    { name: 'Klorin' },
    { name: 'Fritureolie' },
    { name: 'Batterier' },
    { name: 'Maling' },
    { name: 'Cigaretskod' },
    { name: 'Plastikposer' }
  ];
  


// Example script.js
function updateTxt(newTxt) {
    fetch('/update_txt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ new_txt: newTxt })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            console.log(data.message);
        } else {
            console.error(data.error);
        }
    })
    .catch(error => console.error('Error:', error));
}

// Example usage
//updateTxt("Dette er en ny tekst!");



// Get references to the suggestions container
const suggestionsContainer = document.createElement('div');
suggestionsContainer.id = 'suggestionsContainer';
suggestionsContainer.style.position = 'absolute';
suggestionsContainer.style.backgroundColor = '#fff';
suggestionsContainer.style.border = '1px solid #ccc';
suggestionsContainer.style.display = 'none';
document.body.appendChild(suggestionsContainer);

// Position the suggestions container below the input field
searchInput.addEventListener('focus', function () {
    const rect = searchInput.getBoundingClientRect();
    suggestionsContainer.style.top = `${rect.bottom + window.scrollY}px`;
    suggestionsContainer.style.left = `${rect.left + window.scrollX}px`;
    suggestionsContainer.style.width = `${rect.width}px`;
});

// Show suggestions when the user types
searchInput.addEventListener('input', function () {
    const inputValue = this.value.toLowerCase().trim();
    if (inputValue.length < 2) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const matchedItems = itemsDatabase.filter(item =>
        item.name.toLowerCase().includes(inputValue)
    );

    if (matchedItems.length > 0) {
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        matchedItems.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = item.name;
            suggestionItem.style.padding = '5px';
            suggestionItem.style.cursor = 'pointer';
            suggestionItem.addEventListener('click', function () {
                searchInput.value = item.name; // Set the input value to the selected suggestion
                suggestionsContainer.style.display = 'none'; // Hide suggestions
                showResult(item); // Show the result for the selected item
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', function (e) {
    if (e.target !== searchInput && e.target !== suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
});

// Function to show the result (reuse your existing logic)
function showResult(item) {
    if (item.link) {
        window.location.href = '/page/'; // Redirect to the item's link
        updateTxt(item.name); // Update the text in the database
    } else {
        resultContainer.textContent = 'Det ord kender vi ikke, prøv igen.';
    }
}

// Add an event listener to the search button
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase().trim(); // Get the input value, convert to lowercase and trim spaces
    const foundItem = itemsDatabase.find(item => item.name.toLowerCase().trim() === searchTerm); // Normalize both sides of the comparison

    // Redirect to the HTML page if found
    if (foundItem) {
        window.location.href =  '/page/' ;
        updateTxt(foundItem.name); // Update the text in the database
    } else {
        resultContainer.textContent = 'Det ord kender vi ikke, prøv igen.'; // Display a message if not found
        searchInput.value = ''; // Clear the input field
    }
});

// Add an event listener to the search input for "Enter" key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        searchButton.click(); // Trigger the button click event
        searchInput.value = ''; // Clear the input field
    }
});

function find__item() {
    item = document.getElementById("item").textContent.trim().toLowerCase();
    console.log("Item value:", item);

    const found = searched.find(obj => obj.name.toLowerCase() === item);
    console.log("Found object:", found);

    if (found) {
        const redBox = document.getElementById("redBox");
        const greenBox = document.getElementById("greenBox");

        if (!found.janej) {
            // Show the red box and hide the green box
            redBox.style.display = "block";
            redBox.textContent = "Dette må ikke skylles ud!";
            greenBox.style.display = "none";
        } else {
            // Show the green box and hide the red box
            greenBox.style.display = "block";
            greenBox.textContent = "Dette må skylles ud!";
            redBox.style.display = "none";
        }

        document.getElementById("konskvenst").textContent = found.konskvens;
        document.getElementById("similart").textContent = found.similar;
        document.getElementById("sourcet").textContent = found.source;
    } else {
        console.error("Item not found in the searched array");
    }
}

// CSS for #redBox
const style = document.createElement('style');
style.textContent = `
    #redBox {
        display: none;
        background-color: red;
        color: white;
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 24px;
        border: 2px solid darkred;
        border-radius: 10px;
        margin-top: 20px;
    }
`;
document.head.appendChild(style);

