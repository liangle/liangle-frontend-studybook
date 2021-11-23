/**
 * [23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
 * @param {*} lists 
 * @returns 
 */
function mergeKLists(lists) {
  // return lists.reduce((prev, curr) => mergeTwoList(prev, curr))
  const len = lists.length
  let tmp = null
  for (let i = 0; i < len; i++) {
    tmp = mergeTwoList(tmp, lists[i])
  }
  return tmp
}

function mergeTwoList(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoList(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoList(l2.next, l1)
    return l2
  }
}