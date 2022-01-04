/**
 * 947. 移除最多的同行或同列石头  https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column
 */
var removeStones = function (stones) {
  const uf = new UnionFind()

  stones.forEach(stone => {
    const [x, y] = stone
    uf.union(x + 10001, y)
  })

  return stones.length - uf.getCount()
};

class UnionFind {
  constructor() {
    this.parent = new Map()
    this.count = 0
    this.size = new Map()
  }

  find(i) {
    if (!this.parent.has(i)) {
      this.parent.set(i, i)
      this.size.set(i, 1)
      this.count++
    }

    if (this.parent.get(i) !== i) {
      this.parent.set(i, this.find(this.parent.get(i)))
    }

    return this.parent.get(i)
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      if (this.size.get(x) > this.size.get(y)) {
        this.parent.set(rootY, rootX)
        this.size.set(rootY, this.size.get(rootY) + this.size.get(rootX))
      } else {
        this.parent.set(rootX, rootY)
        this.size.set(rootX, this.size.get(rootY) + this.size.get(rootX))
      }
      this.count--
    }
  }

  getCount() {
    return this.count
  }
}