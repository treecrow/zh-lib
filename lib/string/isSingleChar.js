// 验证是不是单个字符
export default function(value) {
  return (
    Object.prototype.toString.call(value) === "[object String]" &&
    value.length === 1
  );
}
