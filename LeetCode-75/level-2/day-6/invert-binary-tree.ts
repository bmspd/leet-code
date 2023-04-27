import {TreeNode} from "../../../utils/entities/TreeNode";
import {treePrinter} from "../../../utils/helpers/binary-tree/print";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right)
  if (root.right || root.left) {
    const val = root.right
    root.right = root.left
    root.left = val
  }
  return root
}

const FIRST = new TreeNode(4, new TreeNode(2), new TreeNode(7))
FIRST.left.left = new TreeNode(1)
FIRST.left.right = new TreeNode(3)
FIRST.right.left = new TreeNode(6)
FIRST.right.right = new TreeNode(9)
treePrinter(FIRST)
console.log()
invertTree(FIRST)
treePrinter(FIRST)
console.log('-----------')
const SECOND = new TreeNode(2, new TreeNode(1), new TreeNode(3))
treePrinter(SECOND)
console.log()
invertTree(SECOND)
treePrinter(SECOND)

invertTree(null)