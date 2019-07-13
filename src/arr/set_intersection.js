/** 两个数组的交集 */
export default function(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
