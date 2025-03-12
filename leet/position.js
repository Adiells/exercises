function position(array, alvo){
    if(array.indexOf(alvo) != -1){
        return array.indexOf(alvo)
    }else{
        array.sort((a,b) => a-b) 
        let position = 0
        for(let i = 0; i < array.length; i++){
            if(alvo > array[i]){
                position = i
            }
        }
        return position + 1
    }
}
console.log(position([1,3,5,6], 5))
console.log(position([1,3,5,6], 2))
console.log(position([1,3,5,6], 7))