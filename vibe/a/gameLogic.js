// 游戏逻辑类
class TurtleSoupGame {
    constructor() {
        this.currentState = GameState.START;
        this.currentStory = null;
        this.chatHistory = [];
        this.clues = [];
        this.usedHints = 0;
        this.maxHints = 3;
        this.questionCount = 0;
        this.maxQuestions = 50;
    }

    // 初始化游戏
    init() {
        this.bindEvents();
        this.showPage('startPage');
    }

    // 绑定事件监听器
    bindEvents() {
        // 开始游戏
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });

        // 返回首页
        document.getElementById('backToStartBtn').addEventListener('click', () => {
            this.showStartPage();
        });

        // 返回故事选择
        document.getElementById('backToSelectBtn').addEventListener('click', () => {
            this.showStorySelect();
        });

        // 发送问题
        document.getElementById('sendBtn').addEventListener('click', () => {
            this.sendQuestion();
        });

        // 回车发送
        document.getElementById('questionInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendQuestion();
            }
        });

        // 获取提示
        document.getElementById('hintBtn').addEventListener('click', () => {
            this.getHint();
        });

        // 放弃游戏
        document.getElementById('giveUpBtn').addEventListener('click', () => {
            this.giveUp();
        });

        // 线索搜索
        document.getElementById('clueSearchBtn').addEventListener('click', () => {
            this.searchClues();
        });

        // 重新开始
        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.showStorySelect();
        });

        document.getElementById('tryAgainBtn').addEventListener('click', () => {
            this.restartCurrentStory();
        });

        // 返回菜单
        document.getElementById('backToMenuBtn').addEventListener('click', () => {
            this.showStartPage();
        });

        document.getElementById('backToMenuBtn2').addEventListener('click', () => {
            this.showStartPage();
        });
    }

    // 开始游戏
    startGame() {
        this.playClickSound();
        this.currentState = GameState.STORY_SELECT;
        this.generateStoryList();
        this.showPage('storySelectPage');
        this.playBackgroundMusic();
    }

    // 显示开始页面
    showStartPage() {
        this.currentState = GameState.START;
        this.showPage('startPage');
        this.resetGame();
    }

    // 生成故事列表
    generateStoryList() {
        const storyList = document.getElementById('storyList');
        storyList.innerHTML = '';

        gameStories.forEach(story => {
            const storyCard = document.createElement('div');
            storyCard.className = 'story-card';
            storyCard.innerHTML = `
                <h3>${story.title}</h3>
                <p class="story-preview">${story.surface.substring(0, 100)}...</p>
                <button class="btn btn-primary select-story-btn" data-story-id="${story.id}">选择这个故事</button>
            `;
            storyList.appendChild(storyCard);
        });

        // 绑定故事选择事件
        document.querySelectorAll('.select-story-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const storyId = e.target.getAttribute('data-story-id');
                this.selectStory(storyId);
            });
        });
    }

    // 选择故事
    selectStory(storyId) {
        this.currentStory = gameStories.find(story => story.id === storyId);
        this.currentState = GameState.PLAYING;
        this.resetGameData();
        this.showGamePage();
    }

    // 显示故事选择页面
    showStorySelect() {
        this.currentState = GameState.STORY_SELECT;
        this.generateStoryList();
        this.showPage('storySelectPage');
    }

    // 显示游戏页面
    showGamePage() {
        document.getElementById('storyTitle').textContent = this.currentStory.title;
        document.getElementById('storySurface').textContent = this.currentStory.surface;
        this.showPage('gamePage');
        this.addSystemMessage('欢迎来到海龟汤推理游戏！请根据汤面内容向我提问，我只能回答"是"或"不是"。');
    }

    // 重置游戏数据
    resetGameData() {
        this.chatHistory = [];
        this.clues = [];
        this.usedHints = 0;
        this.questionCount = 0;
        this.updateChatHistory();
        this.updateCluesList();
    }

    // 重置整个游戏
    resetGame() {
        this.currentStory = null;
        this.resetGameData();
    }

    // 重新开始当前故事
    restartCurrentStory() {
        if (this.currentStory) {
            this.resetGameData();
            this.showGamePage();
        }
    }

    // 发送问题
    sendQuestion() {
        const input = document.getElementById('questionInput');
        const question = input.value.trim();

        if (!question) {
            alert('请输入问题！');
            return;
        }

        if (this.questionCount >= this.maxQuestions) {
            alert('已达到最大问题数量限制！');
            return;
        }

        input.value = '';
        this.questionCount++;

        // 添加用户问题到聊天历史
        this.addUserMessage(question);

        // 显示加载状态
        this.showLoading();

        // 模拟AI思考时间
        setTimeout(() => {
            const response = this.getAIResponse(question);
            this.addAIMessage(response.text, response.type);
            this.hideLoading();

            // 如果回答了关键问题，添加到线索
            if (response.type === AgentResponseType.YES) {
                this.addClue(question, '是');
            } else if (response.type === AgentResponseType.NO) {
                this.addClue(question, '不是');
            }

            // 检查是否解密成功
            this.checkWinCondition();
        }, 1000 + Math.random() * 2000);
    }

    // 获取AI响应
    getAIResponse(question) {
        const story = this.currentStory;
        const lowerQuestion = question.toLowerCase();

        // 检查问题是否与故事相关
        if (this.isIrrelevantQuestion(lowerQuestion)) {
            return {
                text: '这个问题与当前故事无关，请提问与故事相关的问题。',
                type: AgentResponseType.IRRELEVANT
            };
        }

        // 基于关键线索判断答案
        for (let clue of story.keyClues) {
            if (this.questionMatchesClue(lowerQuestion, clue)) {
                return {
                    text: '是的。',
                    type: AgentResponseType.YES
                };
            }
        }

        // 检查否定性问题
        if (this.isNegativeQuestion(lowerQuestion, story)) {
            return {
                text: '不是。',
                type: AgentResponseType.NO
            };
        }

        // 默认回答
        const responses = ['是的。', '不是。'];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseType = randomResponse === '是的。' ? AgentResponseType.YES : AgentResponseType.NO;

        return {
            text: randomResponse,
            type: responseType
        };
    }

    // 检查问题是否与线索匹配
    questionMatchesClue(question, clue) {
        const clueKeywords = this.extractKeywords(clue);
        return clueKeywords.some(keyword => question.includes(keyword));
    }

    // 检查是否为否定性问题
    isNegativeQuestion(question, story) {
        // 这里可以添加更复杂的逻辑来判断否定性问题
        const negativeKeywords = ['不是', '没有', '不会', '不能', '不在'];
        return negativeKeywords.some(keyword => question.includes(keyword));
    }

    // 检查问题是否无关
    isIrrelevantQuestion(question) {
        const irrelevantKeywords = ['天气', '股票', '新闻', '体育', '政治'];
        return irrelevantKeywords.some(keyword => question.includes(keyword));
    }

    // 提取关键词
    extractKeywords(text) {
        // 简单的关键词提取，实际应用中可以使用更复杂的NLP技术
        return text.split(/[，。！？\s]+/).filter(word => word.length > 1);
    }

    // 获取提示
    getHint() {
        if (this.usedHints >= this.maxHints) {
            alert('已用完所有提示！');
            return;
        }

        this.playHintSound();
        const hint = this.currentStory.hints[this.usedHints];
        this.usedHints++;

        this.addSystemMessage(`💡 提示 ${this.usedHints}/${this.maxHints}: ${hint}`);
        this.addClue(`提示${this.usedHints}`, hint);
    }

    // 放弃游戏
    giveUp() {
        if (confirm('确定要放弃游戏吗？')) {
            this.currentState = GameState.FAILED;
            this.showFailPage();
        }
    }

    // 显示失败页面
    showFailPage() {
        document.getElementById('failStoryTruth').textContent = this.currentStory.truth;
        this.showPage('failPage');
    }

    // 检查胜利条件
    checkWinCondition() {
        // 简单的胜利条件：回答了足够多的关键问题
        const keyClueCount = this.clues.filter(clue => 
            clue.answer === '是' && this.currentStory.keyClues.some(keyClue => 
                this.questionMatchesClue(clue.question.toLowerCase(), keyClue)
            )
        ).length;

        if (keyClueCount >= Math.ceil(this.currentStory.keyClues.length * 0.6)) {
            setTimeout(() => {
                this.currentState = GameState.SUCCESS;
                this.showSuccessPage();
            }, 1000);
        }
    }

    // 显示成功页面
    showSuccessPage() {
        this.playSuccessSound();
        document.getElementById('storyTruth').textContent = this.currentStory.truth;
        this.showPage('successPage');
    }

    // 添加用户消息
    addUserMessage(message) {
        this.chatHistory.push({
            type: 'user',
            message: message,
            timestamp: new Date()
        });
        this.updateChatHistory();
    }

    // 添加AI消息
    addAIMessage(message, responseType) {
        this.chatHistory.push({
            type: 'ai',
            message: message,
            responseType: responseType,
            timestamp: new Date()
        });
        this.updateChatHistory();
    }

    // 添加系统消息
    addSystemMessage(message) {
        this.chatHistory.push({
            type: 'system',
            message: message,
            timestamp: new Date()
        });
        this.updateChatHistory();
    }

    // 更新聊天历史显示
    updateChatHistory() {
        const chatHistory = document.getElementById('chatHistory');
        chatHistory.innerHTML = '';

        this.chatHistory.forEach(chat => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${chat.type}`;
            
            const timeStr = chat.timestamp.toLocaleTimeString();
            let icon = '';
            
            switch(chat.type) {
                case 'user':
                    icon = '👤';
                    break;
                case 'ai':
                    icon = '🤖';
                    break;
                case 'system':
                    icon = '💬';
                    break;
            }

            messageDiv.innerHTML = `
                <div class="message-header">
                    <span class="message-icon">${icon}</span>
                    <span class="message-time">${timeStr}</span>
                </div>
                <div class="message-content">${chat.message}</div>
            `;

            chatHistory.appendChild(messageDiv);
        });

        // 滚动到底部
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // 添加线索
    addClue(question, answer) {
        this.clues.push({
            question: question,
            answer: answer,
            timestamp: new Date()
        });
        this.updateCluesList();
    }

    // 更新线索列表
    updateCluesList() {
        const cluesList = document.getElementById('cluesList');
        cluesList.innerHTML = '';

        this.clues.forEach((clue, index) => {
            const clueDiv = document.createElement('div');
            clueDiv.className = 'clue-item';
            clueDiv.innerHTML = `
                <div class="clue-question">Q${index + 1}: ${clue.question}</div>
                <div class="clue-answer">A: ${clue.answer}</div>
            `;
            cluesList.appendChild(clueDiv);
        });
    }

    // 搜索线索
    searchClues() {
        const searchTerm = document.getElementById('clueSearchInput').value.toLowerCase();
        const clueItems = document.querySelectorAll('.clue-item');

        clueItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.backgroundColor = '#fff3cd';
            } else {
                item.style.display = searchTerm ? 'none' : 'block';
                item.style.backgroundColor = '';
            }
        });
    }

    // 显示页面
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    // 显示加载状态
    showLoading() {
        document.getElementById('loadingOverlay').style.display = 'flex';
    }

    // 隐藏加载状态
    hideLoading() {
        document.getElementById('loadingOverlay').style.display = 'none';
    }

    // 播放背景音乐
    playBackgroundMusic() {
        const bgMusic = document.getElementById('bgMusic');
        bgMusic.volume = 0.3; // 设置音量
        bgMusic.play().catch(e => {
            console.log('音频播放失败:', e);
        });
    }

    // 播放点击音效
    playClickSound() {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.volume = 0.5;
            clickSound.currentTime = 0;
            clickSound.play().catch(e => {
                console.log('点击音效播放失败:', e);
            });
        }
    }

    // 播放成功音效
    playSuccessSound() {
        const successSound = document.getElementById('successSound');
        if (successSound) {
            successSound.volume = 0.6;
            successSound.currentTime = 0;
            successSound.play().catch(e => {
                console.log('成功音效播放失败:', e);
            });
        }
    }

    // 播放提示音效
    playHintSound() {
        const hintSound = document.getElementById('hintSound');
        if (hintSound) {
            hintSound.volume = 0.4;
            hintSound.currentTime = 0;
            hintSound.play().catch(e => {
                console.log('提示音效播放失败:', e);
            });
        }
    }

    // 停止背景音乐
    stopBackgroundMusic() {
        const bgMusic = document.getElementById('bgMusic');
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
}

// 导出游戏类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TurtleSoupGame;
}

