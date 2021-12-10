/**
 * [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
 */
var buildTree = function (preorder, inorder) {
  buildTreeHelper(preorder, 0, preorder.length, inorder, 0, inorder.length)
};

var buildTreeHelper = function (preorder, p_start, p_end, inorder, i_start, i_end) {
  if (p_start === p_end) return null

  //创建根节点
  let root = new TreeNode(preorder[p_start])
  let i_root_index = 0

  for (let i = p_start; i < i_end; i++) {
    if (inorder[i] === root.val) {
      i_root_index = i
      break
    }
  }

  let left = i_root_index - i_start
  root.left = buildTreeHelper(preorder, p_start + 1, p_start + left + 1, inorder, i_start, i_root_index)
  root.right = buildTreeHelper(preorder, p_start + left + 1, p_end, inorder, i_root_index + 1, i_end)

  return root
};