/**
 * [589. N 叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)
 */
var preorder = function (root) {
    const ans = root ? [root.val] : []

    traversal(root, ans)

    return ans
};

function traversal(root, ans) {
    if (!root) return

    for (let child of root.children) {
        ans.push(child.val)
        traversal(child, ans)
    }
}