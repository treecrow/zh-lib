// 对象拷贝
function copy(obj, isdeep = true) {
  const result = Array.isArray(obj) ? [] : {};
  if (isdeep) {
    Object.entries(obj).forEach(([key, value]) => {
      result[key] = typeof value !== "object" ? value : copy(value, true);
    });
  } else {
    result = Array.isArray(obj) ? { ...obj } : [...obj];
  }
  return result;
}

export default copy;

// ========== 其他方案 ==========
// json 方式深拷贝
const copy_by_json = obj => JSON.parse(JSON.stringify(obj));
