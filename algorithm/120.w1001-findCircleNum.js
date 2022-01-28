/**
 * [547. 省份数量](https://leetcode-cn.com/problems/number-of-provinces/)
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length
    const u = new UnionSet(n)

    //把城市的连接关系合并到并查集中
    //省份的数量就等于连通关系的数量
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1) u.merge(i, j)
        }
    }

    let ans = 0

    //查找并查集中父节点是自己的节点树
    for (let i = 0; i < n; i++) {
        if (u.get(i) === i) ans++
    }

    return ans
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
        const roota = this.get(a)
        //找到b的根节点
        const rootb = this.get(b)

        //如果a和b在一个集合中则不需要合并
        if (roota === rootb) return

        //把节点总数小的树合并到节点总数多的树里
        //更新节点总数多的树为 a和b之和
        if (this.size[roota] < this.size[rootb]) {
            this.pa[roota] = rootb
            this.size[rootb] += this.size[roota]
        } else {
            this.pa[rootb] = roota
            this.size[roota] += this.size[rootb]
        }
    }
}

let arr = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]

console.log(findCircleNum(arr))