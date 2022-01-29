/**
 * [岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
 */
var numIslands = function (grid) {
    const n = grid.length
    const m = grid[0].length
    //初始化一个数量为n*m的并查集
    const u = new UnionSet(n * m)

    //把二维数组转换为一维数组
    const ind = (i, j) => i * m + j

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            //如果当前格子不等于1则不处理
            if (grid[i][j] !== '1') continue

            //如果上面的格子是1，则和当前格子合并
            //当i等于0时说明是最上面一条边上，跳过
            if (i > 0 && grid[i - 1][j] === '1') u.merge(ind(i, j), ind(i - 1, j))

            //如果左边的格子是1，则和当前格子合并
            //当j等于0时说明是最左边一条边上，跳过
            if (j > 0 && grid[i][j - 1] === '1') u.merge(ind(i, j), ind(i, j - 1))
        }
    }

    let ans = 0

    //统计所有格子当中值为1，并且并查集中父节点等于自己的格子的个数，就是岛屿个数
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1' && u.get(ind(i, j)) === ind(i, j)) ans++
        }
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

let arr = [
    ["1", "1", "1", "0", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"]
]


numIslands(arr)