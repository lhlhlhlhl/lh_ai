// 后端逻辑，如何去读取数据库
import {
  NextResponse // res
} from 'next/server' //api server
// ts 是JS的超集
interface Todo {
  id: number;
  text: string;
  completed: boolean;

}
let todos: Todo[] = [
  { id: 1, text: 'todo1', completed: false },
  { id: 2, text: 'todo2', completed: true },
  { id: 3, text: 'todo3', completed: false },
]
todos.push({ id: 4, text: 'todo4', completed: false })
// Restful一切皆资源
// 向用户暴露资源
// method + 资源URL定义规则
export async function GET() {
  return NextResponse.json(todos)
}
export async function POST(request: Request) {
  //获取请求体
  const data = await request.json()
  // 核心的数据，函数的参数，返回值
  const newTodo: Todo = {
    id: +Date.now(),
    text: data.text,
    //typescript 除了强类型外，还有代码提示，代码提示更快更好
    completed: false
  }
  todos.push(newTodo);
  return NextResponse.json(newTodo)

}