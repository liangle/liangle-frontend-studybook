/**
 * 课程表 II https://leetcode-cn.com/problems/course-schedule-ii/
 */

var findOrder = function (numCourses, prerequisites) {
    //用来存储入度
    const indeg = new Array(numCourses).fill(0)

    //每个点指向其它节点的集合
    const g = new Array(numCourses).fill(0).map(() => new Array())

    //队列用来存储入度为0的节点
    const q = new Array()

    for (const [curr, pre] of prerequisites) {
        // pre -> curr
        //当前节点的入度加1
        indeg[curr]++
        //前置节点指向当前节点
        g[pre].push(curr)
    }

    //把入度为0的节点入队列
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] === 0) q.push(i)
    }

    //统计有向图拓扑序节点个数
    let and = []
    while (q.length) {
        const ind = q.shift()
        and.push(ind)

        //把ind指向的节点的入度减一
        for (const i of g[ind]) {
            //如果i的入度为0则加入队列
            if (--indeg[i] === 0) q.push(i)
        }
    }

    //如果有向图节点个数等于课程数，则返回拓扑序，否则返回空数组
    return ans.length === numCourses ? ans : []
};