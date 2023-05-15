import lodash from "lodash";
const { isEqual } = lodash

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const first = new Set<number>(), second = new Set<number>()
  const length = nums1.length > nums2.length ? nums1.length : nums2.length
  for (let i = 0; i < length; i++) {
    if (nums1[i] !== undefined && !nums2.includes(nums1[i])) first.add(nums1[i])
    if (nums2[i] !== undefined && !nums1.includes(nums2[i])) second.add(nums2[i])
  }
  return [Array.from(first) , Array.from(second)]
}
const first = {
  arr: [[1, 2, 3], [2, 4, 6]] as [number[], number[]],
  ans1: [[1, 3], [4, 6]],
}
console.log(isEqual(findDifference(...first.arr) ,first.ans1))
const second = {
  arr: [[1,2,3,3], [1,1,2,2]] as [number[], number[]],
  ans1: [[3], []],
}
console.log(isEqual(findDifference(...second.arr), second.ans1))