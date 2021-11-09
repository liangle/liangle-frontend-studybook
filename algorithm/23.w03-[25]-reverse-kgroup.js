/**
 * [25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
 * @param {*} head 
 * @param {*} k 
 */
function reverseKGroup(head, k) {
  if (!head || k === 1) return head

  let currListEnd = next = prevList = newHead = null
  let currListHead = curr = head
  let count = 0

  while (curr) {
    count++

    if (count % k === 0) {
      next = curr.next //把下一段节点记下来
      curr.next = null //断开第k*n个节点
      currListEnd = currListHead //把头设置为尾
      currListHead = reverseList(currListHead) //反转当前子链表

      if (!newHead) newHead = currListHead //如果新头节点为null，设置第一次反转后的头节点
      if (prevList) prevList.next = currListHead //设置前一个链表的next等于当前节点的头节点

      currListHead = curr = next
      prevList = currListEnd
      count++
    }

    if (curr) curr = curr.next
    if (!curr) prevList.next = currListHead
  }

  return newHead
}

function reverseList(head) {
  let prev = next = null
  let curr = head

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

console.log(listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2)))


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