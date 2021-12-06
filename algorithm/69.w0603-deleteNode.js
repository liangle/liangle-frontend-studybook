/**
 * [面试题 02.03. 删除中间节点](https://leetcode-cn.com/problems/delete-middle-node-lcci//)
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};