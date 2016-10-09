'use strict';
//ejercicio1
function promedio (p1,p2,p3) {
    var sum = (p1+p2+p3);
    return sum / promedio.length;
}

console.log(promedio(7,9,10));
// fin ejercicio1
console.log('----------------------------------------------------');
//ejecicio2
function padding (nLeft, nRight, text){
    var cadenaResult = '';
    for (var i = 0; i <= nLeft; i++) {
        cadenaResult += '_';
    };
    cadenaResult += text;

    for (var o = 0; o <= nRight; o++) {
        cadenaResult += '_';
    };
    return cadenaResult;
}
console.log(padding(3,4,'tu mama'));
// fin ejercicio2
console.log('----------------------------------------------------');
//ejecicio3
function piramyd (nLines, symbol){
    var symbolLines = '';
    for (var i = 1; i <= nLines; i++) {
        for (var o = 1; o <= i; o++) {
            symbolLines += symbol
        };
        symbolLines += '\n';
    };
    console.log(symbolLines)
}

piramyd(10,'*');
piramyd(19,'%');
