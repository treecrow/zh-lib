// 转化为驼峰
export default function(str) {
  return str.replace(/_(\w)/g, ($0, $1) => {
    return $1.toUpperCase();
  });
}
