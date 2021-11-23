/**
 * [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
 * @param {*} preorder 
 */
function postorderTraversal(preorder) {
  if (!root) return []

  postorderTraversal(root.left, arr)
  postorderTraversal(root.right, arr)
  arr.push(root.val)

  return arr
}