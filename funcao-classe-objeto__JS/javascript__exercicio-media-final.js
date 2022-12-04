/** 1) Dado três notas de um aluno, calcular media e imprimir resultado:
 * a) media < 5 reprovado;
 * b) media entre 5 e 7 - recuperação;
 * c) media > 7 aprovado
*/

const nota1 = 5.5
const nota2 = 5.6
const nota3 = 10.0
let resultado
const media = (nota1 + nota2 + nota3) / 3

if (media < 5) resultado = 'reprovado'
else if (media >= 5 && media <= 7) resultado = 'de exame final'
else resultado = 'aprovado'

console.log(`Sua media final eh ${media.toFixed(2)}
e voce esta ${resultado}`)


