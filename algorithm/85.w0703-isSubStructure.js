/**
 * [剑指 Offer 26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)
 */
var isSubStructure = function (A, B) {
  return (A && B) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

var recur = function (A, B) {
  if (!B) return true
  if (!A && A.val !== B.val) return false
  return recur(A.left, B.left) || recur(A.right, B.right)
}