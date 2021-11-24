/**
 * [331. 验证二叉树的前序序列化](https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/)
 * @param {*} preorder 
 */
function isValidSerialization(preorder) {
  const stack = []
  const arr = preorder.split(',')
  let len = 0

  arr.forEach(val => {
    stack.push(val)
    len = stack.length
    while (len >= 3 && stack[len - 1] === stack[len - 2] && stack[len - 1] === '#' && stack[len - 3] !== '#') {
      stack.pop()
      stack.pop()
      stack.pop()
      stack.push('#')
      len = stack.length
    }
  })

  return stack.length === 1 && stack[0] === '#'
}

console.log(isValidSerialization("9,#,19,9,9,#,#,9,#,#,59,#,#"))