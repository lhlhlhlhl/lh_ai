// 声明了一个对象常量
// 内存中开辟一个空间，里面存放了一个对象
// hxt 取址 & 变量名是地址的标记
// js是一个弱类型语言 由值决定变量的类型
// = 赋值 Object
// 对象字面量 JOSN,从字面意义上了解对象
// JS 太灵活，不需要new,通过{}拿到对象[]拿到数组
const xd={
    name:'小东',
    age:20,
    tall:187,
    hometown:'山东临沂',
    isSingle:true,
    sendFlower:function(girl){//Function 函数类型
        console.log(this.name+'送了一束花给'+girl.name);
        girl.receiveFlower(hyc);
    }
};
const xp={
    name:'小彭',// key value String
    age:21,//Number 数值类型
    tall:180,
    hometown:'江西新余',
    isSingle:true,//Boolean 布尔类型
    // 送花
    // 形参
    sendFlower:function(girl){//Function 函数类型
        console.log(this.name+'送了一束花给'+girl.name);
        girl.receiveFlower(pyc);
    }
}

const xm={
    xq:30,//心情
    name:'小美',
    room:'408',
    age:20,
    tall:165,
    hometown:'山东临沂',
    receiveFlower:function(boy){
        console.log(this.name+'收到了'+boy.name+'一束花');
        if(xm.xq>90){
            console.log('硕果走一波');
            return;
        }else{
            console.log('gun~~~~');
        }
    }
}

const xh={
    xq:30,//心情
    name:'小红',
    room:'408',
    age:20,
    tall:165,
    hometown:'江西新余',// 老乡
    //把花送小美，送给小红，都具有receiveFlower这个方法
    //对象互换
    //接口 interface
    receiveFlower:function(boy){//定时器
        if(boy.name === '小彭'){
            console.log('小彭,我们在一起吧');
            return;
           }
        setTimeout(()=>{
            xm.xq=99;
            xm.receiveFlower(boy);
        },3000)
       xm.receiveFlower(boy)
    }

}

// pyc.sendFlower(xh);
xd.sendFlower(xh);
// pyc.sendFlower(xm);