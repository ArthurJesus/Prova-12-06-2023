function fatorial(num){
    if (num < 0){
        return false
    }else if(num == 0){
        return 1
    }else{
        return (num * fatorial(num - 1))
    }
}
contagem = 0
num = 1
while(contagem < 10){
    var numFatorado = fatorial(num)
    num = num+1
    contagem = contagem+1
    console.log(numFatorado)
}