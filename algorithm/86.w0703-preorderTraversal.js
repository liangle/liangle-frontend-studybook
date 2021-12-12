/**
 * [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
 */
var preorderTraversal = function (root) {
  const ans = []

  function _preorderTraversal(root) {
    if (!root) return
    ans.push(root.val)
    _preorderTraversal(root.left)
    _preorderTraversal(root.right)
  }
  _preorderTraversal(root)

  return ans
};