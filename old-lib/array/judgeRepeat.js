// 判断数组中是否有重复项
export default function(arr) {
  return arr.every((item, index, arr) => {
    return arr.indexOf(item) == arr.lastIndexOf(item);
  });
}
