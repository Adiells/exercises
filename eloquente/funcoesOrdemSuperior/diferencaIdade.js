var ancestry = require('./dados.json');

let byname = {}
ancestry.forEach(person => {
    byname[person.name] = person
});

function hasKnowMother(array){
    return array.map(person =>{
        if(person.mother == null) {
            return null 
        }else{
            let idadeMae = 0
            if(byname[person.mother]){
                idadeMae = person.born - byname[person.mother].born
                return idadeMae
            }
        }
    }).filter(elemento => elemento != null && elemento != undefined)
}
function average(array){
    return array.reduce((a, b) =>  a + b) / array.length 
}

console.log(average(hasKnowMother(ancestry)))