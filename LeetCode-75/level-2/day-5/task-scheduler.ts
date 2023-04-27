function leastInterval(tasks: string[], n: number): number {
  const dict = {}
  let ticks = 0;
  tasks.forEach((task) => {
    if (!dict[task]) dict[task] = 1
    else dict[task] += 1
  })
  const formatted = Object.keys(dict).map(key => ({task: key, amount: dict[key], currentIdle: 0}))
  while (formatted.some((el) => el.amount)) {
    // find mostly prior action, with 0 idle and biggest amount
    const currentAction = formatted
        .filter((action) => action.amount && !action.currentIdle)
        .reduce((acc, cur) => {
          if (!acc) return cur
          else if (cur.amount > acc.amount) return cur
          else return acc
        }, undefined)
    if (currentAction) {
      currentAction.amount -= 1
      currentAction.currentIdle = n
    }
    ticks++
    formatted.forEach(action => {
      if (action.currentIdle !== 0 && action !== currentAction) action.currentIdle--
    })
  }
  return ticks
}

console.log(leastInterval(["A","A","A","B","B","B"], 2), '---> 8')
console.log(leastInterval(["A","A","A","B","B","B"], 0), '---> 6')
console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2), '---> 16')
console.log(leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], 2), '---> 12')
