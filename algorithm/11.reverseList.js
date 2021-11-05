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

/**
 * 翻转链表
 * @param {*} head 
 */
function reverseList(head) {
  let newHead = null //新链表
  let curr = head //当前节点
  let next = null //下个节点

  while (curr) {
    next = curr.next
    curr.next = newHead //把当前节点从原来的链断开，指向新链表的头
    newHead = curr //把当前节点变成新链表的头
    curr = next
  }

  return newHead
}

const arr = [1, 2, 3, 4, 5]
console.log('原数组：', arr)
const list = arrayToList(arr)
console.log('翻转后：', listToArray(reverseList(list)))