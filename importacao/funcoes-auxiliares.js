function gets(){
    return 10
}
function prints(message){
    console.log(message)
}

function receivesNumbers(num){
    let maior = 0;
    for(x of num) if(x > maior) maior = x
    return maior;
}

module.exports = {receivesNumbers, prints}