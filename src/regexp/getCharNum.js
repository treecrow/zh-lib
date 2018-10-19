// 检测字符串中特定的字符的个数
export default function(str) {
  return str.split(/[aeiou]/gi).length - 1;
}
