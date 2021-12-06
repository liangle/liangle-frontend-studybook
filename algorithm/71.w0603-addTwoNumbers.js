/**
 * [445. 两数相加 II](https://leetcode-cn.com/problems/add-two-numbers-ii/)
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []
  let curr = l1

  while (curr) {
    stack1.push(curr.val)
    curr = curr.next
  }

  curr = l2
  while (curr) {
    stack2.push(curr.val)
    curr = curr.next
  }

  let carry = 0
  let ans = null
  while (stack1.length || stack2.length || carry) {
    let num = (stack1.length > 0 ? stack1.pop() : 0) + (stack2.length > 0 ? stack2.pop() : 0) + carry
    let listNode = new ListNode(num % 10, null)
    listNode.next = ans
    ans = listNode
    carry = Math.floor(num / 10)
  }
  return ans
};