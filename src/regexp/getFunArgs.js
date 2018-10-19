// 获取函数参数名
export default function(func) {
  let args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
  return args
    .split(",")
    .map(arg => arg.replace(/\/\*.*\*\//, "").trim())
    .filter(arg => arg);
}
