/**
 * [543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)
 * @param {*} root 
 */
function diameterOfBinaryTree(root) {
  if (!root) return 0

  let diam = 0

  function maxDepth(root) {
    if (!root) return 0

    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    diam = Math.max(left + right, diam)

    return Math.max(left, right) + 1
  }
  maxDepth(root)

  return diam
}


console.log(diameterOfBinaryTree({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}))