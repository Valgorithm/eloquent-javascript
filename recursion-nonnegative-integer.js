/*
 The code below defines a recursive function that accepts a number parameter and returns a Boolean indicating whether the number, if
 nonnegative and whole, is even (true) or odd (false) according to the following rules:
 
   • Zero is even.
   • One is odd.
   • For any other number N, its evenness is the same as N - 2.
*/

var isEven = function(number) {
  if (number == 0 || number == 1)
    return number == 0;
  else
    return isEven(number - 2);
};

console.log(isEven(Number(prompt("Enter a number:", ""))));
