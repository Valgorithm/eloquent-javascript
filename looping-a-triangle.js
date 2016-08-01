/*
 The code below uses a loop that makes seven calls to console.log to output the following triangle:
 
   #
   ##
   ###
   ####
   #####
   ######
   #######
*/
var row = "#";
while (row.length <= 7) {
  console.log(row);
  row = row + "#";
}
