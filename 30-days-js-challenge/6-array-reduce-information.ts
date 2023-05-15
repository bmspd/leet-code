type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce(fn, init)
}

const nums = [1,2,3,4], fn1 = function sum(accum, curr) { return accum + curr; }
const fn2 = function sum(accum, curr) { return accum + curr * curr; }
const fn3 = function sum(accum, curr) { return 0; }

console.log(reduce(nums, fn1, 0))
console.log(reduce(nums, fn2, 100))
console.log(reduce([], fn3, 25))

export {}