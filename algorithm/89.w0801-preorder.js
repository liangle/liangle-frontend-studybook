/**
 * [589. N 叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)
 */
var preorder = function (root) {
  if (!root) return []
  const ans = [root.val]

  function traversal(root) {
    for (let child of root.children) {
      ans.push(child.val)
      traversal(child)
    }
  }

  traversal(root)

  return ans
};