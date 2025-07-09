function CreateCounter(num){
    //对外的接口
    //对内的私有
    this.num=num;//public 公共属性
    //局部变量->私有属性 private
    let count = 0;
    //闭包
    return {
        // num:count,
        increment:()=>{
            count++
        },
        decrement:()=>{
            count--
        },
        getCount: ()=>{
            console.log('count被访问了')
            return count
         }
    }
    

}
// let obj=new CreateCounter(1)
// console.log(obj.num)
const counter = CreateCounter();
console.log(counter.count);

//闭包延长了变量的生命周期
//不直接操作它
counter.increment();
console.log(counter.getCount());