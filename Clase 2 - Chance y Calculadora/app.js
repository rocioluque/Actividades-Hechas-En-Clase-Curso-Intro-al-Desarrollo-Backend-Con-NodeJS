// const Chance = require('chance');

// const chance = new Chance();

// //Genera datos aleatorios utilizando Chance
// const randomName = chance.name();
// const randomAge = chance.age();
// const randomEmail = chance.email();

// //Imprime los datos aleatorios en la consola
// console.log('Nombre aleatorio:', randomName);
// console.log('Edad aleatoria:', randomAge);
// console.log('Email aleatorio:', randomEmail);

const { sumar, multiplicar } = require('./calculadora');

let resultadoSuma = sumar(2, 3);
let resultadoMultiplicacion = multiplicar(2, 3);

console.log('El resultado de la suma es:', resultadoSuma);
console.log('El resultado de la multiplicacion es:', resultadoMultiplicacion);