function foo() {
    var myName = "极客时间"
    let test1 = 1
    const test2 = 2
    var innerBar = {
        getName:function(){
            console.log(test1)
            return myName
        },
        setName:function(newName){
            myName = newName
        }
    }
    return innerBar
}
var bar = foo()//函数嵌套函数，外部访问时，沿着词法作用域链，找到它申明的时候函数中的变量
// 函数好像有一个背包，里面存放着外层函数的变量
bar.setName("极客邦")
bar.getName()
console.log(bar.getName())