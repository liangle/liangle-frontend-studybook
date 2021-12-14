/**
 * [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
 */
var invertTree = function (root) {
  if (!root) return root;

  [root.left, root.right] = [root.right, root.left]

  invertTree(root.left)
  invertTree(root.right)

  return root
};