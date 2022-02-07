/**
 * 105. 从前序与中序遍历序列构造二叉树 https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
var buildTree = function (preorder, inorder) {
    //如果前序遍历没有元素则返回空树
    if (preorder.length === 0) return null

    const l_pre = []
    const l_in = []
    const r_pre = []
    const r_in = []

    let pos = 0
    //从中序遍历中找到前序遍历的第一个元素的位置
    while (preorder[0] !== inorder[pos]) pos++

    for (let i = 0; i < pos; i++) {
        //将 preorder 1到pos+1之间的元素加入前序遍历数组
        l_pre.push(preorder[i + 1])

        //将 inorder 0到pos之间的元素加入中序遍历数组
        l_in.push(inorder[i])
    }

    for (let i = pos + 1, len = preorder.length; i < len; i++) {
        //将 preorder 的 pos+1到最后的元素加入前序遍历数组
        r_pre.push(preorder[i])

        //将 inorder 的 pos+1到最后的元素加入中序遍历数组
        r_in.push(inorder[i])
    }

    const node = new TreeNode(preorder[0])
    //将前序遍历的左半部分和中序遍历的左半部分构造成当前节点的左子树
    node.left = buildTree(l_pre, l_in)

    //将前序遍历的右半部分和中序遍历的右半部分构造成当前节点的右子树
    node.right = buildTree(r_pre, r_in)

    return node
};