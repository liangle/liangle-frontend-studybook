/**
 * [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
 * @param {*} head 
 * @returns 
 */
function deleteDuplicates(head) {
  if (!head) return head

  let curr = head
  while (curr.next) {
    if (curr.val === curr.next.val) {
      //如果当前节点和下个节点的值相同，则删除下个节点
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
}