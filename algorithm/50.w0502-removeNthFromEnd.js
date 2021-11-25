/**
 * [19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
 * @param {*} preorder 
 */
function removeNthFromEnd(head, n) {
  let front = back = head
  let prev = null

  //指针从头走 n-1 步找到第 n 个节点
  while (--n) {
    front = front.next
  }

  //双指针同时走，前面指针到达链表位节点时，后指针为倒数第 n 个节点
  //记录第 n 个节点的前一个节点 prev
  while (front.next) {
    front = front.next
    prev = back
    back = back.next
  }

  //如果 prev 为空则表示删除头节点
  if (!prev) return head.next

  //删除 back 节点，即将 back 的前节点指向 back 的后一个节点
  prev.next = back.next

  return head
}