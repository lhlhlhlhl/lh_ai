const endpoint = 'https://api.deepseek.com/chat/completions';
const apiKey = 'sk-9ce093d4a0cd42378a152384ba439fb8'; // 替换成你的真实密钥
const chatbox = document.getElementById('chatbox');
const input = document.getElementById('input');

// 初始系统消息
const messages = [
  { role: 'system', content: '你是一个乐于助人的AI助手，回答简洁明了。' }
];

// 发送消息函数
function sendMessage() {
  const userMessage = input.value;
  if (!userMessage.trim()) return;
  
  // 添加用户消息
  messages.push({ role: 'user', content: userMessage });
  updateChatbox();
  
  // 清空输入框
  input.value = '';
  
  // 调用DeepSeek API
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: messages
    })
  })
  // 处理API响应，需要时间，所以使用.then()异步处理
  .then(response => response.json())
  .then(data => {
    const aiReply = data.choices[0].message.content;  // 提取AI回复
    messages.push({ role: 'assistant', content: aiReply });  // 存储到消息历史
    updateChatbox();  // 刷新聊天界面
  })
}

// 更新聊天框
function updateChatbox() {
  // 清空当前聊天内容（避免重复追加）
  chatbox.innerHTML = '';

  // 遍历所有消息记录
  messages.forEach(msg => {
    // 过滤系统提示消息（仅后台使用）
    if (msg.role === 'system') return;

    // 创建消息容器div
    const div = document.createElement('div');
    // 设置CSS类（便于区分用户/AI样式）
    div.className = msg.role;
    
    // 构建消息文本内容
    div.textContent = `${ 
      msg.role === 'user' 
        ? '👤 你'  // 用户消息前缀
        : '🤖 AI'  // AI消息前缀
    }: ${msg.content}`;

    // 将消息元素添加到聊天框
    chatbox.appendChild(div);
  });

  // 自动滚动到底部（显示最新消息）
  chatbox.scrollTop = chatbox.scrollHeight;
}