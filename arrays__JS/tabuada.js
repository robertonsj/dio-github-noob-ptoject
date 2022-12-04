
/*Imprime a tabuada correspondente ao número passado como argumento. */
function toShowTabuada(num){
    for(let i = 1; i < 10; i++) console.log(`${i} x ${num} = ${i * num}`)
}
//toShowTabuada(8)


/**Insere uma array dentro de uma lista HTML */
function listar(array) {
    let lista = "<ul>"
    for(x of array) lista += "<li>" + x + "</li>"
    lista += "</ul>"
    return lista
}
function exibirLista(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.querySelector('#demo').innerHTML = listar(fruits);
}


/**Percorer uma lista e exibir quais são pares e quais são ímpares */
function toShowEvenAndOdd(lista){
    toShowEven(lista)
    toShowOdd(lista)
}
function toShowEven(lista){
    let num = ""
    for(x of lista){
        if(x%2 === 0) num += x + " - "
    }
    console.log(`${num} are Even`)
}
function toShowOdd(lista){
    let num = ""
    for(x of lista){
        if(x%2 !== 0) num += x + " - "
    }
    console.log(`${num} are Odd`)
}

const num = [5, 7, 12, 18, 3, 26]
toShowEvenAndOdd(num)


