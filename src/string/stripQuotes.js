// 去除字符串开始与结束的引号
export default function(str) {
  let a = str.charCodeAt(0);
  let b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
