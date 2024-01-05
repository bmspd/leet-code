type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    if (arr.length === 0) return []
    if (size >= arr.length) return [arr]
    let res = []
    let peace = []
    for (let i = 0; i < arr.length; i++) {
      peace.push(arr[i])
      if ((i + 1) % size === 0) {
        res.push(peace)
        peace = []
      }
    }
    if (peace.length) res.push(peace)
    return res
};

console.log(chunk([1,2,3,4,5] as any, 1))
console.log(chunk([1,9,6,3,2] as any, 3))
console.log(chunk([8,5,3,2,6] as any, 6))
console.log(chunk([], 1))