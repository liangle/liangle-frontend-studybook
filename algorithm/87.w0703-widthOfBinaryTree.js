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

    //把左右子节点加到队列
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

    //如果深度不相等，说明遇到了下一层的第一个节点
    //这个节点有可能是最左边的节点，也可能左子树没有，那就是右子树的节点，所以left可能大于0
    if (curr_dep !== item.dep) {
      curr_dep = item.dep
      left = item.pos
    }

    //当前节点的宽带=当前位置-最左节点的位置
    ans = Math.max(item.pos - left + 1, ans)
  }

  return ans
};

const tree = {
  val: 0,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}

console.log(widthOfBinaryTree(tree))