/**
 * [从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof)
 * @param {*} head 
 */
function reversePrint(head) {
  const stack = [] //利用栈后进先出的特性存节点的值
  let curr = head

  while (curr) {
    stack.unshift(curr.val)
    curr = curr.next
  }

  return stack
}

console.log(reversePrint(arrayToList([1, 2, 3, 4, 5])))
console.log(reversePrint(null))

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 数组转链表
 * @param {*} list 
 */
function arrayToList(arr) {
  const head = new ListNode(null)
  let current = head
  for (const num of arr) {
    current.next = new ListNode(num)
    current = current.next
  }

  return head.next
}

/**
 * 链表转数组
 * @param {*} list 
 */
function listToArray(list) {
  if (!list) return []

  let current = list
  const arr = []

  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}