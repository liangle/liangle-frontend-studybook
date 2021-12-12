/**
 * [662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/)
 */
var widthOfBinaryTree = function (root) {
  const queue = [{
    node: root,
    dep: 0,
    pos: 0
  }]
  let curr_dep = ans = left = 0

  for (let item of queue) {
    if (!item.node) continue

    queue.push({
      node: item.node.left,
      dep: item.dep + 1,
      pos: item.pos * 2
    })
    queue.push({
      node: item.node.right,
      dep: item.dep + 1,
      pos: item.pos * 2 + 1
    })

    if (curr_dep !== item.dep) {
      curr_dep = item.dep
      left = item.pos
    }

    ans = Math.max(item.pos - left + 1, ans)
  }

  return ans
};