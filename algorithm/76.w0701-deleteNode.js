/**
 * [剑指 Offer 18. 删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)
 */
var deleteNode = function (head, val) {
  let weakHead = new ListNode(null, head)
  let curr = weakHead
  let prev = null

  while (curr) {
    prev = curr
    curr = curr.next

    if (curr.val === val) {
      prev.next = curr.next
      break
    }
  }

  return weakHead.next
};