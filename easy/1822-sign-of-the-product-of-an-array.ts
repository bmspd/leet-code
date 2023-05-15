function arraySign(nums: number[]): number {
  return nums.reduce((acc, cur) => {
    if (!cur || !acc) return 0
    if (cur < 0) return acc * -1
    return acc
  }, 1)
}

console.log(arraySign([-1,-2,-3,-4,3,2,1]) === 1)
console.log(arraySign([1,5,0,2,-3]) === 0)
console.log(arraySign([-1,1,-1,1,-1]) === -1)