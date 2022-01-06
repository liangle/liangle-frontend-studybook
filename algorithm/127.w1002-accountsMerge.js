/**
 * 721. 账户合并  https://leetcode-cn.com/problems/accounts-merge
 */
var accountsMerge = function (accounts) {
  const m = accounts.length
  const map = new Map()
  const uf = new UnionFind(m)

  for (let i = 0; i < m; i++) {
    const n = accounts[i].length
    for (let j = 1; j < n; j++) {
      const email = accounts[i][j]
      if (map.has(email)) {
        uf.union(map.get(email), i)
      } else {
        map.set(email, i)
      }
    }
  }

  //合并账户
  let ans = [...accounts]
  for (let i = 0; i < m; i++) {
    if (uf.parent[i] !== i) {
      const rootI = uf.find(i)
      ans[uf.parent[rootI]].push(...accounts[i].slice(1))
      ans[i] = null
    }
  }

  //去掉空项
  ans = ans.filter(item => item !== null)

  //排序
  const len = ans.length
  for (let i = 0; i < len; i++) {
    ans[i] = [ans[i][0], ...new Set(ans[i].slice(1))].sort()
  }

  return ans
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n)
    this.size = new Array(n).fill(1)
    for (let i = 0; i < n; i++) {
      this.parent[i] = i
    }
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
      this.parent[rootP] = rootQ
      this.size[rootQ] += this.size[rootP]
    } else {
      this.parent[rootQ] = rootP
      this.size[rootP] += this.size[rootQ]
    }
  }
}

const arr = [
  ["David", "David0@m.co", "David4@m.co", "David3@m.co"],
  ["David", "David5@m.co", "David5@m.co", "David0@m.co"],
  ["David", "David1@m.co", "David4@m.co", "David0@m.co"],
  ["David", "David0@m.co", "David1@m.co", "David3@m.co"],
  ["David", "David4@m.co", "David1@m.co", "David3@m.co"]
]

console.log(accountsMerge(arr))
console.log('.')