const binarySearch = (arr: number[], left: number, right: number, searchValue: number): number => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === searchValue) return mid
    else if (arr[mid] < searchValue) left = mid + 1
    else right = mid - 1
  }
  return -1
}

function search(nums: number[], target: number): number {
  const length = nums.length
  let left = 0, right = length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[length - 1]) left = mid + 1
    else right = mid - 1
  }

  const answer = binarySearch(nums, 0, left - 1, target)
  if (answer !== -1) return answer

  return binarySearch(nums, left, length - 1, target)
};

console.log(search([4,5,6,7,0,1,2], 0))

console.log(search([4,5,6,7,0,1,2], 3))

console.log(search([1], 0))