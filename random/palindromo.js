function palindreme(stringo){
    let novaPalavra = stringo.toLowerCase().replace(/\s+/g, '')
    return novaPalavra === novaPalavra.split('').reverse().join('')
}
console.log(palindreme('socorram me subi no onibus em marrocos'))