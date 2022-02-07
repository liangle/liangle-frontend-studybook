/**
 * [剑指 Offer 26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)
 */
var isSubStructure = function (A, B) {
    if (!A || !B) return false
    if (isMatch(A, B)) return true
    //递归 A 的左右子树是否匹配 B
    return isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isMatch = function (a, b) {
    if (!b) return true //b为空时则认为匹配
    if (!a) return false
    if (a.val !== b.val) return false //如果a、b的值不相等则不匹配

    //如果 a、b 的值相等，再递归判断 a、b 的左右子树是否匹配
    return isMatch(a.left, b.left) && isMatch(a.right, b.right)
}