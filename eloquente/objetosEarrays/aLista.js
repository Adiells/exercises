function arrayToList(array){
    let temp = {Valor: array[array.length-1], rest: null}
    for(let i = (array.length - 2); i > -1; i--){
        temp = prepend(array[i], temp)
    }
    return temp
}
function listToArray(list){
    let array = []
    for(let i = list; i; i = i.rest){
        array.push(i.Valor)

    }
    return array
}
function nth(list, number){
    let count = 1
    let valor = 0
    for(let i = list; count <= number; i = i.rest){
        if(i != null){
            valor = i.Valor
            count++
        }else{
            return undefined
        }
    }
    return valor
}
function prepend(elemento, listad){
    let lista = {Valor: elemento, rest: listad}
    return lista
}