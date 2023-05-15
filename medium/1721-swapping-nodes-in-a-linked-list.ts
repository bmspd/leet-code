import {ListNode} from "../utils/entities/ListNode";
import {printListNode} from "../utils/helpers/linked-list/index";
function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head
  let tmp = head
  let counter = k
  let first, second, length = 0
  while (tmp) {
    if (counter === 1) {
      first = tmp
    }
    tmp = tmp.next
    length++
    counter--
  }
  tmp = head
  counter = 0
  while (tmp) {
    if (length - k === counter) {
      second = tmp
      break
    }
    counter++
    tmp = tmp.next
  }
  const tempV = first.val
  first.val = second.val
  second.val = tempV
  return head
}

const FIRST = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

printListNode(FIRST)

printListNode(swapNodes(FIRST, 2))

printListNode(swapNodes(new ListNode(1), 1))

printListNode(swapNodes(new ListNode(1, new ListNode(2)), 2))


