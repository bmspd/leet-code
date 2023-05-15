import {TreeNode} from "../../../utils/entities/TreeNode";
import {treePrinter} from "../../../utils/helpers/binary-tree/print";

const height = (root: TreeNode | null): number => {
  if (root === null) return 0
  return Math.max(height(root.left), height(root.right)) + 1
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0

  let max = 0

  const dfs = (node: TreeNode | null): number => {
    if (node === null) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    max = Math.max(left + right, max)
    return Math.max(left, right) + 1
  }
  dfs(root)
  return max
}

const FIRST = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))

treePrinter(FIRST)

console.log(diameterOfBinaryTree(FIRST), '---> 3')

const SECOND = new TreeNode(1, new TreeNode(2))

treePrinter(SECOND)

console.log(diameterOfBinaryTree(SECOND), '---> 1')