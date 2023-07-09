/*----Exercise 6: 


Write a function named getLargestNumber that takes in two numbers as parameters.
The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).--*/
function getLargestNumber(a, b) {
    return a > b && a || b;
  }
  

  const num1 = 10;
  const num2 = 5;
  const largestNumber = getLargestNumber(num1, num2);
  
  console.log(largestNumber); 