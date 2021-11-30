/**
 * [859. 亲密字符串](https://leetcode-cn.com/problems/buddy-strings/)
 * @param {*} s 
 * @param {*} goal 
 * @returns 
 */

var buddyStrings = function (s, goal) {
  //暴力求解（力扣给了个超长字符串，超时了）
  //0 和 1,2,3, ... n - 1 交换后对比
  //1 和 2,3,4, ... n - 1 交换后对比
  //n - 2 和 n - 1 交换后对比

  // for (let i = 0; i < len; i++) {
  //     for (let j = i + 1; j < len; j++) {
  //         let tmp = s.split('');
  //         [tmp[i], tmp[j]] = [tmp[j], tmp[i]]
  //         if (tmp.join('') === goal) return true
  //     }
  // }

  if (s.length !== goal.length) return false

  if (s === goal) {
    const map = new Map()
    for (let c of s) {
      if (map.has(c)) return true
      map.set(c, null)
    }
    return false
  } else {
    //找到两个字符串的第1个不同字符和第2个不同字符
    //判断s第一个是否等于goal第2个字符，goal第2个字符是否等于s第一个字符，如果是则是亲密字符串
    const len = s.length
    let first = second = -1

    for (let i = 0; i < len; i++) {
      if (s[i] !== goal[i]) {
        if (first === -1) {
          first = i
        } else if (second === -1) {
          second = i
        } else {
          return false
        }
      }
    }
    return first !== -1 && second != -1 && s[first] === goal[second] && s[second] === goal[first]
  }
};

console.log(buddyStrings('abab', 'abab'))