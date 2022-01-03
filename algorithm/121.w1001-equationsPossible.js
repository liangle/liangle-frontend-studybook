/**
 * [990. 等式方程的可满足性](https://leetcode-cn.com/problems/satisfiability-of-equality-equations/)
 */
var equationsPossible = function (equations) {
  const uf = new UnionFind(26)
  var getXY = function (equation) {
    const offset = 97
    return [equation.charAt(0).charCodeAt() - offset, equation.charAt(3).charCodeAt() - offset]
  }

  equations.forEach(equation => {
    if (equation.indexOf('==') !== -1) {
      const [x, y] = getXY(equation)
      uf.union(x, y)
    }
  })

  for (const equation of equations) {
    if (equation.indexOf('!=') !== -1) {
      const [x, y] = getXY(equation)
      if (uf.find(x) === uf.find(y)) return false
    }
  }

  return true
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n)
    this.size = new Array(n).fill(1)
    this.count = n

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
    const parentP = this.find(p)
    const parentQ = this.find(q)
    if (parentP === parentQ) return

    if (this.size[parentP] > this.size[parentQ]) {
      this.parent[parentQ] = parentP
      this.size[parentP] += this.size[parentQ]
    } else {
      this.parent[parentP] = parentQ
      this.size[parentQ] += this.size[parentP]
    }

    this.count--
  }
}

let arr = ["a==b", "b!=a"]

console.log(equationsPossible(arr))