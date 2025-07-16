# 单例模式（设计模式）

## 实现storage,使得该对象为**单例**，基于LocalStorage进行封装。实现方法
setItem(key.value)和getItem(key)
- 分析题目
  实现Storage  类
- 设计模式 design pattern
- 封装
   getItem
   setItem
   (localStorage自带，为什么要封装？)

## 单例
单例是一种设计模式（static getInstance）,高级程序的交流语言。
一个类只能实例化一次
- static属性 instance持有唯一的一次实例
- static getInstance 方法判断instance 并返回
    实例的时候一定要这样
- 性能特别好，好管理

## 实现登入弹窗
- 体验
不用跳转路由，盖在页面上
z-index 层级 display none|block 页面不渲染|渲染
- 性能
90%用户不登入
Modal html css js比较多
推迟到第一次用的时候，单例
复用