/** 两个数组的并集 */
export default function(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
