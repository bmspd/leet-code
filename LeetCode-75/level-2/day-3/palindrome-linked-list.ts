import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";

function isPalindrome(head: ListNode | null): boolean {
  let cur = head
  // val from 0 to 9, so can use strings
  let values = ''
  let reversedValues = ''
  while (cur) {
    values += cur.val
    reversedValues = `${cur.val}${reversedValues}`
    cur = cur.next
  }
  return values === reversedValues
}

const FIRST_LIST = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
printListNode(FIRST_LIST)
console.log(isPalindrome(FIRST_LIST), '---> TRUE')
const SECOND_LIST = new ListNode(1, new ListNode(2))
console.log(isPalindrome(SECOND_LIST), '---> FALSE')
printListNode(SECOND_LIST)