// 判断是否是数组
function isArray(arr) {
  if (Array.isArray) return Array.isArray(arr);
  return Object.prototype.toString.call(arr) === "[object Array]";
}

export default isArray;
