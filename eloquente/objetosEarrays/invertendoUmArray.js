function reverseArray(array){
    let newArray = []
    for(let i of array){
        newArray.unshift(i)
    }
    return newArray
}
function reverseArrayInPlace(array){
    for(let i = 0; i < Math.floor(array.length/2); i++){
        let temp = array[i]
        if(i != Math.floor(array.length/2)){
            array[i] = array[array.length - 1 - i]
            array[array.length - i - 1] = temp
        }
    }
    return array
}
console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10]))