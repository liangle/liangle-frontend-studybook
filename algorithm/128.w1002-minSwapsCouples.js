/**
 * 765. 情侣牵手  https://leetcode-cn.com/problems/couples-holding-hands
 */
var minSwapsCouples = function (row) {
  const n = row.length
  const tot = n / 2
  const uf = new UnionFind(tot)

  for (let i = 0; i < n; i += 2) {
    const l = Math.floor(row[i] / 2)
    const r = Math.floor(row[i + 1] / 2)
    uf.union(l, r)
  }

  const map = new Map()
  for (let i = 0; i < tot; i++) {
    const rootI = uf.find(i)
    map.set(rootI, map.has(rootI) ? map.get(rootI) + 1 : 1)
  }

  let ans = 0
  for ([key, value] of map) {
    ans += value - 1
  }

  return ans
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((element, index) => index)
    this.size = new Array(n).fill(1)
  }

  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i])
    }
    return this.parent[i]
  }

  union(p, q) {
    const rootP = this.find(p)
    const rootQ = this.find(q)

    if (this.size[rootP] >= this.size[rootQ]) {
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    } else {
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    }
  }
}

const arr = [6, 2, 1, 7, 4, 5, 3, 8, 0, 9]

console.log(minSwapsCouples(arr))