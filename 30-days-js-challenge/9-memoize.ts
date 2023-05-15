type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  let memoValues = new Map()
  return function(...args) {
    const key = args.toString()
    const memVal = memoValues.get(key)
    if (memVal !== undefined) return memVal
    const val = fn(...args)
    memoValues.set(key, val)
    return val
  }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
  })
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1
