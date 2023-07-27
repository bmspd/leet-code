// https://leetcode.com/problems/maximum-running-time-of-n-computers/
// time limit exceed
function myMaxRunTime(n: number, batteries: number[]): number {
  batteries.sort((a, b) => b - a);
  let parallelTicks = 0;
  while (batteries.length >= n) {
    for (let i = 0; i < n; i++) {
      batteries[i]--;
    }
    batteries = batteries.filter(el => el)
    batteries.sort((a, b) => b - a);
    parallelTicks++;
  }
  return parallelTicks;
}

function maxRunTime(n: number, batteries: number[]): number {
  batteries.sort((a, b) => a - b);
  let extra = 0
  // getting all batteries extra charges, except maximum n batteries
  for (let i = 0; i < batteries.length - n; i++) extra += batteries[i]
  const live = batteries.slice(batteries.length - n)
  console.log(live)
  for (let i = 0; i < n- 1; i++) {
    if (extra < (i + 1) * (live[i + 1] - live[i])) {
      return live[i] + Math.floor (extra / (i + 1))
    }
    extra -= (i + 1) * (live[i + 1] - live[i])
  }
  return live[n - 1] + Math.floor(extra / n)
}

const first = maxRunTime(2, [3, 3, 3]);
console.log(first === 4, `GOT: ${first}; ANS: 4`);
const second = maxRunTime(2, [1, 1, 1, 1]);
console.log(second === 2, `GOT: ${second}, ANS: 2`);
const third = maxRunTime(3, [10, 10, 3, 5]);
console.log(third === 8, `GOT: ${third}, ANS: 8`);
const fourth = maxRunTime(3, [10, 10, 6, 9, 3]);
console.log(fourth === 12, `GOT: ${fourth}, ANS: 12`);

console.log(
  maxRunTime(
    12,
    [11, 89, 16, 32, 70, 67, 35, 35, 31, 24, 41, 29, 6, 53, 78, 83]
  )
);
