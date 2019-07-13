// 从数组中随机取出几个元素
export default function(arr, count) {
  let result = arr.concat().sort(() => Math.random() - 0.5);
  return result.slice(-count);
}
