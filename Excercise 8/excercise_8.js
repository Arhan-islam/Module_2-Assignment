/*--- Write a function named doubleNumbers that takes in an array of numbers and returns a
new array with each number doubled using the array map method.--- */

function doubleNumbers(arr){
    return arr.map((element)=>element*2)
}
const numbers = [2,4,6,8,9,10];
const result = doubleNumbers(numbers);
console.log (result);