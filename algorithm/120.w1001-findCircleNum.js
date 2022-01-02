/**
 * [547. 省份数量](https://leetcode-cn.com/problems/number-of-provinces/)
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const uf = new UnionFind(n)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) uf.union(i, j)
    }
  }

  return uf.count
};

var UnionFind = function (n) {
  //初始化一个数组，每个为1的节点的根指向自己
  this.parent = new Array(n)
  this.size = new Array(n)
  this.count = n

  for (let i = 0; i < n; i++) {
    this.parent[i] = i
  }
}

UnionFind.prototype.find = function (i) {
  if (this.parent[i] !== i) {
    //路径压缩
    this.parent[i] = this.find(this.parent[i])
  }
  return this.parent[i]
}

UnionFind.prototype.union = function (p, q) {
  const rootP = this.find(p)
  const rootQ = this.find(q)

  if (rootP !== rootQ) {
    //将小数合并到大数里
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP
      this.size[rootQ] += this.size[rootP]
    } else {
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    }
    this.count--
  }
}

let arr = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]

console.log(findCircleNum(arr))