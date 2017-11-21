// 组合多个函数(第一个函数运行的结果传给第二个)
function composFn(...fns) {
  return (x) => fns.reduce((pre, cur) => cur(pre), x)
}

// 只执行一次的函数
function once(fn, context) {
  let result
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }
    return result
  };
}

// 彻底冻结对象
function deepFreeze(obj) {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, value) => {
    if (typeof obj[key] === 'object') deepFreeze(obj[key])
  })
}

// 导出
export default {
  composFn,
  once,
  deepFreeze,
}