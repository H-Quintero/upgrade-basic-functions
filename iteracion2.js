const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']


let findLongestWord = (param) => {
    debugger
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

