function countBs(string){
    let count = 0
    let length = string.length
    for(let i = 0; length > i; i++){ 
        if(string.charAt(i) == 'B'){
            count++
        }
    }
    return count
}
function countChar(string, letter){
    let count = 0
    let length = string.length
    for(let i = 0; length > i; i++){ 
        if(string.charAt(i) == letter){
            count++
        }
    }
    return count 
}
console.log(countBs('BBC'))
console.log(countChar('kakkerlak', 'k'))

//Eu não entendi o nome do exercicio, acho que erro na tradução hhahahahaha