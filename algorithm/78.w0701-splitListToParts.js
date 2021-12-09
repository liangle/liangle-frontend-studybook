/**
 * [725. 分隔链表](https://leetcode-cn.com/problems/split-linked-list-in-parts/)
 */
var splitListToParts = function (head, k) {
  //先统计链表的节点总数
  let count = 0
  let curr = head

  while (curr) {
    curr = curr.next
    count++
  }

  curr = head
  //计算每组大小
  const groupSize = Math.floor(count / k)

  //计算多出来的部分，分到靠前的组里
  let overflow = count % k
  const res = new Array(k).fill(null)

  for (let i = 0; i < k && curr !== null; i++) {
    res[i] = curr
    let subListSize = groupSize + (i < overflow ? 1 : 0)
    for (let j = 1; j < subListSize; j++) {
      curr = curr.next
    }

    //端口子链表
    const next = curr.next
    curr.next = null
    curr = next
  }

  return res
};