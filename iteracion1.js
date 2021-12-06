//opción 1
function sum (numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo)

}
let solution = (9, 32)
console.log(solution)

//opción 2
let sum1 = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        console.log(numberOne)
    } else console.log(numberTwo)
}
sum1(5, 9)