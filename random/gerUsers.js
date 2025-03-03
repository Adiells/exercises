function idTrue(id){
    for(let i in users){
        if(users[i].id == id){
            return true
        }
    }
    return false
}
function adicionarUsuario(){
    let id = 1
    return function(nome, email){
        let user = {
            id: id++,
            'nome': nome,
            'email': email,
            ativo: true
        }
        users.push(user)
        console.log(`O id do usuário é ${id-1}`)
    }
}
function removerUsuario(id){
    let eMail = ''
    if(idTrue(id)){
        for(let i = 0; i < users.length; i++){
            if(users[i].id == id){
                eMail = users[i].email
                users.splice(i, 1)
                return `Usuário de email ${eMail} foi removido com sucesso!`
            }
        }
    }
    return 'Esse id não existe'
}
function desativarUsuario(id){
    let eMail = ''
    if(idTrue(id)){
        for(let i = 0; i < users.length; i++){
            if(users[i].id == id){
                eMail = users[i].email
                users[i].ativo = false
                return `Usuário de email ${eMail} foi desativado com sucesso!`
            }
        }
    }
    return 'Esse id não existe'
}
function listarUsuarios(){
    for(let i in users){
        if(users[i].ativo){
            console.log(`${Number(i)+1}-- Nome: ${users[i]['nome']}\n---  Email: ${users[i]['email']}`)
        }
    }
}

let users = []
const add = adicionarUsuario()
