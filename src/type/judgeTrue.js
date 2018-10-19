// 判断是否为真
export default function(obj) {
  if (typeof obj !== "object") return !!obj;
  if (obj === null) return false;
  return Object.keys(obj).length !== 0;
}
