/**
 * [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
 */
var isSymmetric = function (root) {
  return check(root, root)
};

var check = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  return p.val === q.val && check(p.left, q.right) && check(q.left, p.right)
}