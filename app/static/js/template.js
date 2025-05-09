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
      konskvens: "Vådservietter opløses ikke i vand som toiletpapir og kan derfor skabe propper i kloaksystemet. Når de skylles ud, ender de ofte i havet og skader havdyr, der forveksler dem med føde.",
      similar: "Toiletpapir (som må skylles ud), bleer, hygiejnebind",
      source: "https://mst.dk"
    },
    {
      name: "Hår",
      janej: false,
      konskvens: "Selvom det kan virke naturligt, kan hår samle sig i afløb og skabe blokeringer. Det nedbrydes langsomt og bør smides i restaffaldet.",
      similar: "Dyrehår, vatpinde, tamponer",
      source: "https://mst.dk"
    },
    {
      name: "Tampon",
      janej: false,
      konskvens: "Tamponer udvider sig i vand og kan blokere kloakrør. De nedbrydes ikke hurtigt og er en hyppig årsag til kloakstop og affald på strandene.",
      similar: "Bind, vådservietter, toiletpapir",
      source: "https://mst.dk"
    },
    {
      name: "Toiletpapir",
      janej: true,
      konskvens: "Toiletpapir er designet til at opløses hurtigt i vand og er det eneste papirprodukt, der må skylles ud i toilettet.",
      similar: "Intet andet papirprodukt må skylles ud – ikke køkkenrulle eller servietter",
      source: "https://mst.dk"
    },
    {
      name: "Neglelak",
      janej: false,
      konskvens: "Neglelak indeholder opløsningsmidler og kemikalier, som kan være skadelige for miljøet, hvis de havner i kloakken. Det skal afleveres som farligt affald.",
      similar: "Neglelakfjerner, maling, sprayprodukter",
      source: "https://mst.dk"
    },
    {
      name: "P-piller",
      janej: false,
      konskvens: "Medicinrester som P-piller kan påvirke fisk og andre organismer i vandmiljøet, selv i små mængder. De må aldrig skylles ud – afleveres på apoteket.",
      similar: "Anden medicin som tabletter, dråber og inhalatorer",
      source: "https://mst.dk"
    },
    {
      name: "Klorin",
      janej: false,
      konskvens: "Klorin er stærkt ætsende og kan skade både afløbsrør og vandmiljøet. Bruges med omtanke og må aldrig hældes direkte i kloakken i store mængder.",
      similar: "Toiletrens, afløbsrens, andre rengøringsmidler med kemikalier",
      source: "https://mst.dk"
    },
    {
      name: "Fritureolie",
      janej: false,
      konskvens: "Brugt olie må ikke hældes i vasken – det størkner og tilstopper rør. Det kan også tiltrække rotter og belaste rensningsanlægget.",
      similar: "Madolie, smørrester, sovs",
      source: "https://mst.dk"
    },
    {
      name: "Batterier",
      janej: false,
      konskvens: "Batterier indeholder tungmetaller og syrer, som er yderst skadelige for miljøet. De skal afleveres i en miljøkasse eller på genbrugsstation.",
      similar: "Elektronikaffald som pærer, ledninger og små apparater",
      source: "https://mst.dk"
    },
    {
      name: "Maling",
      janej: false,
      konskvens: "Maling indeholder opløsningsmidler og tungmetaller, som ikke må havne i naturen. Restmaling og tomme spande afleveres som farligt affald.",
      similar: "Lak, spraymaling, terpentin",
      source: "https://mst.dk"
    },
    {
      name: "Cigaretskod",
      janej: false,
      konskvens: "Cigaretskod indeholder plastik og op til 4.000 kemikalier. Det nedbrydes langsomt og forurener både bymiljø og vandmiljø.",
      similar: "Snus, tyggegummi, småt affald",
      source: "https://mst.dk"
    },
    {
      name: "Plastikposer",
      janej: false,
      konskvens: "Plastikposer hører ikke hjemme i naturen eller toilettet. De forurener havet, skader dyrelivet og nedbrydes langsomt.",
      similar: "Slikpapir, plastemballage, engangsservice",
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