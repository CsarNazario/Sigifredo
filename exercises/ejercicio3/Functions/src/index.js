'use strict';
//ejercicio1
function padres(madre, padre, hijo) {
	console.log(hijo+', you are the son of '+madre+' and '+padre);
}

padres('Cruz', 'Abraham', 'Cesar');
//fin ejercicio1
console.log('----------------------------------------------------');
//ejercicio 2
function distance (x1,y1,x2,y2) {
	var result = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	console.log('la distancia entre los puntos es de '+result);
}
distance(3,6,9,1);

//fin ejercicio2
console.log('----------------------------------------------------');
//ejercicio 3
function currencyTrade (pesos, moneda) {
	var usdFactor = 0.052;
    var eurFactor = 0.046;
    var tradeUsd = pesos * usdFactor;
    var tradeEur = pesos * eurFactor;
    if (moneda === 'USD') {
         console.log('Los '+pesos+' pesos equivalen a '+tradeUsd+ ' dolares');
    };
    if (moneda === 'EUR') {
         console.log('Los '+pesos+' pesos equivalen a '+tradeEur+ ' Euros');
    };
}
currencyTrade(100,'EUR');
currencyTrade(100,'USD');
//fin ejercicio 3