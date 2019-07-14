// 数组过滤
export default function(arr, flag) {
  let result;
  switch (flag) {
    case "error":
      result = arr.filter(item => !!item);
      break;
    case "repeat":
      result = [...new Set(arr)];
      break;
  }
  return result;
}
