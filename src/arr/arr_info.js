// 数组信息
export default function(arr, flag) {
  const arrInfo = {
    // 最大值
    min: Math.min(...arr),
    // 最小值
    max: Math.max(...arr),
    // 是否重复
    repeat: arr.every(
      (item, index, arr) => arr.indexOf(item) == arr.lastIndexOf(item)
    )
  };
  return flag ? arrInfo : arrInfo[flag];
}
