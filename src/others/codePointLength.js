// 正确返回字符长度（兼容汉字）
export default function(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}
