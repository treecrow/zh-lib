/** 打乱数组顺序 */
export default function(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
