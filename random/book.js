function emprestar(obj){
    if(obj.disponivel){
        obj.disponivel = false
        return 'O livro foi emprestado'
    }else{
        return 'O livro já está emprestado'
    }
}
function devolver(obj){
    if(!obj.disponivel){
        obj.disponivel = true
        return 'O livro está disponível novamente!'
    }else{
        return 'O livro já está disponível.'
    }
}
function informacoes(obj){
    let inf = ''
    for(let key in obj){
        inf += `${key}: ${obj[key]} \n`
    }
    return inf
}

let livro = {
    título: 'O hobbit',
    autor: 'J.R.R Tolkien',
    ano: 1884,
    genero: 'fantasia',
    disponivel: true
}
console.log(emprestar(livro))
console.log(devolver(livro))
console.log(informacoes(livro))