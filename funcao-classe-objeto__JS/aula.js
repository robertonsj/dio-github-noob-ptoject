// let num1 = 10;
// let num2 = 5;
// let output = num1 * num2;

// console.log(`Resultado = ${output}`);

/**Quantia gasta em uma dada viagem
 * 1 - preço do combutivel;
 * 2 - Gasto médio de combustível do carro por KM
 * 3 - Distância em KM da viagem.
 */

const fuelPrice = 5.79
const kmPorLitro = 12
const distanceKm = 100;

const qtdConsumo = distanceKm / kmPorLitro
const totalCost = qtdConsumo * fuelPrice
console.log(`The total cost is $${totalCost.toFixed(2)}`)