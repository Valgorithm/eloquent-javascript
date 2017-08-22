/*
 The code below modifies the function defined in minimum-user-inputted-arguments.js—which replicates the behavior of Math.min when given
 two arguments—by returning a string that states which argument is the minimum of the two. The function is then called with two
 pseudorandomly generated arguments with integer values between 0 and 100.
*/

var min = function(a, b) {
  if (a < b)
    return "The minimum of " + a + " and " + b + " is " + a + ".";
  else
    return "The minimum of " + a + " and " + b + " is " + b + ".";
};

console.log(min(Math.round(Math.random() * 100),
                Math.round(Math.random() * 100)));
