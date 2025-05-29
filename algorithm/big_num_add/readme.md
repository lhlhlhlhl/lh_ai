# 大数相加

- 高精度 
  js Number 类型,不分整数,浮点数,高精度,,,
  js不太适合计算 python 适合
  表现里强 适合做界面
- 大数字
  边界问题
  js中表达的最大数值:
  Number.MAX_VALUE 1.7976931348623157e+308
  Number.MIN_VALUE 5e-324
  Infinity 无穷大
  -Infinity 无穷小

- 字符串化
- es6 bigInt 大数类型
## BigInt
   安全 2^53-1 9007199254740991 Number.MAX_SAFE_INTEGER 最大安全整数
   八个字节 64位 64bit 8字节 8*8=64bit 有一位符号位 指数位11位 尾数位52位
   es6 新增的第六种简单数据类型
   后面加n 表示是bigInt类型
