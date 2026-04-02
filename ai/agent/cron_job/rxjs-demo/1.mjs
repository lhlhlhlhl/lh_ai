import {
  from
} from 'rxjs'
// from 可以将数组、对象、Promise 等转换为 Observable 对象

const stream = from([1,2,3])
stream.subscribe((value)=>{
  console.log(value)
})