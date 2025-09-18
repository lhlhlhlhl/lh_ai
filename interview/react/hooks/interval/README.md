用 useRef 保存回调，避免闭包捕获旧值 
callback 闭包了
闭包陷阱使用useRef 可以搞定
useEffect 单独监听 callback,只更新引用，不重启定时器
另一个useEffect 管理定时器，依赖 delay. 暂停定时器 delay = null
delay 变化时自动清除定时器，防止内存泄漏