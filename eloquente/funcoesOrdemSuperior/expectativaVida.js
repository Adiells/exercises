const dados = require('./dados.json');
function average(array){
    return array.reduce((a, b) => a + b) / array.length
}
function seculo(array){
    let seculos = {}
    for(let i in array){
        let seculo = Math.ceil(array[i].died / 100)
        if(!seculos[seculo]){
            seculos[seculo] = []
        }
        seculos[seculo].push(array[i].died - array[i].born)
    }
    return seculos
}
let seculos = seculo(dados)
for(let i in seculos){
    console.log(average(seculos[i]))
}