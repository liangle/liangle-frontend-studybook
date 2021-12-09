/**
 * [面试题 02.04. 分割链表](https://leetcode-cn.com/problems/partition-list-lcci/)
 */
var partition = function (head, x) {
  let large = new ListNode()
  let small = new ListNode()
  let currLarge = large
  let currSmall = small
  let curr = head

  while (curr) {
    if (curr.val < x) {
      currSmall.next = curr
      currSmall = currSmall.next
    } else {
      currLarge.next = curr
      currLarge = currLarge.next
    }
    curr = curr.next
  }

  currLarge.next = null
  currSmall.next = large.next

  return small.next
};