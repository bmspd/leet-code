// noinspection ES6PreferShortImport

import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const sentinel = new ListNode(-1)
  let head = sentinel
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      head.next = list1
      list1 = list1.next
    } else {
      head.next = list2
      list2 = list2.next
    }
    head = head.next
  }
  head.next = list1 || list2
  return sentinel.next
}

const firstList = new ListNode(2)
const secondList = new ListNode(1, new ListNode(3))

printListNode(firstList)
printListNode(secondList)
printListNode(mergeTwoLists(firstList, secondList))