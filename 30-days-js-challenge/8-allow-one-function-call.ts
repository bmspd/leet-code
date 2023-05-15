function once<T extends (...args: any[]) => any>(fn: T):
    ((...args: Parameters<T>) => ReturnType<T> | undefined) {
  let firstRun = true
  return function (...args) {
    if (!firstRun) return undefined
    firstRun = false
    return fn(...args)
  }
}

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3)) // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

export {}
