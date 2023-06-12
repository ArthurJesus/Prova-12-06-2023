numPrimos = []
listagem = 0
numInicial = 2
function primos(num){
    for(i = 2; i < num; i++){
        if(num % i == 0){
            return false
        }
    }
    return num > 1
}

while (listagem < 1000){
    if (primos(numInicial)){
        numPrimos.push(numInicial)
        listagem = listagem + 1
    }
    numInicial = numInicial + 1
}
console.log(numPrimos)