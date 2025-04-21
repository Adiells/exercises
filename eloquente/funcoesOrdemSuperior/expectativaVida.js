const dados = require('./dados.json');
function average(array){
    return array.reduce((a, b) => a + b) / array.length
}
function seculo(array){
    let seculos = {}
    array.forEach(element => {
        let seculo = Math.ceil(element.died / 100)
        if(!seculos[seculo]){
            seculos[seculo] = []
        }
        seculos[seculo].push(element.died - element.born)
    });
    return seculos
}
let seculos = seculo(dados)
for(let i in seculos){
    console.log(average(seculos[i]))
}