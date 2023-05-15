function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  return arr.filter(fn)
}

const arr = [0,10,20,30], fn1 = function greaterThan10(n) { return n > 10; }
const fn2 = function firstIndex(n, i) { return i === 0; }
const fn3 = function plusOne(n) { return n + 1 }
export {}

console.log(filter(arr, fn1))
console.log(filter(arr, fn2))
console.log(filter([-2,-1,0,1,2], fn3))