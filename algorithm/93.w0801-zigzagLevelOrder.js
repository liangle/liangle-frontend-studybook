/**
 * [103. 二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
 */
var zigzagLevelOrder = function (root) {
    const ans = []

    getResult(root, 0, ans)

    for (let i = 1; i < ans.length; i += 2) {
        ans[i].reverse()
        // reverse(ans[i])
    }

    return ans
};

var reverse = function (arr) {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

var getResult = function (root, k, ans) {
    if (!root) return null

    if (k === ans.length) ans.push([])
    ans[k].push(root.val)
    getResult(root.left, k + 1, ans)
    getResult(root.right, k + 1, ans)
}