/**
 * [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
 */
var levelOrderBottom = function (root) {
  if (!root) return []
  const queue = [root]
  const ans = []

  while (queue.length) {
    const arr = []
    const len = queue.length

    //打印当层的节点
    for (let i = 0; i < len; i++) {
      //当层节点出队列，并记录节点的值
      const node = queue.shift()
      arr.push(node.val)

      //添加下一层节点
      if (node.left)
        queue.push(node.left)
      if (node.right)
        queue.push(node.right)
    }

    //后面的插入数组最前面
    ans.unshift(arr)
  }

  return ans
};