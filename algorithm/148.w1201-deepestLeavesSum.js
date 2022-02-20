/**
 * 层数最深叶子节点的和 https://leetcode-cn.com/problems/deepest-leaves-sum
 */
var deepestLeavesSum = function (root) {
    //定义临时对象，统计函数需要修改该对象的值
    const obj = {
        max_k: 0, //最大层：默认为0
        ans: 0 //节点和：默认为0
    }

    //统计最深叶子节点和放在obj.ans中
    getResult(root, 1, obj)
    return obj.ans
};

var getResult = function (root, k, ref) {
    //根节点为空时不处理
    if (!root) return

    //如果当前层数等于最大层数，则累加节点的值
    if (k === ref.max_k) {
        ref.ans += root.val
    }

    //如果当前层数大于最大层数，则更新最大层数，并且更新最大层数的节点和为当前节点的值
    if (k > ref.max_k) {
        ref.max_k = k
        ref.ans = root.val
    }

    //将左节点的值累加到第 k + 1 层
    getResult(root.left, k + 1, ref)
    //将右节点的值累加到第 k + 1 层
    getResult(root.right, k + 1, ref)
}