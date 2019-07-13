/** 
 * 两个数组的补集
 * @param {array} arr1 - 第一个数组.
 * @param {array} arr2 - 第二个数组. 
 */
export default function(arr1, arr2) {
  return arr1.concat(arr2).filter(item => {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}
