type F = (...args: any[]) => void

function throttle(fn: F, t: number): F {
  let timeout = null
  let nextTimeToCallFn = 0
  return function (...args) {
    // if function called earlier, count delay it should be called next
    const delay = Math.max(0, nextTimeToCallFn - Date.now())
    // cancel previous functionCall
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
      // next function call from now + time
      nextTimeToCallFn = Date.now() + t
    }, delay)
  }
}

export {}

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.
