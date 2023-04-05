import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";

function detectCycle(head: ListNode | null): ListNode | null {
  const map = new Map()
  let current = head
  let position = 0;
  while (current) {
    map.set(current, position)
    console.log(map.get(current))
    current = current.next
    if (map.get(current) !== undefined) break;
    position++;
  }
  return current
}

// make firstNode cycle
const firstNode = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(4))))
let current = firstNode
while (current.next) {
  current = current.next
}

current.next = firstNode

console.log(detectCycle(firstNode).val)

