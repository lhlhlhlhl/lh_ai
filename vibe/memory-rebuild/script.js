// 预设记忆碎片数据（图像/声音路径需替换为实际资源）
const initialFragments = [
    { id: 'A01', type: 'image', src: 'img/fragment1.jpg', relationship: ['B02', 'C03'] },
    { id: 'B02', type: 'audio', src: 'audio/recording1.mp3', relationship: ['A01', 'D04'] },
    { id: 'C03', type: 'image', src: 'img/fragment2.jpg', relationship: ['A01'] },
    { id: 'D04', type: 'audio', src: 'audio/recording2.mp3', relationship: ['B02'] }
];

// 预设错误组合（ID数组）
errorCombinations = [['A01', 'D04'], ['B02', 'C03']];

// 初始化状态
let unlockedIds = JSON.parse(localStorage.getItem('unlockedFragments')) || [];
let sessionErrors = JSON.parse(sessionStorage.getItem('errorFragments')) || [];

// 初始化函数
function init() {
    // 加载思维笔记
    const note = localStorage.getItem('thoughtNote');
    if (note) document.getElementById('thought-note').value = note;

    // 渲染碎片
    renderFragments();

    // 绑定提交按钮事件
    document.getElementById('rebuild-btn').addEventListener('click', handleRebuild);

    // 绑定笔记实时保存
    document.getElementById('thought-note').addEventListener('input', (e) => {
        localStorage.setItem('thoughtNote', e.target.value);
    });
}

// 渲染碎片（核心函数）
function renderFragments() {
    const container = document.getElementById('memory-container');
    const unlockedContainer = document.getElementById('unlocked-fragments');
    container.innerHTML = '';
    unlockedContainer.innerHTML = '';

    // 随机排序未解锁碎片（Fisher-Yates算法）
    const shuffled = initialFragments.filter(f => !unlockedIds.includes(f.id));
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 渲染未解锁碎片
    shuffled.forEach(fragment => {
        const el = createFragmentElement(fragment, false);
        el.addEventListener('click', () => handleFragmentClick(fragment));
        container.appendChild(el);
    });

    // 渲染已解锁碎片（按解锁顺序）
    initialFragments.filter(f => unlockedIds.includes(f.id)).forEach(fragment => {
        const el = createFragmentElement(fragment, true);
        unlockedContainer.appendChild(el);
    });

    // 更新进度条
    const progress = (unlockedIds.length / initialFragments.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// 创建碎片元素
function createFragmentElement(fragment, isUnlocked) {
    const div = document.createElement('div');
    div.className = 'memory-fragment';
    div.dataset.id = fragment.id;
    div.dataset.relationship = fragment.relationship.join(',');

    // 处理干扰内容（错误碎片概率显示噪点）
    const isErrorFragment = sessionErrors.includes(fragment.id) && Math.random() < 0.3;

    if (fragment.type === 'image') {
        const img = document.createElement('img');
        img.src = isErrorFragment ? 'img/noise.png' : fragment.src;
        img.style.width = '100%';
        // 未解锁时添加局部模糊（clip-path示例）
        if (!isUnlocked) {
            img.style.filter = 'blur(2px) hue-rotate(30deg)';
            img.style.clipPath = 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)';
        }
        div.appendChild(img);
    } else {
        const audio = document.createElement('audio');
        audio.src = isErrorFragment ? 'audio/white-noise.mp3' : fragment.src;
        audio.muted = !isUnlocked;
        audio.loop = true;
        if (!isUnlocked) audio.play(); // 未解锁时播放杂音
        div.appendChild(audio);
    }

    return div;
}

// 处理碎片点击
function handleFragmentClick(fragment) {
    if (!unlockedIds.includes(fragment.id)) {
        // 模拟解锁逻辑（实际可扩展为验证条件）
        unlockedIds.push(fragment.id);
        localStorage.setItem('unlockedFragments', JSON.stringify(unlockedIds));
        renderFragments();
    }
}

// 处理重构提交
function handleRebuild() {
    // 获取当前选中的碎片（示例逻辑，需扩展选择逻辑）
    const selectedIds = ['A01', 'B02']; // 实际应获取用户选择的碎片ID
    const isError = errorCombinations.some(comb => 
        comb.every(id => selectedIds.includes(id))
    );

    if (isError) {
        // 触发记忆污染动画
        selectedIds.forEach(id => {
            const el = document.querySelector(`[data-id="${id}"]`);
            el.classList.add('error-fragment');
            el.style.animation = 'errorShake 0.8s cubic-bezier(0.36,0.07,0.19,0.97) both';