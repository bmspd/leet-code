function minOperations(nums: number[]): number {
  const amountList = nums.reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++
    else acc[cur] = 1
    return acc
  }, {})
  let operations = 0;
  for (const prop in amountList) {
    const amount = amountList[prop]

    if (amount % 3 === 0) operations += amount / 3
    else if (amount >=7 && (amount - 4) % 3 === 0) operations += (amount - 4)/3 + 2
    else if (amount >= 5 && (amount - 2) % 3 === 0) operations += (amount - 2)/3 + 1
    else if (amount % 2 === 0) operations += amount / 2
    else return -1
  }
  return operations
};

console.log(minOperations([2,3,3,2,2,4,2,3,4]) === 4)
console.log(minOperations([2,1,2,2,3,3]) === -1)
console.log(minOperations([14,12,14,14,12,14,14,12,12,12,12,14,14,12,14,14,14,12,12]) === 7)
console.log(minOperations([19,19,19,19,19,19,19,19,19,19,19,19,19]) === 5)
console.log(minOperations([13,7,13,7,13,7,13,13,7]) === 4)