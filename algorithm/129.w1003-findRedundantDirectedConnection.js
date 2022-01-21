/**
 * 685. 冗余连接 II https://leetcode-cn.com/problems/redundant-connection-ii
 */
var findRedundantDirectedConnection = function (edges) {
  const len = edges.length
  const uf = new UnionFind(len + 1)
  let conflict = []
  let cycle = []
  let parents = new Array(len + 1).fill(0).map((item, index) => index)

  edges.forEach(edge => {
    const [parent, child] = edge
    //合并时检查后面的节点是否在并查集内
    if (uf.find(child) !== child) {
      conflict = edge //q已经有父节点，不能再设置父节点
    } else {
      parents[child] = parent
      if (uf.find(parent) === uf.find(child)) {
        cycle = edge
      } else {
        uf.union(parent, child)
      }
    }
  })

  if (conflict.length === 0) {
    //没冲突，只有环
    return cycle
  } else {
    //有冲突，并且有环
    if (cycle.length > 0) {
      const child = conflict[1]
      return [parents[child], child]
    }

    //有冲突，没有环
    return conflict
  }
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((item, index) => index)
  }

  find(i) {
    return this.parent[i] = this.parent[i] === i ? i : this.find(this.parent[i])
  }

  union(p, q) {
    this.parent[q] = p
  }
}