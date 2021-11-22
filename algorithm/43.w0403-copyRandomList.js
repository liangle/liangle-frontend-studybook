/**
 * [138. 复制带随机指针的链表](https://leetcode-cn.com/problems/copy-list-with-random-pointer/solution/)
 * @param {*} head 
 * @param {*} cache 
 * @returns 
 */
function copyRandomList(head, cache = new Map()) {
  if (head === null) return null

  if (!cache.has(head)) {
    cache.set(head, {
      val: head.val
    })

    Object.assign(cache.get(head), {
      next: copyRandomList(head.next, cache),
      random: copyRandomList(head.random, cache)
    })
  }

  return cache.get(head)
}