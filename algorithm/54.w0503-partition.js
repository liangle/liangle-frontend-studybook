/**
 * [86. 分隔链表](https://leetcode-cn.com/problems/partition-list/)
 * @param {*} head 
 * @returns 
 */
function partition(head) {
  let largeHead = new ListNode(null, null)
  let smallHead = new ListNode(null, null)
  let largeEnd = largeHead //当前较大链表尾节点，默认指向大链表的头
  let samllEnd = smallHead //当前较小链表尾节点，默认指向小链表的头
  let curr = head

  while (curr) {
    if (curr.val < x) {
      //当前节点的值小于x时
      //1.当前节点加到较小链表的尾部
      //2.较小链表尾节点后移
      samllEnd.next = curr
      samllEnd = samllEnd.next
    } else {
      largeEnd.next = curr
      largeEnd = largeEnd.next
    }
    curr = curr.next
  }

  //把小链表的最后一个节点指向大链表真实的头节点
  samllEnd.next = largeHead.next
  //更新最大尾节点的 next 为 null，防止出现环
  largeEnd.next = null
  return smallHead.next
}