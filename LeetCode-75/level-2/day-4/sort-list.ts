import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";
function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  const middle = getMiddle(head)
  const nextForMiddle = middle.next

  middle.next = null

  const left = sortList(head)

  const right = sortList(nextForMiddle)

  const sortedList = sortedMerge(left, right)
  return sortedList

}

function getMiddle(head: ListNode | null): ListNode | null {
  if (!head) return head

  let slow = head, fast = head
  while (fast.next != null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function sortedMerge(a: ListNode | null, b: ListNode | null): ListNode | null {
  let res = null
  if (!a) return b
  if (!b) return a

  if (a.val <= b.val) {
    res = a
    res.next = sortedMerge(a.next, b)
  } else {
    res = b
    res.next = sortedMerge(a, b.next)
  }
  return res
}


const FIRST_LIST = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))
printListNode(FIRST_LIST)
printListNode(sortList(FIRST_LIST))

const SECOND_LIST = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))))
printListNode(SECOND_LIST)
printListNode(sortList(SECOND_LIST))

printListNode(sortList(null))