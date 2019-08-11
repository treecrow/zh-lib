//插入排序 过程就像你拿到一副扑克牌然后对它排序一样
function insertSort(nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    let temp = nums[i];
    let j = i;
    while (j >= 0 && temp < nums[j - 1]) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
}
