function isValid(s) {
  // 如果传入的元素是奇数，那永远不可能匹配
  if (s.length % 2 === 1) {
    return false
  }

  // 创建一个栈数据结构
  let stack = []

  // 循环传入的字符串
  for (let i = 0; i < s.length; i++) {
    // 如果当前的括号是左括号，则入栈
    if (
      s[i] === '(' ||
      s[i] === '{' ||
      s[i] === '['
    ) {
      stack.push(s[i])
    } else {
      // 如果栈的长度是0，说明第一个是右括号
      if (stack.length === 0) {
        return false
      }
      // 如果是右括号，就和栈顶比对，符合条件则出栈
      if (
        (s[i] === ')' && stack[stack.length - 1] === '(') ||
        (s[i] === '}' && stack[stack.length - 1] === '{') ||
        (s[i] === ']' && stack[stack.length - 1] === '[')
      ) {
        stack.pop()
      } else {
        // 不符合要求就返回false
        return false
      }
    }
  }
  // 如果栈内数据都没了，说明是匹配括号
  return stack.length === 0
}
