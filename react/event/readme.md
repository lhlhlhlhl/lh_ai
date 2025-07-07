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
  