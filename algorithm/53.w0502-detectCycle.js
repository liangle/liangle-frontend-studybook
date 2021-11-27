/**
 * [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
 * @param {*} head 
 * @returns 
 */
function detectCycle(head) {
  let fast = slow = head

  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (!fast) return null
    if (fast === slow) {
      fast = head

      while (fast && slow) {
        if (fast === slow) return fast
        fast = fast.next
        slow = slow.next
      }
    }
  }

  return null
}