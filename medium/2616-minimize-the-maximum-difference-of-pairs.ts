const countPairs =(nums: number[], diff: number) => {
  let i = 0, count = 0
  while(i < nums.length - 1) {
    if (nums[i + 1] - nums[i] <= diff) {
      count++;
      i++
    }
    i++
  }
  return count
}
function minimizeMax(nums: number[], p: number): number {
  nums.sort((a, b) => a- b)
  let left = 0, right = nums[nums.length - 1] - nums[0]
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (countPairs(nums, mid) >= p) {
      right = mid
    }
    else {
      left = mid + 1
    }
  }
  return left
}

console.log(minimizeMax([10, 1, 2, 7, 1, 3], 2) === 1);
console.log(minimizeMax([4, 2, 1, 2], 1) === 0);
console.log(minimizeMax([8,9,1,5,4,3,6,4,3,7], 4) === 1)
console.log(minimizeMax([1,2], 1) === 1)
console.log(minimizeMax([1,1,0,3], 2) === 2)