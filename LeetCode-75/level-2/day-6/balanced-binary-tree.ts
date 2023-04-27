import {TreeNode} from "../../../utils/entities/TreeNode";
import {treePrinter} from "../../../utils/helpers/binary-tree/print";
const height = (root: TreeNode | null): number => {
  if (root === null) return 0
  return Math.max(height(root.left), height(root.right)) + 1
}
function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true

  let lh = height(root.left)
  let rh = height(root.right)
  if (Math.abs(lh - rh) <= 1 && isBalanced(root.left) === true && isBalanced(root.right) === true)
    return true
  return false
}

const FIRST = new TreeNode(3, new TreeNode(9), new TreeNode(20))
FIRST.right.left = new TreeNode(15)
FIRST.right.right = new TreeNode(7)

treePrinter(FIRST)
console.log(isBalanced(FIRST), '---> TRUE')

const SECOND = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(3)), new TreeNode(2))
SECOND.left.left.left = new TreeNode(4)
SECOND.left.left.right = new TreeNode(4)

treePrinter(SECOND)
console.log(isBalanced(SECOND), '---> FALSE')

