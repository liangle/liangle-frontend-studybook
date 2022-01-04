/**
 * [二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/)
 */
var rightSideView = function (root) {
  if (!root) return []

  const ans = []
  const queue = [root]

  while (queue.length) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      if (i === len - 1) {
        ans.push(node.val)
      }
    }
  }

  return ans
};

console.log(rightSideView({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}))