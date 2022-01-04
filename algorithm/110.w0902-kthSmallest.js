/**
 * [230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)
 */
var kthSmallest = function (root, k) {
  let ans = 0

  function inorderTraversal(root) {
    if (!root) return
    inorderTraversal(root.left)
    k--
    if (k === 0) ans = root.val
    inorderTraversal(root.right)
  }

  inorderTraversal(root)

  return ans
};