// 洗牌算法
function shuffle(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = itemAtIndex;
  }
  return arr;
}
