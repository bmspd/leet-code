import {TreeNode} from "../../../utils/entities/TreeNode";
import {treePrinter} from "../../../utils/helpers/binary-tree/print";

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0

  let counter = 0

  const dfs = (node: TreeNode | null): number => {
    if (node === null) return 0

    move(node, targetSum)

    const left = dfs(node.left)
    const right = dfs(node.right)

  }
  const move = (node: TreeNode | null, target: number) => {
    if (node === null) return 0
    if (node.val === target) counter++
    move(node.left, target - node.val)
    move(node.right, target - node.val)
  }
  dfs(root)
  return counter
}

const FIRST = new TreeNode(10, new TreeNode(5), new TreeNode(-3, null, new TreeNode(11)))
FIRST.left.left = new TreeNode(3, new TreeNode(3), new TreeNode(-2))
FIRST.left.right = new TreeNode(2, null, new TreeNode(1))

treePrinter(FIRST)
console.log(pathSum(FIRST, 8), '---> 3')
console.log('-------------')

const SECOND = new TreeNode(5, new TreeNode(4), new TreeNode(8))
SECOND.left.left = new TreeNode(11, new TreeNode(7), new TreeNode(2))
SECOND.right.right = new TreeNode(4, new TreeNode(5), new TreeNode(1))
SECOND.right.left = new TreeNode(13)

treePrinter(SECOND)
console.log(pathSum(SECOND, 22), '---> 3')