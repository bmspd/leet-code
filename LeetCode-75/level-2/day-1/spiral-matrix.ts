function spiralOrder(matrix: number[][]): number[] {
  const passed = {}
  const res = []
  const matrixLength = matrix.flat().length
  let i = 0;
  let j = 0;
  if (matrix.length === 1) return matrix.flat()
  if (matrix[0].length === 1) return matrix.flat()
  while(true) {
    // move right
    while (matrix[i]?.[j + 1] !== undefined && !passed[`${i}.${j+1}`]) {
      passed[`${i}.${j}`] = true
      res.push(matrix[i][j])
      j += 1
    }
    // move down
    while (matrix[i + 1]?.[j] !== undefined && !passed[`${i+1}.${j}`]) {
      passed[`${i}.${j}`] = true
      res.push(matrix[i][j])
      i += 1
    }
    // move left
    while (matrix[i]?.[j - 1] !== undefined && !passed[`${i}.${j-1}`]) {
      passed[`${i}.${j}`] = true
      res.push(matrix[i][j])
      j -= 1
    }
    // move up
    while (matrix[i - 1]?.[j] !== undefined && !passed[`${i-1}.${j}`]) {
      passed[`${i}.${j}`] = true
      res.push(matrix[i][j])
      i -= 1
    }
    if (matrixLength - 1 === res.length) {
      res.push(matrix[i][j])
      break
    }
  }
  return res
}
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), '---> [1,2,3,6,9,8,7,4,5]')
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), '---> [1,2,3,4,8,12,11,10,9,5,6,7]')
console.log(spiralOrder([[1]]), '--> [1]')
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]), '---> [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]')
console.log(spiralOrder([[1,2],[3,4]]), '--> [1,2,4,3]')