//NaN(not a number的缩写) 是数字类型 NaN 是数字类型中的特殊值，表示无效数值
//parseInt 把字符串转化为数字类型 JS前端场景，经常需要将用户的Input->Number
//数组的方法：map 括号内要接受函数 parseInt是内置函数，parseInt代表这个函数名，parseInt（）代表调用这个函数
//首先理解forEach（迭代数组中的每一项，执行一个回调函数），仅仅只执行，不返回任何值
//map（迭代数组中的每一项，执行一个回调函数，返回一个新数组）
['1','2','3'].map(parseInt)//[1,NaN,NaN]
//为什么不是[1,2,3]
parseInt('1',0,['1','2','3'])//1
