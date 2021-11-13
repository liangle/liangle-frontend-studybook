/**
 * [返回倒数第 k 个节点](https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/)
 * @param {*} head 
 * @param {*} k 
 * @returns 
 */
function kthToLast(head, k) {
  const arr = []
  let curr = head

  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  return arr[arr.length - k]
}


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