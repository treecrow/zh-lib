// 递归方式深拷贝
export default function(obj) {
  let result = obj.constructor === Array ? [] : {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = typeof value !== "object" ? value : recursionCopy(value);
  });
  return result;
}
