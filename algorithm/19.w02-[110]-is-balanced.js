/**
 * [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
 * @param {*} root 
 */
function isBalanced(root) {
  if (!root) return true
  let map = new Map()
  let leftLen = maxDepth(root.left, map)
  let rightLen = maxDepth(root.right, map)
  return (Math.abs(leftLen - rightLen) < 2) && isBalanced(root.left) && isBalanced(root.right)
}

function maxDepth(root, map) {
  if (!root) return 0
  if (map.has(root)) return map.get(root)

  const len = Math.max(maxDepth(root.left, map), maxDepth(root.right, map)) + 1
  map.set(root, len)
  return len
}