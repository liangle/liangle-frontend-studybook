/**
 * [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left]

  invertTree(root.left)
  invertTree(root.right)
  return root
}

const arr = [5, 3, 4, 2, 7, 6, 8]
const bt = convertBinaryTree(arr)
console.log(invertTree(bt))
let tmp = []
inorderTraversal(bt, tmp)
console.log(tmp)

/**
 * 中序遍历，中序遍历后的结果是个有序数列
 * @param {*} root 
 * @param {*} arr 
 */
function inorderTraversal(root, arr) {
  if (!root) return
  inorderTraversal(root.left, arr)
  arr.push(root.val)
  inorderTraversal(root.right, arr)
}

function convertBinaryTree(arr) {
  let root

  let insertNode = function (parentNode, childNode) {
    if (!childNode.val || childNode.val === '') return
    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) parentNode.left = childNode
      else insertNode(parentNode.left, childNode)
    } else {
      if (parentNode.right === null) parentNode.right = childNode
      else insertNode(parentNode.right, childNode)
    }
  }

  arr.forEach(val => {
    let node = {
      val: val,
      left: null,
      right: null
    }

    if (root) insertNode(root, node)
    else root = node
  });

  return root
}