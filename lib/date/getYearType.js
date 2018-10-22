// 判断日期是闰年还是平年
export default function(Y) {
  return getMonthDays(Y, 2) == 28 ? "平年" : "闰年";
}
