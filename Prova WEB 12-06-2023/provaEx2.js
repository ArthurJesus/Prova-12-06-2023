senha = prompt("Insira sua senha")
function validacao(senha){
    var letrasMaiusculas = /[A-Z]/
    var letrasMinusculas = /[a-z]/
    var numeros = /[0-9]/
    var possuiMaiuscula = 0
    var possuiMinuscula = 0
    var possuiNumero = 0

    if(senha.length < 8){
    return "ERRO: SENHA INVÁLIDA (CARACTERES INSUFICIENTES)"
    }

    for(var i=0; i<senha.length; i++){

    if(letrasMaiusculas.test(senha[i]))
    possuiMaiuscula++

    else if(letrasMinusculas.test(senha[i]))
    possuiMinuscula++

    else if(numeros.test(senha[i]))
    possuiNumero++
    }

    if (possuiMaiuscula == 0){
        return "ERRO: SENHA INVÁLIDA (NÃO POSSUI LETRA MAIUSCULA)"
    }if (possuiMinuscula == 0){
        return "ERRO: SENHA INVÁLIDA (NÃO POSSUI LETRA MINUSCULA)"
    }if (possuiNumero == 0){
        return "ERRO: SENHA INVÁLIDA (NÃO POSSUI NÚMERO)"
    }else{
        return "A SENHA É VÁLIDA"
    }
}
validacao(senha)