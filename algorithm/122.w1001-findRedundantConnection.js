/**
 * 冗余连接 https://leetcode-cn.com/problems/redundant-connection
 */
var findRedundantConnection = function (edges) {
    const u = new UnionSet(edges.length)

    //扫描所有边，合并到并查集中
    for (const [a, b] of edges) {
        //合并前先判断是否已经存在连接关系，如果已经存在则说明是多余的边
        if (u.get(a) === u.get(b)) return [a, b]

        //合并边到并查集中
        u.merge(a, b)
    }
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