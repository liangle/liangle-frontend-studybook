/**
 * [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
 */
var levelOrderBottom = function (root) {
    const ans = []

    //层序遍历二叉树
    getResult(root, 0, ans)

    //通过双指针翻转数组
    for (let i = 0, j = ans.length - 1; i < j; i++, j--) {
        //交换第 i 和 第 j 个数组
        [ans[i], ans[j]] = [ans[j], ans[i]]
    }

    return ans
};

/**
 * 递归函数的意义：把 root 的值放到 ans 的第 k 个数组当中，k 从 0 开始
 */
var getResult = function (root, k, ans) {
    //如果 root 为空时不需要处理
    if (!root) return

    //如果 ans[k] 不存在，则先向 ans 中增加一个空数组
    if (k === ans.length) ans.push([])

    //将 root 的值插入第 k 个数组的末尾
    ans[k].push(root.val)

    //把 root 的左节点的值放到第 k + 1 个数组中
    getResult(root.left, k + 1, ans)

    //把 root 的右节点的值放到第 k + 1 个数组中
    getResult(root.right, k + 1, ans)
}