import {ListNode} from "../utils/entities/ListNode";
import {printListNode} from "../utils/helpers/linked-list/index";
// можно решить через два указателя, один из которых двигается в два раза быстрее
// как только быстрый достигнет конца, значит медленный (1х) остановится на середине
function pairSum(head: ListNode | null): number {
  if (!head) return 0
  let maxSum = 0, length = 0
  const arr = []
  let tmp = head
  while (tmp) {
    arr.push(tmp.val)
    tmp = tmp.next
    length++
  }
  const n = arr.length
  for (let i = 0; i < n / 2; i++) {
    const sum = arr[i] + arr[n - i - 1]
    if (sum > maxSum) maxSum = sum
  }
  return maxSum
}

const FIRST = new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1))))
printListNode(FIRST)
console.log(pairSum(FIRST))