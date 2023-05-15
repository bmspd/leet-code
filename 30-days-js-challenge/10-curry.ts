function curry(fn: Function): Function {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(this, args)
    else return function(...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(1)(2)) // 3

export {}
