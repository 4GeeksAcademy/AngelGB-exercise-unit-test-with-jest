// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function(dolares) {
    let euros = dolares / oneEuroIs.USD
    let valueInYen = euros * oneEuroIs.JPY;
    return valueInYen;
}
const fromYenToPound = function(yenes) {
    let euros = yenes / oneEuroIs.JPY;
    let valueInPound = euros * oneEuroIs.GBP
    return valueInPound;
}
console.log(fromDollarToYen(1));

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};