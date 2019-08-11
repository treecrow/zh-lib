// 计数排序
function countingSort(nums) {
  let arr = [];
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i];
    arr[temp] = arr[temp] + 1 || 1;
  }
  let index = 0;
  for (let i = min; i <= max; i++) {
    while (arr[i] > 0) {
      nums[index++] = i;
      arr[i]--;
    }
  }
}
