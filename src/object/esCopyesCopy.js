// es6方式深拷贝
export default function(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    return { ...obj };
  }
  if (Array.isArray(obj)) {
    return [...obj];
  }
  return obj;
}
