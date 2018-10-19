// 获得某个区间的一个随机数
export default function(istart, iend) {
  var iChoice = istart - iend + 1;
  return Math.floor(Math.random() * iChoice) + istart;
}
