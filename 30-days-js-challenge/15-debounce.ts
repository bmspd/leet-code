type F = (...p: any[]) => any

function debounce(fn: F, t: number): F {
  let tId
  return function(...args) {
    if (tId) clearTimeout(tId)
    tId = setTimeout(() => {
      return fn(...args)
    }, t)
  }
}
const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
export {}