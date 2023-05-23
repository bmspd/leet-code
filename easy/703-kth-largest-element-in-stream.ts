class KthLargest {
  k: number
  sortedNums: number[]
  constructor(k: number, nums: number[]) {
    this.k = k
    this.sortedNums = nums.sort((a,b) => b - a)
  }

  add(val: number): number {
    this.sortedNums.push(val)
    this.sortedNums.sort((a, b) => b - a)
    return this.sortedNums[this.k - 1]
  }
}
const kthLargest = new KthLargest(3, [4, 5, 8, 2])
console.log(kthLargest.sortedNums)
console.log(kthLargest.add(3));   // return 4
console.log(kthLargest.add(5));   // return 5
console.log(kthLargest.add(10));  // return 5
console.log(kthLargest.add(9));   // return 8
console.log(kthLargest.add(4));   // return 8