import {ListNode} from "../../entities/ListNode";

export function printListNode(list: ListNode): void {
  let ptr = list;
  let res = ''
  while(ptr) {
    res += `${ptr.val}${ptr.next ? '->' : '.'}`
    ptr = ptr.next
  }
  console.log(res)
}