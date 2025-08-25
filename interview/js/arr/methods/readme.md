# 数组上的方法

## 分维度来回答，带上业务场景

- 是否修改原数组，非纯函数，有副作用
    push/pop/shift/unshift 栈/队操作
    shift/unshift：中间插入  性能差，需要移动元素（数组是连续的）
    splice：删除/插入（新增）/替换 
      splice(start,deleteCount,item1,item2...)
      start：开始位置
      deleteCount：删除的元素个数(如果为0就为新增，不为0就为替换)
      item1,item2...：新增的元素（没有则为删除）


- es6新增方法
- 遍历/查找类/转换类/拼接类/统计类