/**
 * [面试题 02.08. 环路检测](https://leetcode-cn.com/problems/linked-list-cycle-lcci/)
 * @param {*} head 
 * @returns 
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null

  let fast = slow = head
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (!fast) return null
    if (fast === slow) {
      fast = head

      while (slow && fast) {
        if (slow === fast) return fast
        slow = slow.next
        fast = fast.next
      }
    }
  }

  return null
};