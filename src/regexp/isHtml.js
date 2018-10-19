// 验证是否是html字符串
export default function(html) {
  return /^(?:\s*(<[\w\W]+>)[^>]*)$/.test(html);
}
