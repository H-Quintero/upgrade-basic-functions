// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
let average = (param) => {
  let suma = 0
  for(i = 0; i < param.length; i++) {
    suma += param[i]
  }
  let promedio = suma / param.length
  return promedio
}
let solucion = average(numbers)
console.log('El promedio del numbers es: ' + solucion)