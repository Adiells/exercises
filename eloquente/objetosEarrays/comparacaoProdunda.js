//esse eu não consegui :(
//algum dia eu voltarei aqui para tentar novamente
let c1 = []
let c2 = []
let count = 0
function deepEqual(v1, v2){
    let c = ''
    if(typeof v1 == 'object' && v1 != null && 
        typeof v2 == 'object' && v2 != null){
            for(let i in v1){
                if(typeof v1[i] == 'object' && v1[i] != null || typeof v2[i] == 'object' && v2[i] != null){
                    return deepEqual(v1[i], v2[i])
                }else{
                    c1.push(v1[i], i)
                    c2.push(v2[i], i)
                    for(let a = 0; a < c1.length; a++){
                        if(c1[a] === c2[a]){
                            count++
                            //console.log(count)
                            console.log(c1.length)
                        }
                    }
                }
            }
        }
    if(count === c1.length){
        return true
    }
   else{
        return false
    }
}
