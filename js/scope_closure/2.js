function bar() {
    var myName = "极客世界"
    let test = 5
    if (1) {
        let myName = "Chrome浏览器"
        console.log(test)
    }
}
function foo() {
    var myName = "极客邦"
    let test = 2
    {//块级作用域
        let test = 3//因为有了花括号，可以重复申明
        bar()
    }
}
var myName = "极客时间"
let myAge = 10
let test = 1
foo()