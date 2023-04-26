import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0
  let cur = head
  while (cur) {
    length++
    cur = cur.next
  }
  cur = head
  const index = length - n + 1
  let prev = null
  length = 0
  while (cur) {
    length++
    if (index === length) {
      if (!prev) {
        head = head.next
        break
      }
      prev.next = cur.next
    }
    prev = cur
    cur = cur.next
  }
  return head
}

const FIRST = new ListNode(1)
const SECOND = new ListNode(2)
const THIRD = new ListNode(3)
const FOURTH = new ListNode(4)
const FIFTH = new ListNode(5)
FIRST.next = SECOND
SECOND.next = THIRD
THIRD.next = FOURTH
FOURTH.next = FIFTH
printListNode(FIRST)
printListNode(removeNthFromEnd(FIRST, 2))
FIRST.next = SECOND
SECOND.next = null
printListNode(FIRST)
printListNode(removeNthFromEnd(FIRST, 1))
FIRST.next = null
printListNode(FIRST)
printListNode(removeNthFromEnd(FIRST, 1))
