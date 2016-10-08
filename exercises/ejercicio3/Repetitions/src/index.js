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
    var padR = [];
    var padL = [];
    while(nLeft > 0){
        padL.push('_');
        nLeft = nLeft -1;
    };
    while(nRight > 0){
        padR.push('_');
        nRight = nRight -1;
    };
    return padL + text + padR;
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
