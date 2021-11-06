function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 添加后继节点
 * @param {*} parent 
 * @param {*} val 
 */
function addNode(parent, val) {
  let listNode = new ListNode(val)
  parent.next = listNode
  return listNode
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
 * 旋转链表
 * 将链表每个节点向右移动 k 个位置。
 * @param {*} head 
 * @param {*} k 
 */
function rotateRight(head, k) {
  if (!head || !head.next) return head

  let curr = head
  let end
  let count = 0 //节点数

  while (curr) { //找到结尾节点
    if (!curr.next) end = curr
    curr = curr.next
    count++
  }

  end.next = head //结尾指向链表头，再从count - k 位断开
  let i = count - (k % count) - 1 //从头走count - (k % count) - 1步

  curr = head
  while (i > 0) {
    curr = curr.next
    i--
  }

  head = curr.next //更新头节点
  curr.next = null

  return head
}

const list = new ListNode(1);
const listNode2 = addNode(list, 2)
const listNode3 = addNode(listNode2, 3)
// const listNode4 = addNode(listNode3, 4)
// const listNode5 = addNode(listNode4, 5)

console.log(listToArray(rotateRight(list, 4)))