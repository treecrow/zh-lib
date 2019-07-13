// json 方式深拷贝
const copy_deep_by_json = obj => JSON.parse(JSON.stringify(obj));

// 递归方式深拷贝
function copy_deep_by_recursion(obj) {
  const result = obj.constructor === Array ? [] : {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] =
      typeof value !== "object" ? value : copy_deep_by_recursion(value);
  });
  return result;
}

export default copy_deep_by_recursion;
