import {TreeNode} from "../../entities/TreeNode";

const height = (root: TreeNode | null): number => {
  if (root === null) return 0
  return Math.max(height(root.left), height(root.right)) + 1
}

const getCol = (h: number): number => {
  if (h === 1) return 1
  return getCol(h - 1) + getCol(h - 1) + 1
}

const printTree = (M: any, root: TreeNode | null, col: number, row: number, height: number): void => {
  if (root === null) return
  M[row][col] = root.val
  printTree(M, root.left, col - Math.pow(2, height - 2), row + 1, height - 1)
  printTree(M, root.right, col + Math.pow(2, height - 2), row + 1, height - 1)
}

export const treePrinter = (root: TreeNode | null) => {
  const h = height(root)
  const col = getCol(h)
  const M = new Array(h).fill(0).map(() => new Array(col).fill(0))
  printTree(M, root, Math.floor(col / 2), 0, h)
  for (let i = 0; i < M.length; i++) {
    let row="";
    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] === 0) {
        row = row +"  ";
      } else {
        row= row +M[i][j] + " ";
      }
    }
    console.log(row);
  }
}