
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
    
