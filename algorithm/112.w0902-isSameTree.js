/**
 * [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
 */
var isSameTree = function (p, q) {
  const qA = [p]
  const qB = [q]

  while (qA.length || qB.length) {
    const lenA = qA.length
    const lenB = qB.length
    if (lenA !== lenB) return false

    for (let i = 0; i < lenA; i++) {
      const nodeA = qA.shift()
      const nodeB = qB.shift()
      if (!nodeA && !nodeB) continue

      if (
        (nodeA && !nodeB) ||
        (!nodeA && nodeB) ||
        nodeA.val !== nodeB.val ||
        (nodeA.left && !nodeB.left) ||
        (!nodeA.left && nodeB.left) ||
        (nodeB.right && !nodeA.right) ||
        (!nodeB.right && nodeA.right)
      ) {
        return false
      }

      qA.push(nodeA.left)
      qB.push(nodeB.left)
      qA.push(nodeA.right)
      qB.push(nodeB.right)
    }
  }

  return true
};