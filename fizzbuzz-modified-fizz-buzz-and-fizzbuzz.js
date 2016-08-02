/*
 The code below modifies the program found in fizzbuzz-fizz-and-buzz.js and uses console.log to print all the numbers from 1 to 100,
 with the following three exceptions:
 
   1. For numbers divisible by 3 (and not 5), "Fizz" is printed instead of the number.
   2. For numbers divisible by 5 (and not 3), "Buzz" is printed instead of the number.
   3. For numbers divisible by both 3 and 5, "FizzBuzz" is printed instead of the number.
*/
var number = 1;
while (number <= 100) {
  if (number % 3 == 0 && number % 5 == 0)  // Added to original code to print "FizzBuzz" for numbers divisible by both 3 and 5
    console.log("FizzBuzz");               // Added to original code to print "FizzBuzz" for numbers divisible by both 3 and 5
  else if (number % 3 == 0)
    console.log("Fizz");
  else if (number % 5 == 0)
    console.log("Buzz");
  else
    console.log(number);
  number = number + 1;
}
