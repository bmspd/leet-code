
const PredictTheWinner = (nums: number[]): boolean => {
  const findDiff = (leftIndex: number, rightIndex: number):number => {
    if (leftIndex === rightIndex) return nums[leftIndex]
    const leftSide = nums[leftIndex] - findDiff(leftIndex + 1, rightIndex)
    const rightSide = nums[rightIndex] - findDiff(leftIndex, rightIndex - 1)

    return Math.max(leftSide, rightSide)
  }
  return findDiff(0, nums.length - 1) >= 0
}

console.log(PredictTheWinner([1, 5, 2]) === false)
console.log(PredictTheWinner([1, 5, 233, 7]) === true)