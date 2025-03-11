function arrayToList(array){
    let temp = {Valor: array[array.length-1], rest: null}
    for(let i = (array.length - 2); i > -1; i--){
        temp = prepend(array[i], temp)
    }
    console.log(JSON.stringify(temp,null,2))
}
function prepend(elemento, listad){
    let lista = {Valor: elemento, rest: listad}
    return lista
}