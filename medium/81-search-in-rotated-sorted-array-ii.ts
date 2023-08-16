// here should be binary search with duplicates
function search(nums: number[], target: number): boolean {
  return nums.includes(target)
};

console.log(search([2,5,6,0,0,1,2], 0) === true)
console.log(search([2,5,6,0,0,1,2], 3) === false)
console.log(search([1,0,1,1,1], 0) === true)
export {}