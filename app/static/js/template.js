const funfacts = [
    {nr: 1, fact: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'},
    {nr: 2, fact: 'bla bla bla'}
];

var random = Math.floor(Math.random()*(funfacts.length))

var item

window.onload = function(){
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;
    item = document.getElementById("item").textContent
};
