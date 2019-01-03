// 给定一个时间，获取这个时间在日历当月中的所有日期列表
export default function(date) {
  // 日期列表
  const dayList = [];
  // 当月第一天
  const curFirstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // 当月时间对象
  const curMonthTime = {
    year: curFirstDay.getFullYear(),
    month: curFirstDay.getMonth(),
    // 总共多少天
    dayCount: new Date(
      curFirstDay.getFullYear(),
      curFirstDay.getMonth() + 1,
      0
    ).getDate(),
    firstDayIndex: curFirstDay.getDay(), // 首日索引（空缺几天）
    lastDayIndex: 0 // 尾日索引（6-lastDayIndex=空缺几天）
  };
  curMonthTime.lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    curMonthTime.dayCount
  ).getDay();

  // 上月第一天
  const preFirstDay =
    curMonthTime.month == 0
      ? new Date(curMonthTime.year - 1, 11, 1)
      : new Date(curMonthTime.year, curMonthTime.month - 1, 1);
  // 上月时间对象
  const preMonthTime = {
    year: preFirstDay.getFullYear(),
    month: preFirstDay.getMonth(),
    // 总共多少天
    dayCount: new Date(
      preFirstDay.getFullYear(),
      preFirstDay.getMonth() + 1,
      0
    ).getDate()
  };
  // 下月第一天
  const nextFirstDay =
    curMonthTime.month == 11
      ? new Date(curMonthTime.year + 1, 0, 1)
      : new Date(curMonthTime.year, curMonthTime.month + 1, 1);
  // 下月时间对象
  const nextMonthTime = {
    year: nextFirstDay.getFullYear(),
    month: nextFirstDay.getMonth()
  };

  // 添加上月日期
  for (let i = 0; i < curMonthTime.firstDayIndex; i++) {
    dayList.unshift(
      `${preMonthTime.year}-${preMonthTime.month + 1}-${preMonthTime.dayCount -
        i}`
    );
  }
  // 添加当月日期
  for (let i = 0; i < curMonthTime.dayCount; i++) {
    dayList.push(`${curMonthTime.year}-${curMonthTime.month + 1}-${i + 1}`);
  }
  // 添加下月日期
  for (let i = 0; i < 6 - curMonthTime.lastDayIndex; i++) {
    dayList.push(`${nextMonthTime.year}-${nextMonthTime.month + 1}-${i + 1}`);
  }
  return dayList;
}
