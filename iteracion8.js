//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
//Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
let repeatCounter = (words) => {
  let wordsRepeat = {}
  for(i = 0; i < words.length; i++) {
    if(wordsRepeat[words[i]] === undefined) {
      wordsRepeat[words[i]] = 0
    } 
    else {
      wordsRepeat[words[i]] += 1
    }
  }
  return wordsRepeat
}

console.log(repeatCounter(counterWords))



