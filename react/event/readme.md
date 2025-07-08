# react 事件机制
 - 监听一个事件
   - addEventListener() DOM2事件
   - DOM 0  耦合了事件和元素 要将事件的交互和元素分开
  
   <a onclick="donSomething()"></a>
   - DOM 1? DOM版本，没有去做事件升级
   - 为什么使用DOM2
    html,css,js各司其职，不建议行内样式
   JS 事件不要用DOM0,html,js耦合在一起了
   如果DOM0 和DOM2 混用，不好维护
   而且addEventListener 具有第三个参数useCapture能力
- addEventlistener(type,listener,useCapture?)
    - 回调函数callback 是异步处理的总称
    - promise .then()
    - async await
    - 监听器：listener
- useCapture false 默认值(_决定在哪个阶段执行事件，false冒泡阶段，true捕获阶段)
页面是由浏览器渲染引擎按像素点画出来的 png
  先捕获 doucument -> 一层层去问
        捕获才知道点了谁？
        先触发父元素
  找到event.target 
        捕获阶段结束，拿到event.target
  冒泡
      从event.target 冒泡到最外层html  回去到根
      事件让他在冒泡阶段执行
      事件在哪个阶段执行

## 事件委托优势 delegation
不能在一推按钮上绑定事件
- 性能优化
   - 极致将事件委托给最外层元素
   react 大型项目开发
   给我们的节点event.target 添加一个唯一属性
- 动态节点的事件
  滚动到底部，一次新增一堆的新元素
  事件委托可以有效解决
- 同一元素同一事件注册多次
  - dom节点
  - event type 事件类型
  - 监听器（回调函数） event loop中
    event 对象
  - useCapture
  - event.preventDefault() 阻止默认行为
     form submit 阻止表单提交，阻止默认行为
     a 阻止跳转，阻止默认行为
  - event.stopPropagation() 阻止冒泡
- 用户交互的便利体验
   - toggle按钮 状态切换
   - 点击页面任何地方可以关闭 方便 stopPropagation
   - 显示区域可以交互 stopPropagation
 