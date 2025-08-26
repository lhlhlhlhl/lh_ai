# 数组上的方法

## 分维度来回答，带上业务场景

- 是否修改原数组，非纯函数，有副作用，要慎用
    push/pop/shift/unshift 栈/队操作
    shift/unshift：中间插入  性能差，需要移动元素（数组是连续的）
    - splice：删除/插入（新增）/替换 
        splice(start,deleteCount,item1,item2...)
        start：开始位置
        deleteCount：删除的元素个数(如果为0就为新增，不为0就为替换)
        item1,item2...：新增的元素（没有则为删除）
    - sort:排序
      会修改原数组，并且返回值也为排序之后的原数组
      排序规则：
      1.如果a-b为true，那么a会排在b的前面
      2.如果a-b为false，那么a会排在b的后面
      3.如果a-b为0，那么a和b的位置不变

- 不会修改原数组的方法，纯函数，推荐多用
    - forEach 无返回值
    - map 有返回新数组
    - 查找类
      es5 提供了indexOf/lastIndexOf方法
      es6 提供了find(查找满足条件的第一个元素)
          findIndex（查找满足条件的第一个元素的索引）方法
      includes：判断数组是否包含某个元素，返回布尔值
      在最近的新版本里es15 2023 新增了findLast/findLastIndex方法
      javaScript 是基于ECMAScript 脚本标准开发的，所以叫es6
      ES5 兼容性好
      ES6 新特性
      ES6+ 对新特性持续关注


      - indexOf/lastIndexOf:查找 遍历元素，返回第一个使回调函数返回真值的元素索引，否则返回-1
      - find:查找 遍历元素，返回第一个使回调函数返回真值的元素索引，否则返回undefined
      - findIndex:查找索引 遍历元素，返回第一个使回调函数返回真值的元素索引，否则返回-1
      - findLast:查找最后一个 从数组的末尾开始遍历，返回第一个使回调函数返回真值的元素，否则返回undefined
      - findLastIndex:查找最后一个索引 从数组的末尾开始遍历，返回第一个使回调函数返回真值的元素索引，否则返回-1

    - 过滤和判定
      filter：过滤 遍历元素，返回所有使回调函数返回真值的元素组成的新数组
      every：判断 遍历元素，返回一个布尔值，只有所有元素都使回调函数返回真值，才返回true，否则返回false
      some：判断 遍历元素，返回一个布尔值，只要有一个元素使回调函数返回真值，就返回true，否则返回false
      any：判断 遍历元素，返回一个布尔值，只要有一个元素使回调函数返回真值，就返回true，否则返回false
      every和some的区别：
      1.every：只有所有元素都使回调函数返回真值，才返回true，否则返回false
      2.some：只要有一个元素使回调函数返回真值，就返回true，否则返回false
      3.any：和some一样，只要有一个元素使回调函数返回真值，就返回true，否则返回false
      4.区别：every和some返回的是布尔值，而any返回的是元素
    - 拼接/裁剪
      concat：拼接
      slice：截取
    - 扁平
      flat：扁平数组，将多维数组转换为一维数组
      flatMap：先映射再扁平数组，将多维数组转换为一维数组
    - 迭代器 iterable
      keys() values() entries()
      keys()：返回键名的遍历器
      values()：返回键值的遍历器
      entries()：返回键值对的遍历器
    - join/toString
      join：将数组转换为字符串
      toString：将数组转换为字符串
    - 归约
      reduce：归约 遍历元素，将数组元素reduce为一个值,数组相加等操作
      reduceRight：从右到左归约 遍历元素，将数组元素reduce为一个值
    - 静态方法
      Array.isArray：判断是否为数组
      Array.from()：将类数组对象或可迭代对象转换为数组
      Array.of：将参数转换为数组

- es6新增方法
- 遍历/查找类/转换类/拼接类/统计类