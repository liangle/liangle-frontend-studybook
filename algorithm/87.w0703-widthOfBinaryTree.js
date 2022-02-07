/**
 * [662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/)
 */
var widthOfBinaryTree = function (root) {
    //定义新的数据结构 { node: root, ind: 0 }
    //计算出每个节点在当层的索引
    const queue = [{
        node: root,
        ind: 0
    }]
    let ans = 0

    while (queue.length > 0) {
        const len = queue.length
        //保存当层最左索引和最右索引
        let l = r = queue[0].ind

        for (let i = 0; i < len; i++) {
            const {
                node,
                ind
            } = queue.shift()
            r = ind

            //计算左节点索引，左子节点索引等于当前节点乘2
            if (node.left) queue.push({
                node: node.left,
                ind: 2 * (ind - l)
            })

            //计算右节点索引，右子节点索引等于当前节点乘2加1
            if (node.right) queue.push({
                node: node.right,
                ind: 2 * (ind - l) + 1
            })
        }

        //最右一个节点的索引减左索引加1得到本层宽度，并更新最大宽度
        ans = Math.max(ans, r - l + 1)
    }

    return ans
};