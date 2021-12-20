/**
 * [355. 设计推特](https://leetcode-cn.com/problems/design-twitter/)
 */
var Twitter = function () {
  this.posts = []
  this.follows = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.posts.push({
    userId,
    tweetId,
    sort: this.posts.length
  })
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const users = [userId]

  if (this.follows.has(userId)) {
    const currUserFollows = this.follows.get(userId)
    for ([key, value] of currUserFollows) {
      users.push(key)
    }
  }

  const result = this.posts.filter(post => users.includes(post.userId))
  result.sort((a, b) => b.sort - a.sort)
  return result.slice(0, 10).map(post => post.tweetId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.follows.has(followerId)) {
    this.follows.set(followerId, new Map())
  }

  const currUserFollows = this.follows.get(followerId)
  currUserFollows.set(followeeId, followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.follows.has(followerId)) {
    const currUserFollows = this.follows.get(followerId)
    currUserFollows.delete(followeeId)
  }
};

let twitter = new Twitter()
twitter.postTweet(1, 5)
console.log(twitter.getNewsFeed(1))
twitter.follow(1, 2)
twitter.postTweet(2, 6)
console.log(twitter.posts)
console.log(twitter.getNewsFeed(1))
console.log('-----------')