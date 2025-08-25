# 性能优化

## 重绘重排

- 重绘
  当元素样式改变但不影响布局时，浏览器重新绘制元素的过程，如改变颜色、背景等
- 重排
  DOM元素的尺寸、位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程，如改变元素宽度、高度、位置等
  重排一定会触发重绘（性能开销更大），重绘不一定会触发重排

## DEMO 1 批量修改DOM


```js
// 这样的操作是不对的，会多次操作可能触发多次重排重绘，
// 虽然现代浏览器会合并修改，优化
// 但是可以避免
const el = document.getElementById('myEl')
el.style.width = '100px'
el.style.height = '100px'
el.style.margin = '10px'
// 怎么避免？
// 法一：cssText把css作为文本进行修改
el.style.cssText = 'width: 100px; height: 100px; margin: 10px'
// 法二：改变类名而不是一堆代码
el.className = 'my-class'
```
### 使用文档碎片
批量添加元素时，使用document.createDocumentFragment()优化
```js
const fragment = document.createDocumentFragment()
for(let i = 0;i<10;i++){
  const li = document.createElement('div')
  fragment.appendChild(li)//没有重绘重排，先添加到fragment中

}
document.body.appendChild(fragment)//触发一次重排
```
### 脱离文档流进行操作 把元素先下线
隐藏（display:none,不参与DOM树的构建），操作完成后再上线
```js
const el = document.getElementById('myEl')
el.style.position = 'absolute'//定位
el.style.display = 'none'
// 进行大量的DOM操作
for(let i = 0;i<1000;i++){
  el.appendChild(document.createElement('div'))
}
// 操作完成后
el.style.display = 'block'
el.style.position = 'static'//恢复定位
```

### 缓存布局信息

```js
// offsetTop 读取，每次都会触发重排以获得盒子的布局信息
for(let i =0 ;i<100;i++){
  el.style.top = el.offsetTop + 1 + 'px'
}

// 解决方法
let top = el.offsetTop //缓存布局信息
// 进行批量操作
for(let i =0 ;i<100;i++){
  top++
  el.style.top = top + 'px'
}
```

### 使用transform 代替位置调整
在一个新的图层，去做动画类的操作
它通常能避免触发“重排（reflow）”，并且可以被浏览器提升到独立的合成层（compositing layer），由 GPU 加速处理。
transform 的优势是 避免重排 + GPU 加速合成，而不是“只触发重绘
```js
el.style.left = '100px'
// 不触发重排，通常由 GPU 合成处理，性能更好
el.style.transform = 'translateX(100px)'

```

## 资源的加载优化
  - 图片懒加载
  - 路由懒加载
      代码文件上，code spliting 代码分割，按需加载
  - 资源的预加载
    - prefetch去加载未来可能用到的资源
      <link rel="prefetch" href='/next-page.js'>
    - dns-prefetch 预解析域名
      <link rel="dns-prefetch" href="https://example.com">
    - preload 当前页面必须资源，立即加载
      <link rel="preload" href="/my-image.jpg" as="image">
    - script资源的加载 阻塞页面渲染
      默认是没有的
      async
      defer
      module //功能
      async 异步加载，不阻塞页面其他资源加载，下载后立即执行
        异步加载，立即执行，执行顺序不确定
        适合：不依赖于其他脚本的脚本，广告脚本

      defer 延迟加载，等html解析完成后再执行
        延迟加载，等html解析完成，DOMContentLoaded时间触发前后再执行，执行顺序按照加载顺序
        适合：依赖于其他脚本的脚本，尽快下载某个文件，但是又不希望阻塞页面渲染，vue的script资源
    - webp格式图片（同样的图片清晰度，但是大小更小了）
      图片的优化，显著地减少体积，并质量不受影响
    - 图标字体库
      减少http请求数
## JS执行优化
    - 防抖节流
    - web worker 处理复杂计算
    - requestAnimationFrame 优化动画
    - requestIdleCallback react fiber机制
        schedule 机制
## 框架层优化
    - memo,useMemo,useCallback 避免不必要的渲染
    - shadcn-ui 按需加载组件库
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
        Expires(客户端时间不准确)/Cache-Control(时间准确)
        LastModified  if-modified-since 时间戳 304
        ETag if-none-match 
    - LocalStorage/sessionStorage/cookie
## 网络优化
    - CDN加速（content-delivery-nextwork）
        静态资源资源服务器，分流，会自动缓存文件
        多路复用 启用多域名服务器 img1.xxx.com img2.xxx.com
        浏览器会根据域名，分配到不同的服务器上，并行加载资源，提高加载速度
    - Gzip 内容压缩
    - HTTP 2 多路复用
    - DNS 预解析

## 首屏优化
    - SSR 服务器端渲染
        组件渲染在服务器端就已经完成编译、执行，浏览器端直接显示就好
    - 骨架屏
    - http 2.0 server push 首屏数据推送




    




