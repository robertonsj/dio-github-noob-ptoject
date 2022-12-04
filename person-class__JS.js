class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    toCalculateIMC(){
        const imc = this.peso / Math.pow(this.altura,2)
        return imc
    }

    imcOutCome(){ /**Resultado do IMC */
        const imc = this.toCalculateIMC()
        let result;
        if (imc < 18.5)  result = 'abaixo do peso'
        else if (imc >= 18.5 && imc < 25) result ='normal weight'
        else if (imc >= 25 && imc < 30) result = 'overweight'
        else if (imc >= 30 && imc <= 40) result = 'obese'
        else result = 'with serious obese'
        console.log(`The ${this.nome}'s imc is ${imc.toFixed(2)}.`)
        console.log(`${this.nome} is ${result}`)
    }

}
const person01 = new Pessoa('roberto', 78, 1.78)
person01.imcOutCome()
