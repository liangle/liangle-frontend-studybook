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
        //合并有相同邮箱的账户
        uf.union(map.get(email), i)
      } else {
        map.set(email, i)
      }
    }
  }

  //合并账户
  let ans = [...accounts]
  for (let i = 0; i < m; i++) {
    //把父节点不是自己的节点合并到父节点
    if (uf.parent[i] !== i) {
      const rootI = uf.find(i)
      ans[rootI].push(...ans[i].slice(1))
      ans[i] = null
    }
  }

  //去掉已合并的空项
  ans = ans.filter(item => item !== null)

  //将邮箱去重后排序
  const len = ans.length
  for (let i = 0; i < len; i++) {
    ans[i] = [ans[i][0], ...[...new Set(ans[i].slice(1))].sort()]
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

const arr = [
  ["David", "David0@m.co", "David4@m.co", "David3@m.co"],
  ["David", "David5@m.co", "David5@m.co", "David0@m.co"],
  ["David", "David1@m.co", "David4@m.co", "David0@m.co"],
  ["David", "David0@m.co", "David1@m.co", "David3@m.co"],
  ["David", "David4@m.co", "David1@m.co", "David3@m.co"]
]

console.log(accountsMerge(arr))
console.log('.')