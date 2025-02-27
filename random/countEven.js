function countEven(range){
    let count = ''
    for(i of range){
        if(i % 2 == 0){
            count++
        }
    }
    console.log(count)
}
countEven([2, 4, 5, 3, 4, 8, 6, 9])