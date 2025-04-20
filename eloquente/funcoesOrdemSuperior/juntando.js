var arrays = [[1, 2, 3], [4, 5], [6]];
let a = arrays.reduce((todos, atual) => {
    return todos.concat(atual)
}, [])
console.log(a)