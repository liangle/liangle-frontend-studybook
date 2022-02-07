/**
 * [剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)
 */
var kthLargest = function (root, k) {
    const r_cnt = getCounts(root.right)
    if (k <= r_cnt) return kthLargest(root.right, k)
    if (k === r_cnt + 1) return root.val
    return kthLargest(root.left, k - r_cnt - 1)
};

var getCounts = function (root) {
    if (!root) return 0
    return getCounts(root.left) + getCounts(root.right) + 1
}