// 判断所有对象的类型
export default function(obj) {
  if (obj === null) return "null";
  if (obj !== obj) return "NaN";
  if (typeof obj !== "object") return typeof obj;
  const objectType = Object.prototype.toString.call(obj).slice(8, -1);
  if (objectType !== "Object") {
    return objectType;
  } else if (obj.constructor && typeof obj.constructor === "function") {
    return obj.constructor.name || "匿名构造函数";
  } else {
    return "Object";
  }
}
