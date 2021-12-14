/**
 * [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)
 */
var levelOrder = function (root) {
  const queue = [{
    node: root,
    dep: 0
  }]
  const ans = []

  while (queue.length) {
    const item = queue.shift()
    if (!item.node) continue

    if (!ans[item.dep]) ans[item.dep] = []
    ans[item.dep].push(item.node.val)

    queue.push({
      node: item.node.left,
      dep: item.dep + 1
    })
    queue.push({
      node: item.node.right,
      dep: item.dep + 1
    })
  }

  return ans
};