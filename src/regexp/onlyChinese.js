// 过滤非中文
export default function(str) {
  return str.replace(/[^\u4e00-\u9fa5]/g, "");
}
