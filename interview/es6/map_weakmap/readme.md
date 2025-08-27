# map weakmap

- es6 新增的数据结构 作为企业级大型语言需要的内置数据结构

- key 可以是对象
- map(强引用),weakmap(弱引用)

## 垃圾回收（GC）
- 垃圾回收是一套程序，也是语言底层的关键机制
- 内存的动态分配 由操作系统管理
- 引用计数 如果该内存引用计数不为0 则该内存不会回收
- map 强引用
- key = null,map = null来释放内存
- global.gc() 手动触发垃圾回收 回收内存
    - node --expose-gc 1.js 以这个方式运行node
- Map,Set 需要手动考虑内存的开销
    WeakMap,WeakSet 通过弱引用自动实现
    只需要global.gc()便可以回收