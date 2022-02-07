/**
 * [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)
 */
var levelOrder = function (root) {
    const queue = root ? [root] : []
    const ans = []

    while (queue.length) {
        const len = queue.length
        const arr = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            arr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        ans.push(arr)
    }

    return ans
};


var levelOrder = function (root) {
    const ans = []

    _levelOrder(root, 0, ans)

    return ans
};

//k 代表当前的根节点的值要放到第几个数组中
var _levelOrder = function (root, k, ans) {
    if (!root) return

    //当root的值放入第0号数组中，ans长度为0时，ans插入新数组
    if (k === ans.length) ans.push([])

    ans[k].push(root.val)
    _levelOrder(root.left, k + 1, ans)
    _levelOrder(root.right, k + 1, ans)
};