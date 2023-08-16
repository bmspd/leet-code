import lodash from "lodash";
const { isEqual } = lodash;

function maxSlidingWindow(nums: number[], k: number): number[] {
  const res = [];
  const slice = nums.slice(0, k);
  let lastMax = Math.max(...slice);
  for (let i = 0; i < nums.length - k + 1; i++) {
    if (i !== 0) {
      const shifted = slice.shift();
      const newEl = nums[i + k - 1]
      slice.push(newEl)
      if (newEl > lastMax) {
        lastMax = newEl;
      } else if (shifted === slice[0]) {

      } 
      else if (shifted === lastMax){
        lastMax = Math.max(...slice)
      }
    }
    res.push(lastMax);
  }
  return res;
}

console.log(
  isEqual(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7])
);
console.log(isEqual(maxSlidingWindow([1], 1), [1]));

console.log(isEqual(maxSlidingWindow([1, -1], 1), [1, -1]));
