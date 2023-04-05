import {ListNode} from "../utils/entities/ListNode";
import {printListNode} from "../utils/helpers/linked-list/index";

function getNumberFromList(list: ListNode):number {
  let ptr = list
  let number = ''
  while (ptr) {
    number += String(ptr.val)
    ptr = ptr.next
  }
  return Number(number)
}

function makeListFromNumber(number: string): ListNode | null {
  if (number.length === 1) return new ListNode(Number(number))
  return new ListNode(Number(number[0]), makeListFromNumber(number.slice(1)))
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const first = Number(String(getNumberFromList(l1)).split('').reverse().join(''))
  const second = Number(String(getNumberFromList(l2)).split('').reverse().join(''))
  const reversedSum = String(first + second).split('').reverse().join('')
  return makeListFromNumber(reversedSum)
}
/*
// 243 + 564 => 807 ---- 708
let first = new ListNode(2, new ListNode(4, new ListNode(3)))
let second = new ListNode(5, new ListNode(6, new ListNode(4)))
printListNode(first)
printListNode(second)
printListNode(addTwoNumbers(first, second))
// 0 + 0 => 0 ---- 0
first = new ListNode(0)
second = new ListNode(0)
printListNode(first)
printListNode(second)
printListNode(addTwoNumbers(first, second))
// 9999999 + 9999 => 10009998 ---- 89990001
first = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))))
second = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
printListNode(first)
printListNode(second)
printListNode(addTwoNumbers(first, second))*/
// 243 + 564 => 807 ---- 708
let first = new ListNode(2, new ListNode(4, new ListNode(9)))
let second = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
printListNode(first)
printListNode(second)
printListNode(addTwoNumbers(first, second))