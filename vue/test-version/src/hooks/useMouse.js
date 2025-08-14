import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

export function useMouse(){
    const x = ref(0)
    const y = ref(0)
    const updateMousePosition = (e)=>{
        x.value = e.clientX
        y.value = e.clientY
    }
    onMounted(()=>{//相当于react中的useEffect
  // console.log('组件挂载了')
  window.addEventListener('mousemove',updateMousePosition)
})

onUnmounted(()=>{//相当于react中的useEffect
  // console.log('组件卸载了')
  window.removeEventListener('mousemove',updateMousePosition)
})
    return {
        x,
        y
    }

}
