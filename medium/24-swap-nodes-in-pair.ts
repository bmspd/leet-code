import {ListNode} from "../utils/entities/ListNode";
import {printListNode} from "../utils/helpers/linked-list/index";

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let prev = head, cur = head.next, pairPtr = null
  while (cur) {
    if (prev === head) head = cur
    if (pairPtr) pairPtr.next = cur
    const tmp1 = cur.next
    cur.next = prev
    prev.next = tmp1

    pairPtr = prev
    cur = prev.next
    prev = cur
    if (cur) cur = cur.next
  }
  return head
}

const FIRST = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
printListNode(FIRST)
printListNode(swapPairs(FIRST))
const SECOND = new ListNode(1, new ListNode(2, new ListNode(3)))
printListNode(SECOND)
printListNode(swapPairs(SECOND))