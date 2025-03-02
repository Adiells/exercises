function alfabeto(K, N, k, n){
    let count = []
    let KK = k.split('')
    let NN = n.split('')
    for(let i of KK){
        for(let j of NN){
            if(i === j){
                count.push(1)
            }
        }
    }
    if(N === count.length){
        return 'S'
    }
    else{
        return 'N'
    }
}
console.log(alfabeto(11, 7, '0123+-!ABCD', 'OBI!OBI'))