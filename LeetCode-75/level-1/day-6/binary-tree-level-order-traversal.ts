import {TreeNode} from "../../../utils/entities/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  let stack = []
  let curr = root
  let level = 0
  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr)
      curr = curr.left
      if (curr) level++
    }
    curr = stack.pop()
    level--
    console.log(curr.val, level)
    curr = curr.right
    level++
  }
}

const ROOT = new TreeNode(3)
const NINE = new TreeNode(9)
const TWENTY = new TreeNode(20)
const FIFTEEN = new TreeNode(15)
const SEVEN = new TreeNode(7)
const FOUR = new TreeNode(4)
ROOT.left = NINE
ROOT.right = TWENTY
TWENTY.left = FIFTEEN
TWENTY.right = SEVEN
NINE.left = FOUR
console.log(levelOrder(ROOT), "---> [[3],[9,20],[15,7]]")