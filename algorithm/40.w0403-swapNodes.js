/**
 * [1721. 交换链表中的节点](https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list/)
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
function swapNodes(head, k) {
  if (!head || !head.next) return head

  let front = head
  let curr = head
  let len = 1

  while (curr && curr.next) {
    curr = curr.next
    len++
    if (len === k) {
      front = curr
    }
  }

  let step = len - k
  curr = head
  while (curr && step > 0) {
    curr = curr.next
    step--
  }

  [front.val, curr.val] = [curr.val, front.val]
  return head
}