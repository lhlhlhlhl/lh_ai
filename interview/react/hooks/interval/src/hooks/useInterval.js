function useInterval(callback, delay) {
  // 可改变对象
  // 手写定时器
  const savedCallback = useRef();

  useEffect(()=>{
    savedCallback.current = callback;
  }, [callback])
  // 添加定时器
  // 移除定时器
  useEffect(()=>{
    if(delay === null) return;//当delay为空时，不启动定时器
    const tick = ()=> savedCallback.current()
    const id = setInterval(tick,delay)
    return ()=> clearInterval(id)
  }, [delay])
}
export default useInterval;