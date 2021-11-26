/**
 * [83. 删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
 * @param {*} head 
 * @returns 
 */
function deleteDuplicates(head) {
  if (!head) return head

  let weakHead = new ListNode(null, head)
  let curr = weakHead
  let prev = weakHead
  let delNode = null

  while (curr) {
    //两种情况删除当前节点：
    //1.当前节点值等于下一个节点的值
    //2.当前节点值等于上个删除节点的值
    if ((curr.next && curr.val === curr.next.val) || (delNode && curr.val === delNode.val)) {
      delNode = curr
      curr = curr.next
      prev.next = curr
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return weakHead.next
}