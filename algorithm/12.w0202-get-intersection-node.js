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
 * [面试题 02.07. 链表相交](https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci)
 * @param {*} headA 
 * @param {*} headB 
 * @returns 
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null

  //先让慢指针走，找到链表结尾
  //把A链表结尾指向B链表
  //转换成找环形链表第一个节点的问题
  let slow = headA
  while (slow && slow.next) {
    slow = slow.next
  }

  let end = slow
  end.next = headB

  let fast = headA
  slow = headA

  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (!fast) {
      end.next = null
      return null
    }
    if (fast === slow) {
      fast = headA

      while (fast && slow) {
        if (fast === slow) {
          end.next = null
          return fast
        }
        fast = fast.next
        slow = slow.next
      }
    }
  }

  end.next = null
  return null
}

var listA = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node7 = new ListNode(7);
listA.next = node2
node2.next = node3
node3.next = node7

var listB = new ListNode(5);
listB.next = node3

console.log(getIntersectionNode(listA, listB))