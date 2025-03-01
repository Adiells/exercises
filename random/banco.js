let bank = {
    titular: 'Joao do feijao',
    saldo: 0,
    limite: 1000,

    depositar(valor){
        if(valor > 0){
            this.saldo += valor
            console.log (`Depósito de ${valor} realizado, saldo atual de ${this.saldo}`)
        }else{
            console.log('[ERRO!] Você não pode depositar um valor negativo, se deseja retirar, user a função `saque(valor)`')
        }
    },

    sacar(){
        let somasaques = 0
        return function(valor){
            somasaques += valor
            if(valor <= bank.saldo && somasaques <= bank.limite){
                bank.saldo -= valor
                console.log(`Saque de ${valor} realizado, saldo atual de ${bank.saldo}`)
            }else if(valor >= bank.saldo && somasaques <= bank.limite){
                console.log('Você não tem saldo suficiente para realizar o saque')
            }else if(valor <= bank.saldo && somasaques >= bank.limite){
                console.log('Você já atinjiu o limite de saque, tente novamente outra hora')
            }else{
                console.log('[ERRO] Você não tem saldo nem limite')
            }
        } 
    },
    exibirSaldo(){
        console.log(this.saldo)
    }
}
const saque = bank.sacar()
