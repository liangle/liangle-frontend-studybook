/**
 * [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [root]
  let dep = 0

  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      //把每层的节点出队列
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    dep++
  }

  return dep
};