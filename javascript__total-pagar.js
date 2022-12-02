/** 3) Total a pagar por um produto, considerando a forma de pagamento. 
 * a) à vista débito, 10% de desconto;
 * b) à vista cédula ou pix, 15% de desconto;
 * c) 2x, preço normal;
 * d) preço > 2x, 10% de juros;
 */

const valorProd = 0 /**quanto custa */
const formaPgmt = "debito" /**forma de pagamento */
let valorPagar;

switch(formaPgmt){
    case "debito": 
        valorPagar = valorProd - valorProd * 0.1
        break;
    case "aVista":
    case "pix":
        valorPagar = valorProd - valorProd * 0.15
        break;
    case "2x":
        valorPagar = valorProd;
        break;
    case "mais2x":
        valorPagar = valorProd + valorProd * 0.1
        break;
    default:
        valorPagar = 'No value found'

}
console.log(`Total a pagar eh R$${valorPagar.toFixed(2)}`)

}