const funfacts = [
    {nr: 1, fact: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'},
    {nr: 2, fact: 'bla bla bla'}
];

const searched = [
    {name: "apple", janej: 'apple', konskvens: 'apple', similar: 'apple', source: 'apple'},
    {name: "banana", janej: 'banana', konskvens: 'banana', similar: 'banana', source: 'banana'},
    {name: "carrot", janej: 'carrot', konskvens: 'carrot', similar: 'carrot', source: 'carrot'},
];

var item

window.onload = function(){
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;
    item = document.getElementById("item").textContent
};

var random = Math.floor(Math.random() * (funfacts.length));
var item = "banana"; // This should be dynamically set based on user input or selection

window.onload = function() {
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;

    // Find the object in the searched array where the name matches the item
    const found = searched.find(obj => obj.name === item);

    // If found, update the text content with the janej value
    if (found) {
        document.getElementById("janej").textContent = found.janej;
        document.getElementById("konskvens").textContent = found.konskvens;
        document.getElementById("similar").textContent = found.similar;
        document.getElementById("source").textContent = found.source;
    } else {
        console.error("Item not found in the searched array");
    }
};