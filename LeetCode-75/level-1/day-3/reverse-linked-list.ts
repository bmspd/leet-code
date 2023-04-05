// noinspection ES6PreferShortImport

import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let next = null
  while (head) {
    /* take a next value */
    next = head.next
    /* rotate next to prev value */
    head.next = prev
    /* firstly prev is null */
    prev = head
    /* move pointer */
    head = next
  }
  /* now head is null, but prev contains last value from old list, and first in new rotated list*/
  head = prev
  return head
}

const firstList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

printListNode(reverseList(firstList))