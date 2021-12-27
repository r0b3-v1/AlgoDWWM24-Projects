
//Vladimir
const numberOfPassengers = 15;
    for ( let i = 0; i < numberOfPassengers; i++) {
        console.log("Passenger on board");
    }
console.log("All passengers are on board, the plane could take off!");

let compteur = 0;
for (compteur; compteur < 10;compteur ++) {
    console.log(compteur);
}

//Vladimir
function age(a){
let result;
    if (a < 18) {
      result = 'pas autorise';
    } else {
      result = ' autorise';
    }
    return result;
  }
  console.log('retour de age() sur age = 16 : '+age(16));
  // expected output: " autorise"

  //
  function calculatrice(nb1, nb2, op) {
    if (op == "-") {
        return res = nb1 - nb2;

    } else if (op == "+") {
        return res = nb1 + nb2;

    } else if (op == "/") {
        return res = nb1 / nb2;

    } else if (op == "*") {
        return res = nb1 * nb2;

    } else {
        return console.log("un opérateur svp");
    }   
}

console.log('calcul de 4 + 3 = ' + calculatrice(4, 3, "+"));

//Nicolas, fonction qui supprime le premier caractère d'une chaîne
  function removeFirstCharacter(str1="/tache1"){
     return str1.substring(1);
    }
    console.log('Remove de /tache1 = ' + removeFirstCharacter());
    
//Vladimir
const numberOfSeats = 1850;
let numberOfGuests = 1850;

if(numberOfGuests<numberOfSeats){
    console.log("Autoriser plus de reservations");
}
else if ( numberOfGuests==numberOfSeats) {
    console.log("La salle est pleine !");
}

     else {
    console.log("La salle est pleine, plus de reservations possible !");
} ;


let numberOfFreeSeats = numberOfSeats-numberOfGuests;
console.log("Nombre de places restantes " + numberOfFreeSeats);


const userName = "vlado9375";
const password = 123456789;
const minimumAge = 18;
const welcomeMessage = "Bienvenue :-)";

let clientAge = 19;
let clientUsersnameWrote = "vlado9375";
let clientPasswordWrote = 123456789;

if (userName==clientUsersnameWrote && password==clientPasswordWrote && minimumAge<=clientAge ){
    console.log(welcomeMessage)
} else {
    console.log("Go out !!!!")
};


