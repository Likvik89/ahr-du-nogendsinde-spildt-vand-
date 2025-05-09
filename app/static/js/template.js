const funfacts = [
    {nr: 1, fact: 'hvis du skulle putte en grand piano i et toilet skulle toilettet ca. 30 gange større'},
    {nr: 2, fact: 'der kan være volumen af 166 golfbolde i en toilet skål'},
    {nr: 3, fact: 'der er mere end 2000 forskellige toiletter i verden'},
    {nr: 4, fact: 'hvis du tager alle molekyler vand i et toilet skøl og lægger dem i en række, vil de strække 7.2 lys år'},
    {nr: 5, fact: 'kommunen siger du har spildt vand'},
];

const searched = [
    {name: "apple", janej: 'apple', konskvens: 'apple', similar: 'apple', source: 'apple'},
    {name: "banana", janej: 'banana', konskvens: 'banana', similar: 'banana', source: 'banana'},
    {name: "carrot", janej: 'carrot', konskvens: 'carrot', similar: 'carrot', source: 'carrot'},
];


var item
/*
window.onload = function(){
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;
    item = document.getElementById("item").textContent
};
*/

function find__item() {
    item = document.getElementById("item").textContent.trim().toLowerCase();
    console.log("Item value:", item);

    const found = searched.find(obj => obj.name.toLowerCase() === item);
    console.log("Found object:", found);

    if (found) {
        document.getElementById("janej").textContent = found.janej;
        document.getElementById("konskvens").textContent = found.konskvens;
        document.getElementById("similar").textContent = found.similar;
        document.getElementById("source").textContent = found.source;
    } else {
        console.error("Item not found in the searched array");
    }
}
var random = Math.floor(Math.random() * (funfacts.length));
//var item = "banana"; // This should be dynamically set based on user input or selection

window.onload = function() {
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;
     // Get the item from the HTML element
    
    setTimeout(find__item, 100); 

    // Find the object in the searched array where the name matches the item
    


};