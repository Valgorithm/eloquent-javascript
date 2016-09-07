/*
 The code below modifies the program found in chessboard-8×8.js by defining a variable called "size" in order to output a string that
 represents a square checkerboard of any given width and height, using either a space or a "#" character at each position and newline
 characters to separate lines.
*/

var stringA = "", stringB = "";
var string = "";
var rank = 1;
var size = Number(prompt("Enter the size of the square checkerboard:", ""));

while (stringA.length < size) {   // Added to original code to create ranks of the given width
  if (stringA.length % 2 == 0) {
      stringA = stringA + " ";
      stringB = stringB + "#";
  } else {
      stringA = stringA + "#";
      stringB = stringB + " ";
  }
}

while (rank <= size) {
  if (rank == 1)
    string = string + stringA;
  else if (rank % 2 == 0)
    string = string + "\n" + stringB;
  else
    string = string + "\n" + stringA;
  rank = rank + 1;
}
console.log(string);
