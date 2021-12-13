//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']


let findLongestWord = (param) => {
    
    let mostLongest = param[0]
    for(i = 0; i < param.length; i++) {
        let longitdActual = param[i].length
        let longitudMasLarga = mostLongest.length
        if(longitudMasLarga < longitdActual) {
            mostLongest = param[i]
        }
    }
    return mostLongest
}

