function reverse(x: number): number {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  const sign = x > 0 ? 1 : x < 0 ? -1 : 0;
  x = Math.abs(x)
  const reversed = Number(x.toString().split('').reverse().join('')) * sign
  if (reversed >= INT_MIN && reversed <= INT_MAX) return reversed
  return 0
}

