function inlist(n, lista){
    if(lista.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function teste(){
    var reservados = []
    return function(cadeira){
        if(inlist(cadeira, reservados) || (cadeira > 100 || cadeira < 0) ){
            console.log('pode nao man')
        }else{
            reservados.push(cadeira)
            console.log(reservados)
            console.log('reservado')
        }
    }
}
let reservamento = teste()
reservamento(64)
reservamento(64)
reservamento(3)
