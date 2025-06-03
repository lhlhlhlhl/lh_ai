/**
 * @param{nymber} total
 * @param{nymber} num
 * @return{number[]}
 */
function hongbao(total,num){
    const arr = [];
    let restAmout = total;//剩余金额
    let restNum = num;//剩余人数

    for(let i = 0;i<num-1;i++){
        //Math
        //包装类
        let amount =Math.random( restAmout/restNum*2).toFixed(2);
        //console.log(amount)
        restAmout -= amount;
        restNum--;
        arr.push(amount)

    }
    arr.push(restAmout.toFixed(2))
    // 公平性 
    // 平均值 
    // 随机性
    return arr
}