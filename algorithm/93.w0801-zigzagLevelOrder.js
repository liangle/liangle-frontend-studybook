/**
 * [103. 二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
 */
var levelOrderBottom = function (root) {
  if (!root) return []
  const queue = [root]
  const ans = []

  while (queue.length) {
    const arr = []
    const len = queue.length
    const arrLen = ans.length

    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (arrLen % 2 === 0)
        arr.push(node.val)
      else
        arr.unshift(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    ans.push(arr)
  }

  return ans
};