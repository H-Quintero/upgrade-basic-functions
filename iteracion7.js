const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
let finderName = (param) => {
 debugger
  let name = prompt('¿Como te llamas?')
  let namePos 
  for(i = 0; i < param.length; i++) {
    if(name == param[i]) {
      namePos = nameFinder.indexOf(param[i])
      return [true, namePos]
      }
    }
  if(name != param[i]) {
    return [false]
  }
  }
let solucion = finderName(nameFinder)
console.log(solucion)