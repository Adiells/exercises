function letras(number){
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let retorno = ''
    for(let i = 0; i < number; i++){
        retorno += alfabeto[i]
        retorno += ' '
    }
    return retorno
}
console.log(letras(8))