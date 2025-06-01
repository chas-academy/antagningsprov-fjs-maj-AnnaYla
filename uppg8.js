

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

let  persons = [
    {name: "Kayla", age: 25},
    {name: "Mau", age: 35},
    {name: "Patt", age: 42},
    {name: "Reya", age: 32},
    {name: "Barry", age: 33},
];


function printPersonsover30 (name) {
name.forEach(function(person){
    if (person.age > 30 ) {
        console.log(person.name,person.age);
    }
});
}

printPersonsover30(persons);

}

uppg8();
module.exports = { uppg8 };



