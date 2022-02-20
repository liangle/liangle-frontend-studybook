/**
 * 面试题： 求和路径 https://leetcode-cn.com/problems/paths-with-sum-lcci
 */

var pathSum = function (root, sum) {
    //如果根节点为空则没有满足条件的路径
    if (!root) return 0

    //返回根节点算进去时的路径和 + 左子树的路径和 + 右子树的路径和
    return getPathSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

var getPathSum = function (root, sum) {
    //如果根节点为空则没有满足条件的路径
    if (!root) return 0

    const val = sum - root.val
    //如果根节点的值等于和则加1
    //再加上左子树中 sum - root.val 的路径和
    //再加上右子树中 sum - root.val 的路径和
    return (root.val === sum) + getPathSum(root.left, val) + getPathSum(root.right, val)
}