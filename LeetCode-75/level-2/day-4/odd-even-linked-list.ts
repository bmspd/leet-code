import {ListNode} from "../../../utils/entities/ListNode"
import {printListNode} from "../../../utils/helpers/linked-list/index";

function oddEvenList(head: ListNode | null): ListNode | null {
  let odd = null, even = null, oddHead = null, evenHead = null, lastOdd = null
  let isOdd = true
  let cur = head
  while (cur) {
    if (isOdd) {
      if (!odd) {
        odd = new ListNode(cur.val)
        lastOdd = odd
      }
      else {
        odd.next = new ListNode(cur.val)
        lastOdd = odd.next
        odd = odd.next
      }
      if (!oddHead) oddHead = odd

    } else {
      if (!even) even = new ListNode(cur.val)
      else {
        even.next = new ListNode(cur.val)
        even = even.next
      }
      if (!evenHead) evenHead = even
    }
    cur = cur.next
    isOdd = !isOdd
  }
  if (lastOdd) lastOdd.next = evenHead
  return oddHead
}

const FIRST_LIST = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
printListNode(oddEvenList(FIRST_LIST))

const SECOND_LIST = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))))
printListNode(oddEvenList(SECOND_LIST))

const THIRD_LIST = new ListNode(1, new ListNode(3))
printListNode(oddEvenList(THIRD_LIST))
