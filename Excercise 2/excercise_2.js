/*--Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator.
 The function should return the sum of all the numbers.---*/

 function sumNumbers(...numbers){
    return numbers.reduce((acc, cur) => acc + cur , 0)
 }
 const result = sumNumbers(10, 15,20,25,30,35,40);
 console.log (result);