/**
 * [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
 * @param {*} root 
 * @returns 
 */
var isBalanced = function (root) {
  return getHeight(root) >= 0
};

// 当不是平衡二叉树时返回负数
var getHeight = function (root) {
  if (!root) return 0

  const l = getHeight(root.left)
  const r = getHeight(root.right)

  // 当左边或右边不平衡时返回负数
  if (l < 0 || r < 0) return -1
  // 如果左右都平衡则判断满足条件
  if (Math.abs(l - r) > 1) return -1

  return Math.max(l, r) + 1
}