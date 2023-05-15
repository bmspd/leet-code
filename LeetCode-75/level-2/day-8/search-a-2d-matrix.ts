function searchMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let col = matrix[row].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true
    if (matrix[row][col] < target) row++
    else col--
  }
  return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3), '---> TRUE')
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13), '---> FALSE')