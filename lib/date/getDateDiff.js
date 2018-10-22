// 时间转化为几天前,几小时前，几分钟前
export default function(dateTimeStamp) {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const halfamonth = day * 15;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - dateTimeStamp;

  if (diffValue < 0) return;
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;

  if (monthC >= 1) {
    return "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    return "" + parseInt(minC) + "分钟前";
  } else {
    return "刚刚";
  }
}
