
function average(salary: number[]): number {
  const minMax = salary.reduce((acc, cur) => {
    if (cur > acc.max) acc.max = cur
    if (cur < acc.min) acc.min = cur
    return acc
  }, {
    min: salary[0],
    max: salary[0]
  })
  return salary.reduce((acc, cur) => {
    if (cur !== minMax.min && cur !== minMax.max) return acc + cur
    return acc
  }, 0) / (salary.length - 2)
}

console.log(average([4000,3000,1000,2000]), '---> 2500.000')
console.log(average([1000,2000,3000]), '---> 2000.000')