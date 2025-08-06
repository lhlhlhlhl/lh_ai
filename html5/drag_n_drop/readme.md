# html5 drag_n_drop

- html 5 考点
    新的交互相关
- ipad 为何成功？
    用户体验 拖拽体验 很傻瓜 好理解
    google 拖拽式体验
- 媒体查询
    - PC First 的设计
      Mobile First 移动优先 80% 体验
    - 查询相关的媒体（设备） 做适配
      @media(条件 <600px 移动端  <1024px IPAD PC  <1200   1600+ lg大尺寸)
    - 多设备适配 移动时代
- drag and drop 细节
    - 有些元素有默认的drag特性
    比如图片就可以拖拽到别的tab显示
    dragStart事件 preventDefault 取消默认行为
    dragEnd
    - 元素添加dragable="true" 此元素支持html5的drag功能
    - 模拟显示中的用户体验  元素，容器可以drop的
    dragEnter preventDefault 一些样式反馈
    dragOver  preventDefault
    drop 删除、拖拽上传
    dragLeave

