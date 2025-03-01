function addHobby(obj, hobby){
    if(obj.hobbies.indexOf(hobby) == -1){
        obj.hobbies.push(hobby)
        return obj
    }else{
        return 'Esse hobbie ja está na lista, não precisa adicionar novamente'
    }
    
}
function adult(obj){
    return obj.idade >= 18
}
function address(obj){
    let entry = obj.endereco
    let adrs = ''
    for(let i in entry){
        if(i != 'cidade') adrs += `${entry[i]}, `
        else adrs += entry[i]
    }
    return adrs
}
let pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua A",
        bairro: "Centro",
        cidade: "Joao Pessoa"
    },
    hobbies: ["futebol", "música", "leitura"]
};