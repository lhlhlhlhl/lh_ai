import{
    ref,
    computed//计算属性，依赖于之前依赖的属性去计算
} from 'vue'

export function useTodo(){
  let title = ref('')//双向绑定
  let todos = ref([
    {
       
        title:'学习vue',
        done:false

    }
  ])
  function addTodo(){
    todos.value.push({
        title:title.value,
        done:false,
    })
    title.value = ""

  }
  function clear(){
    // done为false留下，已完成的清除
    todos.value = todos.value.filter(item=>!item.done)

  }
  // 未完成的todos的数量
  let active = computed(()=>{
    return todos.value.filter((v)=>!v.done).length
  })
  // 所有todos的数量
  let all = computed(()=>{
    return todos.value.length
  })
  let allDone = computed({
    get: function(){
        return active.value === 0
    },
    set:function(value){
        todos.value.forEach(todo=>{
            todo.done = value
        })
    }
 } )




  return {
    title,
    addTodo,
    clear,
    todos,
    active,
    all,
    allDone

  }
}