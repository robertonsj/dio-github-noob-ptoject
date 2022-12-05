
const lista = [5, 10, 27, 39, 46, 25]
let i = 0
function gets(){
    return lista[i++]
}

function prints(message){
    console.log(message)
}

function recebeLista(lista){
    let maior = 0;
    for(x of lista) {
        if(x > maior) maior = x
    }
    return maior;
}

module.exports = {recebeLista, prints, gets}