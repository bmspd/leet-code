import lodash from 'lodash'
const {isEqual} = lodash;

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const res = []
  const isIncomingEdgeExists = new Map(Array(n).fill(0).map((_, i) => [i, false]))
  // все вершины, к которым проложен путь => надо исключить
  for (let i = 0; i < edges.length; i++) {
    const [_, to] = edges[i]
    isIncomingEdgeExists.set(to, true)
  }
  isIncomingEdgeExists.forEach((value, key) => {
    if (!value) res.push(key)
  })
  return res
}

console.log(isEqual(findSmallestSetOfVertices(6,[[0,1],[0,2],[2,5],[3,4],[4,2]]), [0,3]))
console.log(isEqual(findSmallestSetOfVertices(5, [[0,1],[2,1],[3,1],[1,4],[2,4]]), [0,2,3]))