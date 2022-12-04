// const pessoa = {
//     nome: 'roberto',
//     idade: 25,
//     descrever: function () {
//         console.log(`Hello, everyone. I'm ${this.nome} and
//         I'm ${this.idade} years old`)
//     }
// }
// pessoa.informar()

class Pessoa {
    nome;
    idade;
    anoNasc;

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.anoNasc = 2022 - idade
    }

    descrever() {
        console.log(`The candidate is ${this.nome} and
        he is ${this.idade} years old.`)
    }
}
const aluno1 = new Pessoa('roberto', 25)
const aluno2 = new Pessoa('jose', 15)