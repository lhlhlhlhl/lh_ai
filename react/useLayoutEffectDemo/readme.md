# useLayoutEffect

- useEffect
  副作用
  - 当组件渲染完成之后（dom,cssom树构建-》渲染树-》layout树，图层合并交给渲染引擎Blink绘制图片，此时组件渲染完成，useEffect触发）
  - 更新：第二个参数为数组，数组中的值发生改变时，useEffect才会触发，更新副作用
  - 移除：返回一个函数，函数中的代码在组件卸载时执行，否则造成内存的泄漏

- useLayoutEffect
  副作用
  dom更新之后，layout树构建完成，页面渲染之前执行
  阻塞页面的渲染
  - 在页面渲染之前执行

- 能解决什么问题
  防“闪烁”用户体验 bug
  类似“同步”拿到响应式之后的样式