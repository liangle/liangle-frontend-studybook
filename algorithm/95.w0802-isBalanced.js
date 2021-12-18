/**
 * [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
 * @param {*} root 
 * @returns 
 */
var isBalanced = function (root) {
  if (!root) return true
  return height(root) >= 0
};

var height = function (root) {
  if (!root) return 0

  let leftLen = height(root.left)
  let rightLen = height(root.right)

  if (leftLen === -1 || rightLen === -1 || Math.abs(leftLen - rightLen) > 1) {
    return -1
  } else {
    return Math.max(leftLen, rightLen) + 1
  }
}