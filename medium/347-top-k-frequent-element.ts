import lodash from 'lodash'
const {isEqual} = lodash

function topKFrequent(nums: number[], k: number): number[] {
  const dict = {

  }
  for (let i = 0; i < nums.length; i++) {
    if (!dict[nums[i]]) dict[nums[i]] = 1
    else dict[nums[i]]++
  }
  return Object.entries(dict).sort((a: any, b:any) => b[1] - a[1]).slice(0, k).map(el => Number(el[0]))
}

console.log(isEqual(topKFrequent([1,1,1,2,2,3], 2), [1, 2]))
console.log(isEqual(topKFrequent([1], 1), [1]))