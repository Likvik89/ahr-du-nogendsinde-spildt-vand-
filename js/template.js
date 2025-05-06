const funfacts = [
    {nr: 1, fact: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'},
    {nr: 2, fact: 'bla bla bla'}
];

var random = Math.floor(Math.random()*(funfacts.length))

window.onload = function(){
    document.getElementById("fun_tekst").textContent = funfacts[random].fact;
};
