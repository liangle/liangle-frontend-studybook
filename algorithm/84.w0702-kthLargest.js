/**
 * [剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)
 */
var kthLargest = function (root, k) {
  if (root === null) return
  let ans = 0

  //二叉搜索树的中序遍历是一个有序升序数列
  //先遍历右子树再遍历左子树就是一个降序数列
  //用k计数，每遍历一个节点减1，k等于0时就是第k大的节点
  function dfs(root) {
    if (!root) return
    dfs(root.right)
    if (--k === 0) {
      ans = root.val
      return
    }
    dfs(root.left)
  }
  dfs(root)

  return ans
};