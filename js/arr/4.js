const names = Array.of('a','b','c');//明确每一项时使用
//console.log(names);
names.forEach(name =>{
    if(name === 'b'){//b
        console.log('hhhhhh');
        return;
    }
    console.log('Processing:'+name);//a b c
})