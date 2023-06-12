function quadradoPerfeito(num){
    var raiz = Math.sqrt(num)
    if(Number.isInteger(raiz)){
        return "É um quadrado perfeito"
    }else{
        return false
    }
}