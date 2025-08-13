let arr1 = [
    {
        name:'张三',
        hobbies:['篮球']
    },
    function(){
        console.log('hello')
    },
    Symbol('123')

]
let arr2 = JSON.parse(JSON.stringify(arr1))
arr2[0].hobbies[0] = '足球'
console.log(arr2,arr1)

