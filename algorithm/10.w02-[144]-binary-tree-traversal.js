/**
 * [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
 * @param {*} root 
 * @param {*} arr 
 * @returns 
 */
function preorderTraversal(root, arr) {
  if (!root) return
  arr.push(root.val)
  preorderTraversal(root.left, arr)
  preorderTraversal(root.right, arr)
}

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

/**
 * 后序遍历
 * @param {*} root 
 * @param {*} arr 
 */
function postorderTraversal(root, arr) {
  if (!root) return
  postorderTraversal(root.left, arr)
  postorderTraversal(root.right, arr)
  arr.push(root.val)
}

const arr = [5, 3, 4, 2, 7, 6, 8]
const bt = convertBinaryTree(arr)
let tmp = []
preorderTraversal(bt, tmp)
console.log('前序遍历：', tmp.join(','))
tmp = []
inorderTraversal(bt, tmp)
console.log('中序遍历：', tmp.join(','))
tmp = []
postorderTraversal(bt, tmp)
console.log('后序遍历：', tmp.join(','))


function convertBinaryTree(arr) {
  let root;

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