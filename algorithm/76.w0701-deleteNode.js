/**
 * [剑指 Offer 18. 删除链表的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)
 */
var deleteNode = function (head, val) {
  let vHead = new ListNode(null, head)
  let curr = vHead

  while (curr && curr.next && curr.next.val !== val) {
    curr = curr.next
  }
  curr.next = curr.next.next

  return vHead.next
};