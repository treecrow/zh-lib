// 去除数组中的错误项（清楚数组中为null、undefind、0、空字符的元素）
export default function(arr) {
  return arr.filter(item => !!item);
}
