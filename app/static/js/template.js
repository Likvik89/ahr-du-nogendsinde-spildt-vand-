const funfacts = [
    {nr: 1, fact: 'hvis du skulle putte en grand piano i et toilet skulle toilettet ca. 30 gange større'},
    {nr: 2, fact: 'der kan være volumen af 166 golfbolde i en toilet skål'},
    {nr: 3, fact: 'der er mere end 2000 forskellige toiletter i verden'},
    {nr: 4, fact: 'hvis du tager alle molekyler vand i et toilet skøl og lægger dem i en række, vil de strække 7.2 lys år'},
    {nr: 5, fact: 'kommunen siger du har spildt vand'},
];

const searched = [
    {
      name: "Vådserviet",
      janej: "Ja",
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Hår",
      janej: "Nej",
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Tampon",
      janej: "Nej",
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Toiletpapir",
      janej: "Ja",
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Neglelak",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "P-piller",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Klorin",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Fritureolie",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Batterier",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Maling",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Cigaretskod",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Plastikposer",
      janej: "Nej",
      konskvens: "Kan forurene grundvandet og skade dyrelivet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    }
  ];
  


var item


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

window.onload = function() {
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;
     // Get the item from the HTML element
    
    setTimeout(find__item, 100); 

    // Find the object in the searched array where the name matches the item
    
};