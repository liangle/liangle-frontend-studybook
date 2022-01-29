/**
 * 连通网络的操作次数 https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected
 */
var makeConnected = function (n, connections) {
    // n 台电脑需要 n - 1 个连接，如果连接不够则返回 -1
    if (connections.length < n - 1) return -1

    const u = new UnionSet(n)

    //将所有连接插入并查集
    for (const [a, b] of connections) {
        u.merge(a, b)
    }

    //统计集合的数量
    let cnt = 0
    for (let i = 0; i < n; i++) {
        if (u.get(i) === i) cnt++
    }

    // 连通 n 个集合需要操作 n - 1 次
    return cnt - 1
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