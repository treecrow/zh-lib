// 判断是否是数组
export default function(arr) {
  return Array.isArray(arr);
}

// ========== 其他方案 ==========
// 判断是否是数组
function arr_is(arr) {
  return Object.prototype.toStringcall(arr) === "[object Array]";
}
