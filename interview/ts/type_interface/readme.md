# type 和 interface

- 相同点
    - 都可以描述一个对象或者函数
    - 都允许扩展
- 不同点
    - 当我们要编写继承类的时候，interface只要extends就好，type需要使用& 并集
    - interface 可以重复声明，会自动合并，type 不能重复声明
    - type 可以用于定义基础类型、联合类型、元组等，interface 只能描述对象结构（函数、类）
    - type支持简单类型的别名,interface不可以
    - interface和type在申明函数类型上有区别

