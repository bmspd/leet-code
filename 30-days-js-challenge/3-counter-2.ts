type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): ReturnObj {
  let initial = init
  return {
    increment: () => ++initial,
    decrement: () => --initial,
    reset: () => {
      initial = init
      return initial
    }
  }
}

const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4

export {}
