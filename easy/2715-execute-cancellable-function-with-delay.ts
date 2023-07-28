function cancellable(fn: Function, args: any[], t: number): Function {
  const timeoutId = setTimeout(() => {
    fn(...args)
  }, t)
  return () => clearTimeout(timeoutId)
};

