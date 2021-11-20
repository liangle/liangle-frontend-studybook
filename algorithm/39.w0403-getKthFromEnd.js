/**
 * [剑指 Offer 22. 链表中倒数第k个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)
 * @param {*} root 
 * @param {*} k 
 */
function getKthFromEnd(root, k) {
  let curr = head
  let len = 1

  while (curr && curr.next) {
    curr = curr.next
    len++
  }

  let step = len - k
  curr = head
  while (curr && step > 0) {
    curr = curr.next
    step--
  }

  return curr
}