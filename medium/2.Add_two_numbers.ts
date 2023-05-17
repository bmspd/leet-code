import {ListNode} from "../utils/entities/ListNode";
import {printListNode} from "../utils/helpers/linked-list/index";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null
  let newList = null, head = null
  let remainder = 0
  let l1TMP = l1, l2TMP = l2
  while(l1TMP || l2TMP) {
    const sum = (l1TMP?.val ?? 0) + (l2TMP?.val ?? 0) + remainder
    remainder = Math.floor(sum / 10)
    const number = sum % 10
    if (!newList && !head) {
      head = new ListNode(number)
      newList = head
    } else {
      newList.next = new ListNode(number)
      newList = newList.next
    }
    if (l1TMP) l1TMP = l1TMP.next
    if (l2TMP) l2TMP = l2TMP.next
  }
  if (remainder) newList.next = new ListNode(remainder)
  return head
}

const FIRST1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const FIRST2 = new ListNode(5, new ListNode(6, new ListNode(4)))

printListNode(FIRST1)
printListNode(FIRST2)
console.log('----------')
printListNode(addTwoNumbers(FIRST1, FIRST2))

printListNode(addTwoNumbers(new ListNode(1, new ListNode(2)), null))