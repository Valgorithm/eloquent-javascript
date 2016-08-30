/*
 The code below creates a string that represents a chessboard (8×8 grid), using either a space or a "#" character at each position and
 newline characters to separate lines.
*/

var stringA = " # # # #", stringB = "# # # # ";
var string = "";
var rank = 1;

while (rank <= 8) {
  if (rank == 1)
    string = string + stringA;
  else if (rank % 2 == 0)
    string = string + "\n" + stringB;
  else
    string = string + "\n" + stringA;
  rank = rank + 1;
}
console.log(string);
