// 判断name属性是否处于原型链上
function hasPrototypeProperty(obj, name) {
  return !obj.hasOwnProperty(name) && (name in obj)
}

// json方式深拷贝
function jsonCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 递归方式深拷贝
function recursionCopy(obj) {
  let result = obj.constructor === Array ? [] : {}
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = typeof value !== 'object' ? value : recursionCopy(value)
  })
  return result
}

// es6方式深拷贝
function esCopy(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    return {...obj}
  }
  if (Array.isArray(obj)) {
    return [...obj]
  }
  return obj
}

// 导出
export default {
  hasPrototypeProperty,
  jsonCopy,
  recursionCopy,
  esCopy,
}