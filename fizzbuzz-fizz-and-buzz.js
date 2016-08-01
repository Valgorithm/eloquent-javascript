/*
 The code below uses console.log to print all the numbers from 1 to 100, with the following two exceptions:
 
   1. For numbers divisible by 3, "Fizz" is printed instead of the number.
   2. For numbers divisible by 5 (and not 3), "Buzz" is printed instead of the number.
*/
var number = 1;
while (number <= 100) {
  if (number % 3 == 0)
    console.log("Fizz");
  else if (number % 5 == 0)
    console.log("Buzz");
  else
    console.log(number);
  number = number + 1;
}
