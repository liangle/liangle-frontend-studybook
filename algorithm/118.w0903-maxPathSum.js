/**
 * [124. 二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
 */
var maxPathSum = function (root) {
  let ans = -Infinity

  var partition = function (root) {
    if (!root) return 0

    const left = partition(root.left)
    const right = partition(root.right)

    //经过当前节点的最大路径和
    const curr = root.val + left + right

    //更新最大路径和
    ans = Math.max(ans, curr)

    //计算当前节点能贡献的最大值，最大值 = 当前节点值 + 子节点中最大那个值
    //如果是负数就是0贡献
    return Math.max(root.val + Math.max(left, right), 0)
  }

  partition(root)

  return ans
};