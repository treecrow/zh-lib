// 对象真值判断
export default function(obj) {
  if (typeof obj !== "object") return !!obj;
  if (obj === null) return false;
  return Object.keys(obj).length !== 0;
}
