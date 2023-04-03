// help func
const sum = (array: number[]) => array.reduce((acc, cur) => acc + cur ,0)

function pivotIndex(nums: number[]): number {
  const pivotIndex = -1;
  let leftSum = 0;
  let rightSum = sum(nums.slice(1))
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      // do nothing, already initialized
    } else if (i === nums.length - 1) {
      // last item condition
      rightSum = 0;
      leftSum = sum(nums) - nums[i]
    } else {
      // left + left-to-index item, wasn't included in last iteration
      leftSum = leftSum + nums[i - 1]
      // right - current index, need to exclude it
      rightSum = rightSum - nums[i]
    }
    if (leftSum === rightSum) return i
  }
  return pivotIndex
}
console.log(pivotIndex([1,7,3,6,5,6])) // 3

console.log(pivotIndex([1,2,3])) // -1

console.log(pivotIndex([2,1,-1])) // 0

console.log(pivotIndex([-1,-1,-1,1,1,1])) // -1

console.log(pivotIndex([-1,-1,-1,-1,0,0])) // -1
