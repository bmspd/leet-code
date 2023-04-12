import {Node} from "../../../utils/entities/Node";

function preorder(root: Node | null): number[] {
  if (!root) return []
  if (!root.children.length) return [root.val]
  else return [root.val, ...root.children.map(el => preorder(el)).flat()]
}

const ROOT = new Node(1)
const THREE = new Node(3)
THREE.children.push(new Node(5))
THREE.children.push(new Node(6))
ROOT.children.push(THREE)
ROOT.children.push(new Node(2))
ROOT.children.push(new Node(4))

console.log(preorder(ROOT), "--> [1,3,5,6,2,4]")
