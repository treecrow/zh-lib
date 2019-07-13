// 转化为下划线
export default function(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}
