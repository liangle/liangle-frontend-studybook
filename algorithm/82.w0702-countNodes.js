/**
 * [222. 完全二叉树的节点个数](https://leetcode-cn.com/problems/count-complete-tree-nodes/submissions/)
 */
var countNodes = function (root) {
  if (!root) return 0

  return countNodes(root.left) + countNodes(root.right) + 1
};