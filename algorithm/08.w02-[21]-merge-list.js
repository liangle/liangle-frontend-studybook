const ListNode = function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 数组转链表
 * @param {*} list 
 */
const arrayToList = function (arr) {
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
const listToArray = function (list) {
  if (!list) return []

  let current = list
  const arr = []

  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}

const input = [
  [1, 2, 3],
  [2, 3, 4]
]
const list1 = arrayToList(input[0].map(Number))
const list2 = arrayToList(input[1].map(Number))
console.log(listToArray(mergeTwoLists(list1, list2)))

/**
 * [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
function mergeTwoLists(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}