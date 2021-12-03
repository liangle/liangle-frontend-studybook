/**
 * [621. 任务调度器](https://leetcode-cn.com/problems/task-scheduler/)
 * @param {*} tasks 
 * @param {*} n 
 * @returns 
 */

var leastInterval = function (tasks, n) {
  const tmp = new Array(26).fill(0)
  let countMaxTask = 0
  let maxTask = 0

  for (let c of tasks) {
    let index = c.charCodeAt() - 65
    tmp[index]++
    maxTask = Math.max(tmp[index], maxTask)
  }

  for (let i = 0; i < 26; i++) {
    if (tmp[i] === maxTask) {
      countMaxTask++
    }
  }

  console.log((maxTask - 1) * (n + 1) + countMaxTask)

  return Math.max(tasks.length, ((maxTask - 1) * (n + 1) + countMaxTask))
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))