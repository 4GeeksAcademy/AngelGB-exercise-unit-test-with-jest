// Importar la función sum del archivo app.js
const { sum, } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("Euros a Dolares", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected);
})
test("Dolares a Yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    const Yen = fromDollarToYen(1)

    const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY;

    // Uso toBeCloseTo para evitar problemas con la precision de los decimales
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
})
test("Yen a Pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    const oneEuroIs = {
        "JPY": 156.5, // japan yen
        "USD": 1.07, // us dollar
        "GBP": 0.87, // british pound
    }
    const pound = fromYenToPound(1)

    const expected = (1 / oneEuroIs.JPY) * oneEuroIs.GBP;

    // Uso toBeCloseTo para evitar problemas con la preciosion de los decimales
    expect(fromYenToPound(1)).toBeCloseTo(expected);
})