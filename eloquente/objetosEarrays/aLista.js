function arrayToList(array){
    array.reverse()
    let temp = {Valor: array[0], rest: null}
    for(let i = 1; i < array.length; i++){
        temp = prepend(array[i], temp)
    }
    console.log(JSON.stringify(temp,null,2))
}
function prepend(elemento, listad){
    let lista = {Valor: elemento, rest: listad}
    return lista
}