// 验证日期格式
export default function(vDate) {
  //验证格式必须为  "YYYY-MM-DD hh:mm:ss" 格式，类似“2014-02-12 16:34:57”
  return /^(\d{4}-\d{2}-\d{2})\s{1}(\d{2}:\d{2}:\d{2})$/.test(vDate);
}
