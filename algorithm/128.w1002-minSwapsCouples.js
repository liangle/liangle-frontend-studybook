/**
 * 765. 情侣牵手  https://leetcode-cn.com/problems/couples-holding-hands
 */
var minSwapsCouples = function (row) {
  const n = row.length
  const tot = n / 2
  const uf = new UnionFind(tot)

  //把相邻座位上的两个情侣编号合并
  //情侣编号 = row[i] / 2
  for (let i = 0; i < n; i += 2) {
    uf.union(Math.floor(row[i] / 2), Math.floor(row[i + 1] / 2))
  }

  let ans = 0

  //统计并查集中父节点不是自己的节点个数，就是需要交换的次数
  for (let i = 0; i < tot; i++) {
    if (uf.find(i) !== i) ans++
  }

  return ans
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((item, index) => index)
  }

  find(i) {
    return this.parent[i] = this.parent[i] !== i ? i : this.find(this.parent[i])
  }

  union(p, q) {
    this.parent[this.find(p)] = this.find(q)
  }
}

const arr = [6, 2, 1, 7, 4, 5, 3, 8, 0, 9]

console.log(minSwapsCouples(arr))