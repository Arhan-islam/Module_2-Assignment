/*--
Write a function named sumArray that takes in an array of numbers and returns the sum of 
all the numbers using the array reduce method.-*/
const numbers = [1, 2, 3, 4, 5];

function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
  }
  
  const sum = sumArray(numbers);
  
  console.log(sum);