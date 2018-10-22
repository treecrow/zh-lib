// 组合多个函数(第一个函数运行的结果传给第二个)
export default function(...fns) {
  return x => fns.reduce((pre, cur) => cur(pre), x);
}
