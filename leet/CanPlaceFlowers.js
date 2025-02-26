function CanPlaceFlowers(flowerbed, n){
    let tamanho = flowerbed.length
    
    for(let i = 0; i < tamanho; i++){
        if(flowerbed[i] == 0){
            let leftfree = (i == 0 || flowerbed[i-1] == 0)
            let rightfree = (i == (tamanho-1) || flowerbed[i+1]== 0)

            if(leftfree && rightfree){
                flowerbed[i] = 1
                n -= 1

                if(n==0){
                    return true
                }
            }
        }
    }
    return false
}
console.log(CanPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2))
console.log(CanPlaceFlowers([1, 0, 0, 0, 1], 2))