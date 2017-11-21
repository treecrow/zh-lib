// 验证是不是单个字符
function isSingleChar(value) {
  return Object.prototype.toString.call(value) === '[object String]' && value.length === 1
}
// 去除字符串开始与结束的引号
function stripQuotes(str) {
  let a = str.charCodeAt(0)
  let b = str.charCodeAt(str.length - 1)
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str
}
// 判断字符首位是否是空字符
function isSpace(value) {
  let characterCode = value.charCodeAt(0)
  return (characterCode > 8 && characterCode < 14) || characterCode === 32
}

// 导出
export default {
  isSingleChar,
  stripQuotes,
  isSpace,
}