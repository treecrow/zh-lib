// 判断数组是否是类数组对象
export default function(o) {
  if (
    o &&
    typeof o === "object" &&
    isFinite(o.length) &&
    o.length >= 0 &&
    o.length === Math.floor(o.length) &&
    o.length < 4294967296
  )
    return true;
  return false;
}
