import lodash from "lodash";
const { isEqual } = lodash;

function threeSum(nums: number[]): number[][] {
  const res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    while (nums[i] === nums[i - 1]) i++
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const [iV, lV, rV] = [nums[i] ,nums[left], nums[right]]
      const sum = iV + lV + rV
      if (sum === 0) {
        res.push([iV, lV, rV])
        while (nums[left] === nums[left + 1]) left++
        left++
      }
      if (sum > 0) right--
      if (sum < 0) left++
    }
  }
  return res
}

// console.log(isEqual(threeSum([0, 1, 1]), []));

// console.log(
//   isEqual(threeSum([-1, 0, 1, 2, -1, -4]), [
//     [-1, 0, 1],
//     [-1, -1, 2],
//   ])
// );

console.log(isEqual(threeSum([0, 0, 0]), [[0, 0, 0]]));
console.log(threeSum([-1,0,1,2,-1,4]))
//console.log(threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49]))