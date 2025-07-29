import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
//javaScript会有点问题，主要因为弱类型
//jsx后缀改成tsx


//如何对这个函数进行类型约束？
// const HelloComponent =()=>{
//   //void 空 reactnode
//   return (
//     1
//   )
// }
function App() {
  //编译阶段
  //多了类型申明
  //多写了一些代码 类型声明 代码质量保驾护航
let count:number = 10;
let title:string = 'Hello ts'
const isDone:boolean = false
const list = ['1',2,'3']
const list2:number[] = [1,2,3]
//元祖类型
const list3:[number,string] = [1,'2']
//枚举类型
// enum Color {
//   Red,
//   Green,
//   Blue
// }
// const pColor:Color = Color.Red

//对象的约束
//接口类 分号; 隔开
interface User {
  name:string;
  age:number;
  isSingle?:boolean;
}
const user:User = {
  name:'张三',
  age:18
}
count = 20
  return (
    <>
    {count}
    {title}
    {user.name}
    {/* typescript 很严格 */}
    <HelloComponent name='aaa' />
    </>
  )
}

export default App
