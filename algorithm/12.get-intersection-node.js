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

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null
  let end
  let fast = slow = headA
  let stepCount = 0

  //先让慢指针走，找到链表结尾
  //把A链表结尾指向B链表
  //转换成找环形链表第一个节点的问题
  while (slow) {
    if (slow.next) {
      stepCount++
      slow = slow.next
    } else {
      end = slow
      break
    }
  }

  end.next = headB
  slow = end

  //让快指针走的步数和慢指针一致
  while (stepCount && fast && fast.next) {
    fast = fast.next.next
    stepCount--
  }

  if (stepCount === 0) {
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