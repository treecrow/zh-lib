// 数组集合
export default function(arr1, arr2, flag) {
  let gather;
  switch (flag) {
    // 交集
    case "intersection":
      gather = arr1.filter(item => arr2.includes(item));
      break;
    // 补集
    case "supplementary":
      gather = arr1.concat(arr2).filter(item => {
        return !arr1.includes(item) || !arr2.includes(item);
      });
      break;
    // 并集
    case "union":
      gather = [...new Set([...arr1, ...arr2])];
      break;
  }
  return gather;
}
