# Array 的高级考点

- 怎么认识数组？
   - 可遍历的对象 
- new Array(5)
    类似于c++,固定大小的分配 v8 引擎对arr设计
    - 灵活地扩展，不限类型，背后还要hash的特性
    - 实例化后为 empty*5 key没有释放 for key in 不可以迭代
    - new Array(5).fill(undefined)  统一
- [] 数组字面量
- 静态方法
    - Array.of(1,2,3) `of`为静态方法//以及有了数据
    - Array.from（）//转换，伪数组，填充计算