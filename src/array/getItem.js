// 根据健值对获取数组中对应元素
export default function(arr, obj) {
  let key = "";
  for (let i in obj) {
    key = i;
    break;
  }
  return arr.filter(item => item[key] === obj[key])[0];
}
