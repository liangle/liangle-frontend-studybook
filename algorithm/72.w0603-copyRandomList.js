/**
 * [剑指 Offer 35. 复杂链表的复制](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/)
 * @param {*} head 
 * @param {*} cachedNode 
 * @returns 
 */
var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null;
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, {
      val: head.val
    })

    Object.assign(cachedNode.get(head), {
      next: copyRandomList(head.next, cachedNode),
      random: copyRandomList(head.random, cachedNode)
    })
  }
  return cachedNode.get(head);
}