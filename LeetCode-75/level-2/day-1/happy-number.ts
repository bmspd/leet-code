
function isHappy(n: number): boolean {
  const numbers = []
  while (n !== 1) {
    if (numbers.includes(n)) return false
    const digits = String(n).split('').map(Number)
    numbers.push(n)
    n = digits.reduce((acc, cur) => {
      return acc + cur * cur
    }, 0)
  }
  return true
};

console.log(isHappy(19), '---> True')

console.log(isHappy(2), '---> False')