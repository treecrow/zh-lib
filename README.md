# zh-lib

> 整理 js 代码，自己的 js 库

## 相关文档

## 方法列表

| 文件    | 方法                 | more                                                               |
| ------- | -------------------- | ------------------------------------------------------------------ |
| array   | 数组                 | -                                                                  |
| ~       | getItem              | 根据健值对获取数组中对应元素                                       |
| ~       | unique               | 去除数组重复项                                                     |
| ~       | judgeRepeat          | 判断数组中是否有重复项                                             |
| ~       | sortToLarge          | 按大小排列数组                                                     |
| ~       | sortToSmall          | ~                                                                  |
| ~       | getMax               | 取得数组的最大值/最小值                                            |
| ~       | getMin               | ~                                                                  |
| ~       | disOrder             | 打乱数组顺序                                                       |
| ~       | getRandom            | 从数组中随机取出几个元素                                           |
| ~       | turnMatrix           | 反转矩阵数组                                                       |
| ~       | intersection         | 两个数组的交集                                                     |
| ~       | difference           | 两个数组的补集                                                     |
| ~       | union                | 两个数组的并集                                                     |
| ~       | removeError          | 去除数组中的错误项（清楚数组中为 null、undefind、0、空字符的元素） |
| ~       | flatten              | 将多维数组转变为一维数组                                           |
| ~       | isArrayLike          | 判断数组是否是类数组对象                                           |
| cookie  | cookie               | -                                                                  |
| ~       | getCookie            | 根据 cookie 名获取 cookie 值                                       |
| date    | 日期                 | -                                                                  |
| ~       | getMonthDays         | 获取指定日期所在月份的天数                                         |
| ~       | getYearType          | 判断日期是闰年还是平年                                             |
| ~       | getDateDiff          | 时间转化为几天前,几小时前，几分钟前                                |
| dom     | DOM                  | -                                                                  |
| form    | 表单                 | 表单验证                                                           |
| ~       | isPhoneNum           | 验证是否是手机号                                                   |
| ~       | isTelNum             | 验证是否是电话                                                     |
| ~       | isName               | 姓名验证                                                           |
| ~       | isPwd                | 密码验证(6-20 位数字字母混合密码)                                  |
| ~       | moneyFormat          | 金钱格式化                                                         |
| ~       | moneyValid           | 金额输入纠正                                                       |
| math    | Math                 | -                                                                  |
| ~       | getRandom            | 获得某个区间的一个随机数                                           |
| ~       | genIndentCode        | 生成指定位数数字验证码                                             |
| ~       | getAngle             | 根据坐标点确定点相对于 x 轴的夹角                                  |
| ~       | factorial            | 简单的求阶乘的函数                                                 |
| ~       | reduceFraction       | 简化分数                                                           |
| object  | 对象                 | -                                                                  |
| ~       | hasPrototypeProperty | 判断 name 属性是否处于原型链上                                     |
| ~       | jsonCopy             | json 方式深拷贝                                                    |
| ~       | recursionCopy        | 递归方式深拷贝                                                     |
| ~       | esCopy               | es6 方式深拷贝                                                     |
| regexp  | 正则                 | -                                                                  |
| ~       | isPhone              | 验证是否是手机号                                                   |
| ~       | isEmail              | 验证是否是邮箱                                                     |
| ~       | getCharNum           | 检测字符串中特定的字符的个数                                       |
| ~       | etFileExtension      | 获得文件扩展名                                                     |
| ~       | onlyChinese          | 过滤非中文                                                         |
| ~       | upperStart           | 首字母大写                                                         |
| ~       | turnToHump           | 转化为驼峰                                                         |
| ~       | turnToLine           | 转化为下划线                                                       |
| ~       | verifyDate           | 验证日期格式                                                       |
| ~       | getFunArgs           | 获取函数参数名                                                     |
| ~       | isPwd                | 密码验证(6-20 位数字字母混合密码)                                  |
| ~       | isVertifyCode        | 验证是否是 6 位数字验证码                                          |
| ~       | isHtml               | 验证是否是 html 字符串                                             |
| special | 特种函数             | -                                                                  |
| ~       | composFn             | 组合多个函数(第一个函数运行的结果传给第二个)                       |
| ~       | once                 | 只执行一次的函数                                                   |
| ~       | deepFreeze           | 彻底冻结对象                                                       |
| string  | 字符串               | -                                                                  |
| ~       | isSingleChar         | 验证是不是单个字符                                                 |
| ~       | stripQuotes          | 去除字符串开始与结束的引号                                         |
| ~       | isSpace              | 判断字符首位是否是空字符                                           |
| ~       | codePointLength      | 正确返回字符长度（兼容汉字）                                       |
| sundry  | 杂项                 | -                                                                  |
| ~       | getGlobal            | 获取顶层对象                                                       |
| type    | 类型                 | -                                                                  |
| ~       | judgeTrue            | 判断是否为真(空数组、空对象判断为 false)                           |
| ~       | judgeClassType       | 判断所有对象的类型                                                 |
| url     | url                  | -                                                                  |
| ~       | getUrlParams         | 获取 url 参数对象                                                  |
| ~       | getUrlParam          | 根据 key 获取 url 查询参数                                         |
| ~       | getHost              | 获取域名主机                                                       |
| ~       | isUrl                | 判断是否是 url                                                     |
| ~       | getAbsoluteUrl       | 获取链接的绝对地址                                                 |

## 问题列表

| 问题                     | more |
| ------------------------ | ---- |
| babel                    | -    |
| 编译适配浏览器端直接引用 | -    |
| 选择编译/选择引用        | -    |
