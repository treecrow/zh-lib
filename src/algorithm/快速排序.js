//快速排序
function qSort(arr) {
  //声明并初始化左边的数组和右边的数组
  var left = [],
    right = [];
  //使用数组第一个元素作为基准值
  var base = arr[0];
  //当数组长度只有1或者为空时，直接返回数组，不需要排序
  if (arr.length <= 1) return arr;
  //进行遍历
  for (var i = 1, len = arr.length; i < len; i++) {
    if (arr[i] <= base) {
      //如果小于基准值，push到左边的数组
      left.push(arr[i]);
    } else {
      //如果大于基准值，push到右边的数组
      right.push(arr[i]);
    }
  }
  //递归并且合并数组元素
  return [...qSort(left), ...[base], ...qSort(right)]; //return qSort(left).concat([base], qSort(right));
}
