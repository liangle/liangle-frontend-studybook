/**
 * 两棵二叉搜索树中的所有元素 https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees
 */
var getAllElements = function (root1, root2) {
    const arr1 = []
    //中序遍历树1得到有序数组
    inorderTraversal(root1, arr1)

    const arr2 = []
    //中序遍历树1得到有序数组
    inorderTraversal(root2, arr2)

    let i = j = 0
    const len1 = arr1.length
    const len2 = arr2.length
    const ans = []

    //将两个数组进行线性合并
    while (i < len1 && j < len2) {
        if (arr1[i] <= arr2[j]) {
            //如果数组1的第i个元素小于数组2的第j个元素
            //把数组1的第i个元素加入结果，并且i自增
            ans.push(arr1[i++])
        } else {
            //把数组2的第j个元素加入结果，并且j自增
            ans.push(arr2[j++])
        }
    }

    //把数组1中剩余的元素加入结果
    while (i < len1) ans.push(arr1[i++])
    //把数组2中剩余的元素加入结果
    while (j < len2) ans.push(arr2[j++])

    return ans
};

//中序遍历
function inorderTraversal(root, arr) {
    if (!root) return

    //递归遍历左子树
    inorderTraversal(root.left, arr)
    //记录节点值
    arr.push(root.val)
    //递归遍历右子树
    inorderTraversal(root.right, arr)
}