// noinspection ES6PreferShortImport

import {ListNode} from "../../../utils/entities/ListNode";
import {printListNode} from "../../../utils/helpers/linked-list/index";

const countListSize = (head: ListNode | null) : number => {
  let size = 0;
  let current = head;
  while (current) {
    size++
    current = current.next
  }
  return size
}
function middleNode(head: ListNode | null): ListNode | null {
  let current = head
  const size = countListSize(head)
  const index = Math.floor(size / 2)
  let counter = 0
  while(current) {
    if (counter === index) return current
    counter++;
    current = current.next
  }
  return null
}

const firstNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
const secondNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
printListNode(firstNode)
printListNode(secondNode)

