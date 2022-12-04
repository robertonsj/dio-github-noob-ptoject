/**Faça um programa para calcular o valor de uma viagem
 * Você tem 5 variáveis: 
 * 1. preço do etanol;
 * 2. preço da gasolina;
 * 3. tipo de combustível no carro;
 * 4. Quantos KM o carro faz com 1 litro do combustível;
 * 5. Distância em KM da viagem.
 * 
 * Valor pago para realizar a viagem
 */

const etanol = 5.79;
const gas = 6.66; 
const isGasolina = true;
const distPorLitro = 10; /**Distancia percorrida por litro de combustível */
const distTotal = 100;
const consumoComb = distTotal / distPorLitro; /**Consumo total de combustível. */
let gastoViagem;

if(isGasolina) gastoViagem = consumoComb * gas;
else gastoViagem = consumoComb * etanol;

console.log(`Gasto total de combustível foi de R$${gastoViagem.toFixed(2)}`);
