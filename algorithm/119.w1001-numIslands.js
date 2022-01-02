/**
 * [岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
 */
var numIslands = function (grid) {
  let count = 0
  let n = grid.length
  for (let i = 0; i < n; i++) {
    let m = grid[i].length
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        //染色
        bfs(grid, i, j)
        count++
      }
    }
  }

  return count
};

var bfs = function (grid, i, j) {
  const queue = [
    [i, j]
  ]
  const n = grid.length
  const m = n > 1 ? grid[0].length : 0

  while (queue.length) {
    const [i, j] = queue.shift()
    if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === '1') {
      grid[i][j] = '0'
      queue.push([i - 1, j])
      queue.push([i + 1, j])
      queue.push([i, j - 1])
      queue.push([i, j + 1])
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