/**
 * [968. 监控二叉树](https://leetcode-cn.com/problems/binary-tree-cameras/)
 */
var minCameraCover = function (root) {
  let ans = 0

  function traversal(root) {
    if (root === null) return 2

    const left = traversal(root.left)
    const right = traversal(root.right)

    if (left === 2 && right === 2) return 0
    if (left === 1 || right === 1) return 2
    if (left === 0 || right === 0) {
      ans++
      return 1
    }

    return -1
  }

  if (traversal(root) === 0) ans++

  return ans
};

const tree = {
  val: 0,
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
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}

console.log(minCameraCover(tree))