/**
 * [112. 路径总和](https://leetcode-cn.com/problems/path-sum/submissions/)
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false

  //如果当前节点为叶子节点，并且当前节点的值等于targetSum则返回true
  if (!root.left && !root.right) {
    return root.val === targetSum
  }

  //把根节点大问题分解为左右两个节点的小问题
  return hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
};