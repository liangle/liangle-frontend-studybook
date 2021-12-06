/**
 * [143. 重排链表](https://leetcode-cn.com/problems/reorder-list/)
 */
var reorderList = function (head) {
  if (!head || !head.next) return head

  let curr = head
  let end = null
  while (curr.next) {
    if (curr.next.next === null) {
      end = curr
      if (end === head) return head
    }
    curr = curr.next
  }
  let next = head.next
  head.next = curr
  end.next = null
  curr.next = reorderList(next)
  return head
};

console.log(reorderList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}))
console.log('end')