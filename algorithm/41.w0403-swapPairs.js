function swapPairs(head) {
  //用分治解题
  if (!head || !head.next) return head

  let n1 = head
  let n2 = head.next
  let next = n2.next
  n2.next = n1

  if (next) {
    n1.next = swapPairs(next)
  } else {
    n1.next = null
  }

  return n2
}