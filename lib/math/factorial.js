// 简单的求阶乘的函数
export default function(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
