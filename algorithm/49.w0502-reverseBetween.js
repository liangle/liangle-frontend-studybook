/**
 * [1124. 表现良好的最长时间段](https://leetcode-cn.com/problems/longest-well-performing-interval/)
 * @param {*} preorder 
 */
function reverseBetween(head, left, right) {
  if (!head || !head.next) return head

  let curr = head
  let prevLeft = rightNext = null
  let leftNode = rightNode = prev = next = null
  let step = left - 1

  //找到第 left 个节点，和 left前一个节点
  while (step--) {
    prevLeft = curr
    curr = curr.next
  }
  leftNode = curr
  prevLeft.next = null

  //找到第 right 个节点，和 right 的下一个节点
  step = right - left
  while (step--) {
    curr = curr.next
  }
  rightNode = curr
  rightNext = curr.next
  rightNode.next = null

  //翻转 left 至 right 之间的子链表
  curr = leftNode
  prev = rightNext

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  //把子链表和前半段拼接
  prevLeft.next = rightNode

  return head
}

console.log(reverseBetween([9, 9, 6, 0, 6, 6, 9]))