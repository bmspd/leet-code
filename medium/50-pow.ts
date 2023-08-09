function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -1 * n)
  if (n % 2 === 1) return x * myPow(x * x, (n - 1) / 2)
  else return myPow(x * x, n / 2)
};


console.log(myPow(2, 10))
console.log(myPow(2.1, 3))
console.log(myPow(2, -2))