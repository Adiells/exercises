function every(array, func){
    for(let element of array){
        if(!func(element)) return false
    }
    return true
}

function some(array, func){
    for(let element of array){
        if(func(element)) return true
    }
    return false
}