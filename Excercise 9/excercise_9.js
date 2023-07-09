/*--Exercise 9: 
Write a function named filterEvenNumbers that takes in an array of numbers and 
returns a new array with only the even numbers using the array filter method.--*/


function filterEvenNumbers (arr){
    return arr.filter((element) => element%2==0)
}
const numbers = [ 2,3, 4, 5 ,6 , 7, 8, 10,11]
const result = filterEvenNumbers(numbers);
console.log (result);