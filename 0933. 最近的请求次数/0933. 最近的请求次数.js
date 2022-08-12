var RecentCounter = function() {
  // 新建一个队列
  this.queue = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // 每一次发送请求，都插入队列
  this.queue.push(t)
  // 循环队列，循环条件是队列的第一个元素已经超过了当前请求的3000毫秒
  while(this.queue[0] < t - 3000) {
    // 删除队列第一个元素
    this.queue.shift()
  }
  // 返回3000毫秒内请求的数量
  return this.queue.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
