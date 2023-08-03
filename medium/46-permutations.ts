function permute(nums: number[]): number[][] {
  const res = []
  const backtrack = (resArr: number[]) => {
    if (resArr.length === nums.length) {
      res.push(resArr)
      return
    } else {
      for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        if (!resArr.includes(current)) {
          backtrack([...resArr, current])
        }
      }
    }
  }
  backtrack([])
  return res
};

console.log(permute([1,2,3]))
console.log(permute([0,1]))
console.log(permute([1]))

