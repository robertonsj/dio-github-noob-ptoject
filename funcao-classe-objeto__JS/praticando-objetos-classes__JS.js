class Carro {
    marca;
    cor;
    kmPorLitro; /**Quantos quilômetros o carro faz com 1 litro de combustível. */

    constructor(marca, cor, kmPorLitro){
        this.marca = marca
        this.cor = cor
        this.kmPorLitro = kmPorLitro
    }

    /**o método retornará a quantia gasta em combustível, de acordo com a distância percorrida
     * e o preço do litro do combustível*/
    gastoPercurso(percurso, precoLitro){
        const qtdLitroPercurso = percurso / this.kmPorLitro
        const gasto = qtdLitroPercurso * precoLitro
        console.log(`Em ${percurso}km foram gastos R$${gasto.toFixed(2)} em combustível.`)
    }

}
const scobydooCar = new Carro('Van', 'azul', 12)
scobydooCar.gastoPercurso(300, 6.5)

console.log(`The scoobydoo car is a ${scobydooCar.marca}.`)
