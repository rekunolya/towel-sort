
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  console.log('matrix: ', matrix);
  if(matrix == null || matrix.length == 0){
    return arr;
  }
  if(matrix == 0){
    return arr;
  }
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      for(let j = 0; j < matrix[i].length; j++){
        arr.push(matrix[i][j]);
      }
    } else {
      for(let j = matrix[i].length - 1; j >=0; j--){
        arr.push(matrix[i][j]);
      }
    }
  }

 // Second variant of decision

 //let n = 0;
// for(let j = 0; j < matrix.length; j++){
  // if(n == 0){
     //for( ; n < matrix[j].length; n++){
      // arr.push(matrix[j][n]);
    // }
  // } else{
    // for(n = matrix[j].length - 1; n >= 0; n--){
      // arr.push(matrix[j][n])
    // }
    // n = 0;
  // }
 //}

 //console.log('arr: ', arr)
  return arr;
}
