
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) { 
    return [];
  }

  let reverse = false;
  let arr = [];

  for (let line of matrix) {
    if (reverse == true) {
      line = line.reverse();
      } 
      arr = arr.concat(line);
    reverse = !reverse; 
  }
  
  return arr;
}
