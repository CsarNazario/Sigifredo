'use strict';
//ejercicio1
function firstElement (arrayFuente, nElementos) {
    var arrayDestino = [];
    for (var i = 0; i < nElementos; i++) {
        arrayDestino.push(arrayFuente[i]);
    };
    return arrayDestino;
}

console.log(firstElement([7,9,0,-2],1));
console.log(firstElement([2,-2.33,'hola mundo',8,'adios mundo'],3));
console.log(firstElement([10,39,0.22,1],0));
// fin ejercicio1
console.log('----------------------------------------------------');
//ejecicio2
function unionArray (array, symbol) {
    var resultList = '';
    for (var i = 0; i < array.length-1; i++) {
        resultList += array[i] + symbol
    };
    resultList += array[array.length-1];
    console.log(resultList);
}

unionArray(['red','green','white','black'],'+');
unionArray(['red','green','white','black'],'5');
unionArray(['red','green','white','black'],'%');
// fin ejercicio2
console.log('----------------------------------------------------');
//ejecicio3
function backwards(array){
    var resultArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        resultArray.push(array[i]);
    };
    console.log(resultArray);

}

console.log(backwards([3,6,4,1]));