/**
 * [409. 最长回文串](https://leetcode-cn.com/problems/longest-palindrome/description/)
 * @param {*} s 
 */
function longestPalindrome(s) {
  //统计每个数字出现的次数
  //偶数全部计入长度
  //第一个基数计入长度，其它基数-1计入长度

  const map = new Map()
  for (let char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }

  let res = 0

  for ([key, value] of map) {
    res += value % 2 === 0 || res % 2 === 0 ? value : value - 1
  }

  return res
}

console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'))