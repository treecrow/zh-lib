// 首字母大写
export default function(str) {
  return str.replace(/\b(\w)(\w*)/g, () => {
    return $1.toUpperCase() + $2.toLowerCase();
  });
}
