let urnaEletronica = {
    candidatos: ['Ze bofada', 'Lagarticha', 'Tripa seca'],
    votos:{
        'Ze bofada': 0,
        'Lagarticha': 0,
        'Tripa seca': 0
    },

    registrarVoto(candidato){
        if(candidato in this.votos){
            this.votos[candidato] ++
            console.log(`Voto: ${candidato} \nSituação: Voto registrado \n`)
        }else{
            console.log('Esse candidato não existe')
        }
    },

    mostrarResultado(){
        let nuMaior = 0
        let noMaior = []
        let mensagem = ''
        for(let voto in this.votos){
            if(this.votos[voto] > nuMaior){
                nuMaior = this.votos[voto]
                noMaior = [voto] 
            }else if(this.votos[voto] === nuMaior){
                noMaior.push(voto) 
            }
        }
        if(noMaior.length > 1){
            mensagem = `Houve um empate de ${nuMaior} votos entre ${noMaior.join(' e ')}`
        }else{
            mensagem = `O candidato mais votado foi ${noMaior[0]} com ${nuMaior} votos`
        }     
        console.log(mensagem)
    },
    validarNome(nome){
        if(this.candidatos.indexOf(nome) != -1) console.log(true)
        else console.log(false)
    }
}
console.log('Registre seu voto em um dos candidatos a seguir')
console.log(urnaEletronica.candidatos.join(' -- '),'\n')