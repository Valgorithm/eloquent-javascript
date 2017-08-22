/*
 The code below defines a function that replicates the behavior of the standard function Math.min by taking two arguments and returning
 their minimum. The function is then called with two numeric arguments inputted by the user.
*/

var min = function(a, b) {
  if (a < b)
    return a;
  else
    return b;
};

console.log(min(Number(prompt("Enter a number:", "")),
                Number(prompt("Enter a number:", ""))));
