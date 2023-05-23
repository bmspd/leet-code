function areDeeplyEqual(o1: any, o2: any): boolean {
  let res = []
  if (Array.isArray(o1) || Array.isArray(o2)) {
    if (!Array.isArray(o1) || !Array.isArray(o2) || o1.length !== o2.length) return false
    res = o1.map((el, index) => areDeeplyEqual(el, o2[index]))
  } else if (typeof o1 === 'object' && o1 !== null
            && typeof o2 === 'object' && o2 !== null){
    if (Object.keys(o1).length !== Object.keys(o2).length) return false
    for (const key in o1) {
      res.push(areDeeplyEqual(o1[key], o2[key]))
    }
  } else {
    return Object.is(o1, o2)
  }
  return res.every((el) => el === true)
}

const o1_1 = {"x":1,"y":2}, o1_2 = {"x":1,"y":2}

console.log(areDeeplyEqual(o1_1, o1_2))

const o2_1 = {
  x: {
    a: ['1', '2'],
    b: {
      c: null
    }
  }
}
const o2_2 = {
  x: {
    a: ['1', 2],
    b: {
      c: null
    }
  }
}
console.log(areDeeplyEqual(o2_1, o2_2))