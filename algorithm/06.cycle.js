/**
 * 判断一个链表是否有环
 * @param {*} head 
 */
function hasCycle(head) {
  let slow = fast = head //快慢指针从同一起点出发

  while (slow && fast && fast.next) {
    slow = slow.next //慢指针走一步
    fast = fast.next.next //快指针走两步

    if (fast === null) return false //快指针已经跑完
    if (slow === fast) return true //快慢指针相遇，说明有环
  }

  return false
}

/**
 * 找出环型链表的第一个节点
 * @param {*} head 
 */
function detectCycle(head) {
  let slow = fast = head //快慢指针从同一起点出发

  while (slow && fast && fast.next) {
    slow = slow.next //慢指针走一步
    fast = fast.next.next //快指针走两步

    if (fast === null) return null //快指针已经跑完
    if (slow === fast) { //快慢指针相遇，说明有环
      fast = head //把快指针变成慢指针，从头开始跑，再次相遇的节点就是环的第一个节点

      while (slow && fast) {
        if (slow === fast) return fast
        slow = slow.next
        fast = fast.next
      }
    }
  }

  return null
}

let nums = [1, 2, 3, 4, 5]
nums = [1, 2]
const list = arrayToList(nums)
// list.next.next.next.next = list.next
// console.log(hasCycle(list))
console.log(detectCycle(list))



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