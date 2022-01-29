/**
 * [990. 等式方程的可满足性](https://leetcode-cn.com/problems/satisfiability-of-equality-equations/)
 */
var equationsPossible = function (equations) {
    //等式方程两边是单个字母，所以初始化并查集中的节点数量为 26
    const u = new UnionSet(26)

    for (const s of equations) {
        //把等式的两个变量合并到并查集中
        //合并时要把字符变量转换成数字
        if (s[1] === '=') {
            const a = s[0].charCodeAt() - 97
            const b = s[3].charCodeAt() - 97
            u.merge(a, b)
        }
    }

    for (const s of equations) {
        //如果不等式的两个变量又存在于并查集中，说明冲突，返回 false
        if (s[1] === '!') {
            const a = s[0].charCodeAt() - 97
            const b = s[3].charCodeAt() - 97
            if (u.get(a) === u.get(b)) return false
        }
    }

    return true
};

class UnionSet {
    constructor(n) {
        //初始化父节点数组，每个节点的父节点默认为自己
        this.pa = new Array(n + 1).fill(0).map((item, index) => index)

        //初始化每棵树的节点数
        this.size = new Array(n + 1).fill(1)
    }

    get(x) {
        //查找x的父节点，并且完成路径优化
        //优化后，x的父节点指向所在树的根节点
        return this.pa[x] = this.pa[x] === x ? x : this.get(this.pa[x])
    }

    merge(a, b) {
        //找到a的根节点
        const ra = this.get(a)
        //找到b的根节点
        const rb = this.get(b)

        //如果a和b在一个集合中则不需要合并
        if (ra === rb) return

        //把节点总数小的树合并到节点总数多的树里
        //更新节点总数多的树为 a和b之和
        if (this.size[ra] < this.size[rb]) {
            this.pa[ra] = rb
            this.size[rb] += this.size[ra]
        } else {
            this.pa[rb] = ra
            this.size[ra] += this.size[rb]
        }
    }
}

let arr = ["a==b", "b!=a"]

console.log(equationsPossible(arr))