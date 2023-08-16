function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const res = nums1.slice(0, m).concat(nums2.slice(0, n))
  res.sort((a, b) => a -b)
  for (let i = 0; i < m + n; i++) {
    nums1[i] = res[i]
  }
};

const FIRST = [1, 2, 3]
merge(FIRST, 3, [2,5,6], 3)
console.log(FIRST)

const SECOND = [1]
merge(SECOND, 0, [1], 1)
console.log(SECOND)

const THIRD = [4,0,0,0,0,0]
merge(THIRD, 1, [1,2,3,5,6], 5)
console.log(THIRD)

