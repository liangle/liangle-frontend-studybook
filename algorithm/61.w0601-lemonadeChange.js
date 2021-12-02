/**
 * [860. 柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)
 * @param {*} bills 
 * @returns 
 */
var lemonadeChange = function (bills) {
  let five = 0
  let ten = 0
  let valid = true

  bills.forEach(bill => {
    if (bill === 5) {
      //收到5元时5元数量加1
      five++
    } else if (bill === 10) {
      //收到10元时看看有没有5元，没有则不能找零，有的话10元加1，5元数量减1
      if (five > 0) {
        five--
        ten++
      } else {
        valid = false
      }
    } else {
      //收到20元的时候有两种找零方式
      //10 + 5
      //5 + 5 + 5
      //5元比较宝贵，优先使用第一种
      if (ten > 0 && five > 0) {
        ten--
        five--
      } else if (five >= 3) {
        five -= 3
      } else {
        valid = false
      }
    }
  })

  return valid
};

console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]))