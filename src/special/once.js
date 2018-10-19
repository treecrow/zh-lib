// 只执行一次的函数
export default function(fn, context) {
  let result;
  return function() {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}
