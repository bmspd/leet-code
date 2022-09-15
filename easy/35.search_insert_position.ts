function searchInsert(nums: number[], target: number): number {
  if (!nums.length) return 0
  if (target <= nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length
  if (target === nums[nums.length - 1]) return nums.length - 1
  let tmpNums = nums.slice(0)
  while(true) {
    console.log(tmpNums)
    let currentIndex = Math.ceil(tmpNums.length / 2)
    const left = tmpNums[currentIndex - 1]
    const right = tmpNums[currentIndex]
    console.log(left, right)
    if (target === left) return nums.indexOf(left)
    if (target === right) return nums.indexOf(right)
    if (target < right && target > left) return nums.indexOf(right)
    if (target < left) tmpNums = tmpNums.slice(0, currentIndex)
    else tmpNums = tmpNums.slice(currentIndex, tmpNums.length)
    if (nums.length === 1) return target > nums[0] ? 1 : 0
  }
}

/*
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))*/
console.log(searchInsert([1,3,5], 3))