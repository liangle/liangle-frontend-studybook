/**
 * [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
 */
var preorderTraversal = function (root) {
  const ans = []

  _preorderTraversal(root, ans)

  return ans
};

var _preorderTraversal = function (root, ans) {
  if (!root) return;

  ans.push(root.val)
  _preorderTraversal(root.left, ans)
  _preorderTraversal(root.right, ans)
}