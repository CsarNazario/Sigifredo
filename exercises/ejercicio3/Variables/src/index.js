'use strict';
//ejercicio1
var moneyPesos;
moneyPesos = 100;
var usdFactor = 0.052;
var eurFactor = 0.046;

var usd = moneyPesos * usdFactor;
var eur = moneyPesos * eurFactor;

console.log('Con un monto de ' + moneyPesos + ' pesos se tienen '+ usd + ' dolares y ' + eur + ' euros');
//fin ejercicio1
console.log('------------------------------------------------------')
//ejercicio2
var shoesPrice = 2000;
var walletPrice = 500;
var watchPrice = 5000;
var jeansPrice = 1000;

var discountShoes = .10;
var discountWallet = .50;

var totalShoes = (shoesPrice-(shoesPrice * discountShoes));
var totalWallet = (walletPrice-(walletPrice * discountWallet));

var totalFinal = (totalShoes+totalWallet+watchPrice+jeansPrice);

console.log('Zapatos = ' + shoesPrice + ' pesos');
console.log('billetera = ' + walletPrice + ' pesos');
console.log('reloj = '+ watchPrice+' pesos');
console.log('jeans = '+ jeansPrice+' pesos');
console.log('descuento de 10% para los Zapatos');
console.log('descuento de 50% para la billetera');
console.log('Total Final = '+ totalFinal+' pesos');
//fin ejercicio2