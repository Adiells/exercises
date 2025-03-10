function range(start, end, increment=1){
    let array = []
    if(start < end){
        for(let i = start; i <= end; i+=increment){
            array.push(i)
        }
    }else if(start > end && increment < 0){
        //adding because the exercise only asks for regression if the increment is negative
        for(let i = start; i >= end; i+=increment){
            array.push(i)
        }
    }else{
        return '[ERROR!], if start is greater than end, enter a negative increment as the third argument'
    }
    
    return array
}
function sum(array){
    let sum = 0
    for(let i of array){
        sum += i
    }
    return sum
}