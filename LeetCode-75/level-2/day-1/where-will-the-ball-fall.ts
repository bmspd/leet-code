import lodash from "lodash";
const { isEqual } = lodash

function findBall(grid: number[][]): number[] {
  const res = []
  for (let ball = 0; ball < grid[0].length; ball++) {
    let result = null
    let i = 0
    let j = ball
    while(i < grid.length && result === null) {
      if (grid[i][j] === 1 && grid[i][j + 1] !== undefined && grid[i][j + 1] !== -1) {
        j += 1
      }
      else if (grid[i][j] === -1 && grid[i][j - 1] !== undefined && grid[i][j - 1] !== 1) {
        j -= 1
      }
      else result = -1
      i++;
    }
    res.push(result ?? j)
  }
  return res
}


console.log(isEqual(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]), [1,-1,-1,-1,-1]))
console.log(isEqual(findBall([[-1]]), [-1]))
console.log(isEqual(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]), [0, 1, 2, 3, 4, -1]))