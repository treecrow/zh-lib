// 数组扁平化
export default function(arr, isdeep) {
  return isdeep ? arr.flat(Infinity) : arr.flat();
}

// ========== 其他方案 ==========
// 数组扁平化
function arr_flat(arr, isdeep) {
  if (isdeep) {
    return arr.reduce(
      (newArr, item) =>
        newArr.concat(Array.isArray(item) ? arr_flat(item, true) : item),
      []
    );
  } else {
    return [].concat(...arr);
  }
}
