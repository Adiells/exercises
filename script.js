function addzero(number, length){
    let string = String(number)
    while (string.length < length){
        string = '0' + string
    }
    return string
}
function animals(cows, pigs, chickens){
    console.log(`${addzero(cows, 3)} Cows`)
    console.log(`${addzero(pigs, 3)} Pigs`)
    console.log(`${addzero(chickens, 3)} Chickens`)
}
animals(7, 9, 7)