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
      janej: false,
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Hår",
      janej: false,
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Tampon",
      janej: false,
      konskvens: "Kan tilstoppe kloaksystemet og forurene havmiljøet",
      similar: "Toiletpapir (som må skylles ud)",
      source: "https://mst.dk"
    },
    {
      name: "Toiletpapir",
      janej: true,
      konskvens: "Opløses hurtigt og er beregnet til toilettet",
      similar: "Intet – toiletpapir er det eneste der må skylles ud",
      source: "https://mst.dk"
    },
    {
      name: "Neglelak",
      janej: false,
      konskvens: "Indeholder opløsningsmidler, som kan skade miljøet",
      similar: "Neglelakfjerner, makeuprester",
      source: "https://mst.dk"
    },
    {
      name: "P-piller",
      janej: false,
      konskvens: "Medicinrester påvirker vandmiljøet og dyrelivet",
      similar: "Tabletter, vitaminpiller",
      source: "https://mst.dk"
    },
    {
      name: "Klorin",
      janej: false,
      konskvens: "Er ætsende og skadeligt for vandmiljøet",
      similar: "Rodrens, toiletrens",
      source: "https://mst.dk"
    },
    {
      name: "Fritureolie",
      janej: false,
      konskvens: "Kan stoppe afløb til og tiltrække rotter",
      similar: "Madolie, smørrester",
      source: "https://mst.dk"
    },
    {
      name: "Batterier",
      janej: false,
      konskvens: "Indeholder tungmetaller som kan forurene naturen",
      similar: "Elektronik, pærer",
      source: "https://mst.dk"
    },
    {
      name: "Maling",
      janej: false,
      konskvens: "Indeholder kemikalier og skal afleveres som farligt affald",
      similar: "Lakker, spraymaling",
      source: "https://mst.dk"
    },
    {
      name: "Cigaretskod",
      janej: false,
      konskvens: "Filteret indeholder plastik og giftige stoffer",
      similar: "Snus, tyggegummi",
      source: "https://mst.dk"
    },
    {
      name: "Plastikposer",
      janej: false,
      konskvens: "Nedbrydes ikke i naturen og skader dyrelivet",
      similar: "Slikpapir, plastikemballage",
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
        //document.getElementById("janejt").textContent = found.janej;
        if (found.janej) {
            document.getElementById("ja").visibility = "hidden";
        }
        document.getElementById("konskvenst").textContent = found.konskvens;
        document.getElementById("similart").textContent = found.similar;
        document.getElementById("sourcet").textContent = found.source;
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