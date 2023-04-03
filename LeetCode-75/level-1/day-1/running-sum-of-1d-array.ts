function runningSum(nums: number[]): number[] {
  return nums.reduce((acc, cur, index) => {
    if (index) acc.push(acc[acc.length - 1 ] + cur)
    else acc.push(cur)
    return acc
  }, [] as number[])
}

console.log(runningSum([1,2,3,4])) // 1, 3, 6, 10