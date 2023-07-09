/*---Write a function named sortNumbers that takes in an array of numbers and
 returns a new array with the numbers sorted in ascending order using the array sort method.--*/

 function sortNumbers (numbers){
    return numbers.sort((a,b) => a-b);
 }
 const num = [2,9,1,3,4,5,10];
 const result = sortNumbers(num);
 console.log(result);