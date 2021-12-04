const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let suma = 0
  for(i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      suma += param[i]
    } else {
      suma += param[i].length
    }
  }
  return suma
}
let solucion = averageWord(mixedElements)
console.log('La suma de los numeros y la longitud de los strings es: ' + solucion)