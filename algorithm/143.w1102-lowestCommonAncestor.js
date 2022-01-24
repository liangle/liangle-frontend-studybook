/**
 * 面试题 04.08. 首个共同祖先 https://leetcode-cn.com/problems/first-common-ancestor-lcci
 */
var lowestCommonAncestor = function (root, p, q) {
    //如果根节点为空，或根节点等于 p、q，则返回根节点
    if (!root || root === p || root === q) return root

    //从左子树中找两个节点
    const left = lowestCommonAncestor(root.left, p, q)
    //从右子树中找两个节点
    const right = lowestCommonAncestor(root.right, p, q)

    //如果左右两棵子树分别找到了两个节点，当前根节点就是共同祖先
    //如果左子树遍历的结果不为空，说明左子树中存在一个节点，则返回左子树结果
    //如果右子树遍历的结果不为空，说明右子树中存在一个节点，则返回右子树结果
    return left && right ? root : left ? left : right
};