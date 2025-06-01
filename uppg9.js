


function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    function sort(num) {
    for (let numbers of num) {
        if (numbers % 2 === 0) {
            console.log(numbers + " är jämt");
        } else { 
            console.log(numbers + " är udda")
        }
    }
}

sort ([10,11,12,13,14,15,16,17,18]);
  
}


uppg9();

module.exports = { uppg9 };


