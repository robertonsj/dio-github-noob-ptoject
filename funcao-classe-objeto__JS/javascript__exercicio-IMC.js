/**2) O IMC - Indice de Massa Corporal = peso / (altura ^ 2) */

const peso = 101.0
const altura = 1.78
const imc = peso / altura**2
let resultado

if (imc < 18.5)  resultado = 'abaixo do peso'
else if (imc >= 18.5 && imc < 25) resultado ='com peso normal'
else if (imc >= 25 && imc < 30) resultado = 'acima do peso'
else if (imc >= 30 && imc <= 40) resultado = 'obeso'
else resultado = 'com obesidade grave'

console.log(`Voce esta ${resultado}`)