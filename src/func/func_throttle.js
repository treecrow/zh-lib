export default function(fn, delay, atleast) {
  var timer = null;
  var previous = null;

  return function() {
    var now = +new Date();

    if (!previous) previous = now;

    if (now - previous > atleast) {
      fn();
      // 重置上一次开始时间为本次结束时间
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn();
      }, delay);
    }
  };
}
