let user = {
    nome: 'Pedro games',
    email: 'pedinhogameplays@gmail.com',
    senha: 'pedrinho124',
    status: true,

    alterarSenha(newPass){
        if(this.senha != newPass){
            return this.senha = newPass
        }else{
            return 'Essa é a sua senha atual, não precisa troca-la'
        }
    },

    ativarConta(){
        if(!this.status) {
            return this.status = true 
        }else{
            return 'A conta ja está ativada'
        }
    },
    desativarConta(){
        if(this.status) {
            return this.status = false
        }else{
            return 'A conta ja está desativada'
        }
    }
}
for(let i in user){
    if(typeof user[i] != 'function'){
        console.log(`${i}: ${user[i]}`)
    }
}
user.alterarSenha('123456789')
user.desativarConta()


user.alterarSenha('123456789')
user.ativarConta()

