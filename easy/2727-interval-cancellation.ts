function cancellable(fn: Function, args: any[], t: number): Function {
  fn(...args)
  const intervalId = setInterval(() => {fn(...args)}, t)
  return () => clearInterval(intervalId)
};