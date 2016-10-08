'use strict';
//ejercicio1
var eggsRecipe ={
    title : 'huevos con jamon',
    ingredients : {'huevos' : 2, 'rebandas de jamon' : 2, 'aceite' : 'poco'},
    levelOfDificulty : 'beginner',
    steps : 'Se rompen y baten dos huevos. Se rebanan, al gusto las rebanadas de jamon. Mientras se hace esto calentar el aceite en el sarten, una vez caliente depositar el jamon y dejar freir un poco para luego vertir los huevos batidos. Mover el huevo y evitar que se pegue en el sarten. Una vez cocinado se sirve acompañado de lo que guste.'

}

console.log(eggsRecipe);
// fin ejercicio1
console.log('----------------------------------------------------');
//ejecicio2
var contacts = [{
    name : 'carlos',
    homeTelephone : 52340921,
    workTelephone : 32048523,
    cellPhone : 5527783904,
    address : {street: 'albino garcia', number: 350, country: 'Mexico'}
},
{
    name : 'Neri',
    homeTelephone : 90303455,
    workTelephone : 33436799,
    cellPhone : 5518867584,
    address : {street: 'norte 140', number: 89, country: 'Mexico'}
},
{
    name : 'tavo',
    homeTelephone : 67238904,
    workTelephone : 25367491,
    cellPhone : 5518392765,
    address : {street: 'tenis', number: 91, country: 'Mexico'}
},
{
    name : 'cruz',
    homeTelephone : 22353461,
    workTelephone : 56387201,
    cellPhone : 5510937654,
    address : {street: 'la violeta', number: 20, country: 'Mexico'}
},
{
    name : 'Norma',
    homeTelephone : 94857301,
    workTelephone : 78390265,
    cellPhone : 5555764839,
    address : {street: 'eje central', number: 2809, country: 'Mexico'}
},
{
    name : 'tamara',
    homeTelephone : 23785304,
    workTelephone : 22307491,
    cellPhone : 5509386482,
    address : {street: 'tamarindo', number: 1902, country: 'Mexico'}
}]
function filter (contacts, letras) {
    var resultContacts = [];
    for (var i = 0; i < contacts.length; i++) {
        if(letras == contacts[i].name.charAt(0)){
            resultContacts.push(contacts[i].name);
        }
    };
    console.log(resultContacts);
}

filter(contacts,'N');
filter(contacts,'c');
filter(contacts,'t');
// fin ejercicio2
console.log('----------------------------------------------------');
//ejecicio3
var p1 = {
    x: 20,
    y: 10
    };
var p2 = {
    x: 15,
    y: 80
    };
var p3 = {
    x: -25,
    y: 0,
    };


function pEquals (p1, p2) {
    if (p1.x == p2.x && p1.y == p2.y) {
        console.log('los vectores son iguales')
    } else{
       console.log('los vectores son diferentes') 
    };
}

pEquals(p1,p2);

var p3 = {
    x: -25,
    y: 2,
    dist: function distanceTo (pRef) {
        return Math.sqrt(Math.pow((pRef.x - this.x),2)+Math.pow((pRef.y - this.y),2));
    }
}
console.log(p3.dist(p1));