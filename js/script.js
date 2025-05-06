// Get references to the input, button, and result container
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

// Define a simple database of items
const itemsDatabase = [
    { name: 'apple', link: '../html/template.html' },
    { name: 'banana', link: '../html/template.html' },
    { name: 'carrot', link: '../html/template.html' },
    { name: 'Vatrondel', link: '../html/template.html' },
    { name: 'Vådserviet', link: '../html/template.html' },
    { name: 'Hår', link: '../html/template.html' },
    { name: 'Tandtråd', link: '../html/template.html' },
    { name: 'Kondom', link: '../html/template.html' },
    { name: 'Tampon', link: '../html/template.html' },
    { name: 'Toiletpapir', link: '../html/template.html' },
    { name: 'Håndsæbe', link: '../html/template.html' },
    { name: 'Barberskum', link: '../html/template.html' },
    { name: 'Tandpasta', link: '../html/template.html' },
    { name: 'Neglelak', link: '../html/template.html' },
    { name: 'Neglelakfjerner', link: '../html/template.html' },
    { name: 'Makeup-pudder', link: '../html/template.html' },
    { name: 'Mascara', link: '../html/template.html' },
    { name: 'Øjenskygge', link: '../html/template.html' },
    { name: 'Læbestift', link: '../html/template.html' },
    { name: 'Solcreme', link: '../html/template.html' },
    { name: 'Deodorant', link: '../html/template.html' },
    { name: 'Shampoo', link: '../html/template.html' },
    { name: 'Balsam', link: '../html/template.html' },
    { name: 'P-piller', link: '../html/template.html' },
    { name: 'Tabletter', link: '../html/template.html' },
    { name: 'Vitaminpiller', link: '../html/template.html' },
    { name: 'Dråber', link: '../html/template.html' },
    { name: 'Inhalator', link: '../html/template.html' },
    { name: 'Thermometer', link: '../html/template.html' },
    { name: 'Blodtryksmåler', link: '../html/template.html' },
    { name: 'Insulinpen', link: '../html/template.html' },
    { name: 'Bandager', link: '../html/template.html' },
    { name: 'Gazekompresser', link: '../html/template.html' },
    { name: 'Opvaskemiddel', link: '../html/template.html' },
    { name: 'Vaskemiddel', link: '../html/template.html' },
    { name: 'Klorin', link: '../html/template.html' },
    { name: 'Rodrens', link: '../html/template.html' },
    { name: 'Gulvrens', link: '../html/template.html' },
    { name: 'Vinduesrens', link: '../html/template.html' },
    { name: 'Toiletrens', link: '../html/template.html' },
    { name: 'Skurepulver', link: '../html/template.html' },
    { name: 'Svamp', link: '../html/template.html' },
    { name: 'Mikrofiberklud', link: '../html/template.html' },
    { name: 'Fritureolie', link: '../html/template.html' },
    { name: 'Madolie', link: '../html/template.html' },
    { name: 'Kaffegrums', link: '../html/template.html' },
    { name: 'Tepper', link: '../html/template.html' },
    { name: 'Æggeskaller', link: '../html/template.html' },
    { name: 'Kattegrus', link: '../html/template.html' },
    { name: 'Fiskegræs', link: '../html/template.html' },
    { name: 'Dæk', link: '../html/template.html' },
    { name: 'Batterier', link: '../html/template.html' },
    { name: 'Maling', link: '../html/template.html' },
    { name: 'Lys', link: '../html/template.html' },
    { name: 'Plastikposer', link: '../html/template.html' },
    { name: 'Blomster', link: '../html/template.html' },
    { name: 'Slikpapir', link: '../html/template.html' },
    { name: 'Køkkenrulle', link: '../html/template.html' },
    { name: 'Servietter', link: '../html/template.html' },
    { name: 'Legetøj', link: '../html/template.html' },
    { name: 'Mobiltelefon', link: '../html/template.html' },
    { name: 'USB-kabel', link: '../html/template.html' },
    { name: 'Sut', link: '../html/template.html' },
    { name: 'Barberhøvl', link: '../html/template.html' },
    { name: 'Hårbørste', link: '../html/template.html' },
    { name: 'Tandbørste', link: '../html/template.html' },
    { name: 'Kontaktlinser', link: '../html/template.html' },
    { name: 'Tyggegummi', link: '../html/template.html' },
    { name: 'Cigaretskod', link: '../html/template.html' },
    { name: 'Aske', link: '../html/template.html' },
    { name: 'Æble', link: '../html/template.html' }
];

// Add an event listener to the search button
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase().trim(); // Get the input value, convert to lowercase and trim spaces
    const foundItem = itemsDatabase.find(item => item.name.toLowerCase().trim() === searchTerm); // Normalize both sides of the comparison

    // Redirect to the HTML page if found
    if (foundItem) {
        window.location.href = foundItem.link;
    } else {
        resultContainer.textContent = 'Item not found. Please try again.';
    }
});