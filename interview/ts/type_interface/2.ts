import { type } from "os"
// 接口
interface Person {
  name: string
}
//继承
interface Employee extends Person {
  job: string
}
// 类型声明
type PersonType = {
  name: string
}
// 并集关系，不可继承
type EmployeeType = PersonType & {
  job: string
}

