let loveStatus = '单身'; // String类型
loveStatus = 404;       // 突然变成Number
loveStatus = {          // 又变成Object
  code: 200, 
  msg: '热恋中'
};
const boy = {
    name: '小彭',
    skill: 'Ctrl+C/V',
    sendMessage: () => '今晚月色真美'
  };
  
  const girl = {
    name: '校花',
    reply: (msg) => msg.includes('月色') ? '❌好人卡' : '✅'
  };
  
  console.log(girl.reply(boy.sendMessage())); // 输出：❌好人卡