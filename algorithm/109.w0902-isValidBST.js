/**
 * [面试题 04.05. 合法二叉搜索树](https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/submissions/)
 */
var isValidBST = function (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  if (!root) return true

  if (root.val <= min) return false
  if (root.val >= max) return false

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};