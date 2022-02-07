/**
 * [112. 路径总和](https://leetcode-cn.com/problems/path-sum/submissions/)
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false

  //如果当前节点为叶子节点，并且当前节点的值等于targetSum则返回true
  if (!root.left && !root.right) return targetSum === root.val

  if (hasPathSum(root.left, targetSum - root.val)) return true
  if (hasPathSum(root.right, targetSum - root.val)) return true
};