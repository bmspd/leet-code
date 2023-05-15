function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  return arr.map(fn)
}

const arr = [1,2,3], fn1 = function plusone(n) { return n + 1; }
const fn2 = function plusI(n, i) { return n + i; }
const fn3 = function constant() { return 42; }

console.log(map(arr, fn1))
console.log(map(arr, fn2))
console.log(map(arr, fn3))

export {}