// 简化分数
export default function(a, x, y) {
  if (x % y == 0) {
    a += x / y;
    return [a, 0, 0];
  }
  while (x > y) {
    x -= y;
    a++;
  }
  if (x > 1) {
    for (var i = 2; i < x; i++) {
      while (x % i == 0 && y % i == 0) {
        x /= i;
        y /= i;
      }
    }
  }
  return [a, x, y];
}
