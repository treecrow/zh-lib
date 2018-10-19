// 获取指定日期所在月份的天数
export default function(Y, M) {
  return new Date(Y, M, 0).getDate();
}
