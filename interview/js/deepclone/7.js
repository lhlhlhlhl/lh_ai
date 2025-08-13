// 怎么用的 参数默认值
//默认值，用户会传的，Object.assign 收入囊中
//合并参数
//目标对象是{}空对象 合并用户传参和默认参数 合并配置文件对象 
//options是会传入的对象
function createUser(options){
    const defaults ={
        name:'张三',
        age:18,
        idAdmin:false
    }
    const config = Object.assign({},defaults,options)//options为用户传入的数据，更加重要，所以放在后面，可以覆盖默认值
    console.log(config)
}
createUser({name:'aa',bb:'nn'})

const baseConfig ={api:'/api',timeout:500}
const userConfig ={debug:true,timeout:1000}
const config = Object.assign({},baseConfig,userConfig)
console.log(config)
