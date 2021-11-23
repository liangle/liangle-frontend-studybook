/**
 * [1721. 交换链表中的节点](https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list/)
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
function swapNodes(head, k) {
  //1.找到第 k 个节点：curr 从头走 k-1 步后，当前为第 k 个节点
  //2.找到倒数第 k 个节点：因为第 k 个节点到尾节点的距离 = 头节点到倒数第 k 个节点的距离，back 从头开始，curr 从 第 k 个元素开始，同时走，当 curr 到最后一个元素时  back 为倒数第 k 个节点
  //3.交换值
  if (!head || !head.next) return head

  let curr = front = back = head

  while (--k) {
    curr = curr.next
  }

  front = curr

  while (curr.next) {
    curr = curr.next
    back = back.next
  }

  [front.val, back.val] = [back.val, front.val]
  return head
}