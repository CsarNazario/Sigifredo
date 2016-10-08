'use strict';
//ejercicio1
function sign (number) {
    if (number < 0) {
        console.log('-');
    } else{
        console.log('+');
    };
}
sign(-1);
sign(5);
//fin ejercicio1
console.log('----------------------------------------------------');
//ejecicio2

function order(n1,n2,n3){
    if (n1 < n2 && n1 <n3) {
        if (n2 < n3) {
            console.log(n1+','+n2+','+n3);
        } else{
            console.log(n1+','+n3+','+n2);
        };
    } 
    if (n2 < n1 && n2 <n3) {
        if (n1 < n3) {
            console.log(n2+','+n1+','+n3);
        } else{
            console.log(n2+','+n3+','+n1);
        };
    }
    if (n3 < n1 && n3 <n2) {
        if (n1 < n2) {
            console.log(n3+','+n1+','+n2);
        } else{
            console.log(n3+','+n2+','+n1);
        };
    }
}

order(5,-1,2);
order(-3,43,10);
//fin ejercicio2
console.log('----------------------------------------------------');
//ejecicio3
function minimum (n1,n2,n3,n4,n5){
    if (n1<n2 && n1<n3 && n1<n4 && n1<n5) {
        return n1;
    };
    if (n2<n1 && n2<n3 && n2<n4 && n2<n5) {
        return n2;
    };
    if (n3<n1 && n3<n2 && n3<n4 && n3<n5) {
        return n3;
    };
    if (n4<n1 && n4<n2 && n4<n3 && n4<n5) {
        return n4;
    };
    if (n5<n1 && n5<n2 && n5<n3 && n5<n4) {
        return n5;
    };
    
}

console.log(minimum(4, 1, 0, 300, 43.2));
console.log(minimum(-13,-134,394,1,4));