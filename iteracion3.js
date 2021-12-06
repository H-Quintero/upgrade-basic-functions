const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumAll = (param) => {
  let suma = 0
  for (i = 0; i < param.length; i++) {
    suma += param[i]
  }
  return suma
}

let solucion = sumAll(numbers)
console.log("La suma total es: " + solucion)
