// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 初始化画布
    const canvas = document.getElementById('main-canvas');
    const ctx = canvas.getContext('2d');
    const dragPreview = document.getElementById('drag-preview');
    
    // 微信风格emoji数据
    const emojiData = {
      smileys: ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "😚", "😙"],
      people: ["👶", "🧒", "👦", "👧", "🧑", "👨", "👩", "🧓", "👴", "👵", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾"],
      animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆"],
      tears: ["💧", "💦", "😭", "😢", "😥", "😓", "🥵", "🥶", "😰", "😨"],
      body: ["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇", "👍", "👎", "✊", "👊"],
      hearts: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟"],
      flowers: ["💐", "🌸", "💮", "🏵️", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷"]
    };
  
    // 画布状态
    const canvasState = {
      elements: [], // 存储画布上的元素
      background: 'canvas', // 背景类型
      isDrawing: false, // 是否正在绘画
      lastX: 0, // 上次绘画位置X
      lastY: 0, // 上次绘画位置Y
      brushSize: 5, // 画笔大小
      brushColor: '#000000', // 画笔颜色
      isErasing: false, // 是否使用橡皮擦
      history: [], // 历史记录
      selectedElement: null, // 当前选中的元素
      scale: 1, // 缩放比例
      draggingElement: null, // 当前拖拽的元素
      dragPreview: null, // 拖拽预览
      isCropping: false, // 是否处于裁剪模式
      cropBox: null, // 裁剪框
    };
    
    // 元素类
    class CanvasElement {
      constructor(emoji, x, y, size = 40) {
        this.emoji = emoji;
        this.x = x;
        this.y = y;
        this.size = size;
        this.dragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.rotation = 0; // 旋转角度（弧度）
        this.lastClickTime = 0; // 上次点击时间
        this.id = Date.now() + Math.random(); // 唯一ID
      }
      
      // 绘制元素
      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, 0, 0);
        ctx.restore();
        
        // 如果被选中，绘制边框
        if (canvasState.selectedElement === this) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.strokeStyle = '#4F46E5';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2 + 5, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }
      
      // 检查点是否在元素内
      isPointInside(x, y) {
        // 考虑旋转
        const dx = x - this.x;
        const dy = y - this.y;
        
        // 旋转后的坐标
        const rotatedX = dx * Math.cos(-this.rotation) - dy * Math.sin(-this.rotation);
        const rotatedY = dx * Math.sin(-this.rotation) + dy * Math.cos(-this.rotation);
        
        const halfSize = this.size / 2;
        return rotatedX >= -halfSize && rotatedX <= halfSize &&
               rotatedY >= -halfSize && rotatedY <= halfSize;
      }
      
      // 获取边界框
      getBounds() {
        const halfSize = this.size / 2;
        return {
          left: this.x - halfSize,
          top: this.y - halfSize,
          right: this.x + halfSize,
          bottom: this.y + halfSize,
          width: this.size,
          height: this.size
        };
      }
    }
    
    // 初始化UI
    function initUI() {
      // 加载表情库
      loadEmojis('smileys', emojiData.smileys);
      loadEmojis('people', emojiData.people);
      loadEmojis('animals', emojiData.animals);
      
      // 加载配饰库
      loadEmojis('tears', emojiData.tears);
      loadEmojis('body', emojiData.body);
      loadEmojis('hearts', emojiData.hearts);
      loadEmojis('flowers', emojiData.flowers);
      
      // 设置标签页切换
      setupTabs();
      
      // 设置默认工具
      setBrushTool();
      setBrushSize(5);
      setBrushColor('#000000');
      setBackground('canvas');
      
      // 添加历史记录
      addHistory();
      
      // 设置拖放功能
      setupDragAndDrop();
    }
    
    // 加载表情到UI
    function loadEmojis(containerId, emojis) {
      const container = document.getElementById(containerId);
      if (!container) return;
      
      container.innerHTML = '';
      
      emojis.forEach(emoji => {
        const emojiElement = document.createElement('div');
        emojiElement.className = 'emoji-item';
        emojiElement.textContent = emoji;
        emojiElement.draggable = true;
        emojiElement.dataset.emoji = emoji;
        container.appendChild(emojiElement);
      });
    }
    
    // 设置标签页切换
    function setupTabs() {
      const tabs = document.querySelectorAll('.tab');
      
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // 移除所有活动状态
          tabs.forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
          
          // 添加当前活动状态
          tab.classList.add('active');
          const targetTab = tab.dataset.tab;
          if (targetTab === 'combine') {
            document.getElementById('combine-tools').classList.add('active');
          } else {
            document.getElementById(`${targetTab}-library`).classList.add('active');
          }
        });
      });
    }
    
    // 设置画布尺寸
    function resizeCanvas() {
      const container = canvas.parentElement;
      const size = Math.min(container.clientWidth, container.clientHeight);
      canvas.width = size * canvasState.scale;
      canvas.height = size * canvasState.scale;
      
      // 更新CSS尺寸
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      
      // 重绘画布内容
      redrawCanvas();
    }
    
    // 页面加载和窗口调整大小时重绘画布
    window.addEventListener('load', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    
    // 绘制背景
    function drawBackground() {
      const scale = canvasState.scale;
      const width = canvas.width;
      const height = canvas.height;
      
      switch(canvasState.background) {
        case 'canvas':
          // 画布纹理
          ctx.fillStyle = '#FFFBEB';
          ctx.fillRect(0, 0, width, height);
          
          // 添加细微的画布纹理
          ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
          for (let i = 0; i < width; i += 10 * scale) {
            for (let j = 0; j < height; j += 10 * scale) {
              ctx.fillRect(i, j, 1 * scale, 1 * scale);
            }
          }
          break;
          
        case 'gradient1':
          const gradient1 = ctx.createLinearGradient(0, 0, width, height);
          gradient1.addColorStop(0, '#FEF3C7');
          gradient1.addColorStop(1, '#FED7AA');
          ctx.fillStyle = gradient1;
          ctx.fillRect(0, 0, width, height);
          break;
          
        case 'gradient2':
          const gradient2 = ctx.createLinearGradient(0, 0, width, height);
          gradient2.addColorStop(0, '#DBEAFE');
          gradient2.addColorStop(1, '#E9D5FF');
          ctx.fillStyle = gradient2;
          ctx.fillRect(0, 0, width, height);
          break;
          
        case 'gray':
          ctx.fillStyle = '#F3F4F6';
          ctx.fillRect(0, 0, width, height);
          break;
          
        case 'lined':
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
          
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
          ctx.lineWidth = 1 * scale;
          
          // 绘制横线
          for (let y = 30 * scale; y < height; y += 30 * scale) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
          }
          break;
          
        case 'dotted':
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, width, height);
          
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
          for (let i = 10 * scale; i < width; i += 20 * scale) {
            for (let j = 10 * scale; j < height; j += 20 * scale) {
              ctx.beginPath();
              ctx.arc(i, j, 1 * scale, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          break;
      }
    }
    
    // 重绘画布
    function redrawCanvas() {
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制背景
      drawBackground();
      
      // 绘制所有元素
      canvasState.elements.forEach(element => {
        element.draw(ctx);
      });
    }
    
    // 添加历史记录
    function addHistory() {
      // 限制历史记录长度
      if (canvasState.history.length > 20) {
        canvasState.history.shift();
      }
      
      // 保存当前状态
      const stateCopy = JSON.parse(JSON.stringify(canvasState.elements));
      canvasState.history.push(stateCopy);
    }
    
    // 撤销操作
    function undo() {
      if (canvasState.history.length === 0) return;
      
      // 恢复上一个状态
      const previousState = canvasState.history.pop();
      canvasState.elements = previousState.map(elementData => {
        const element = new CanvasElement(elementData.emoji, elementData.x, elementData.y, elementData.size);
        element.rotation = elementData.rotation || 0;
        element.id = elementData.id;
        return element;
      });
      canvasState.selectedElement = null;
      redrawCanvas();
    }
    
    // 清空画布
    function clearCanvas() {
      if (confirm('确定要清空画布吗？这将删除所有元素。')) {
        addHistory();
        canvasState.elements = [];
        canvasState.selectedElement = null;
        redrawCanvas();
        
        // 显示操作提示
        setTimeout(() => {
          document.getElementById('canvas-guide').classList.remove('hidden');
        }, 100);
      }
    }
    
    // 保存画布为图片
    function saveCanvas() {
      // 创建临时画布，添加水印
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      
      // 复制主画布内容
      tempCtx.drawImage(canvas, 0, 0);
      
      // 添加水印
      tempCtx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      tempCtx.font = `${12 * canvasState.scale}px sans-serif`;
      tempCtx.textAlign = 'right';
      tempCtx.textBaseline = 'bottom';
      tempCtx.fillText('Emoji Mixer', tempCanvas.width - 10 * canvasState.scale, tempCanvas.height - 10 * canvasState.scale);
      
      // 创建下载链接
      const link = document.createElement('a');
      link.download = 'custom_emoji.png';
      link.href = tempCanvas.toDataURL('image/png');
      link.click();
      
      // 显示保存成功提示
      const toast = document.getElementById('save-toast');
      toast.classList.add('show');
      
      // 3秒后隐藏提示
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
    
    // 分享画布（模拟）
    function shareCanvas() {
      alert('分享功能将在未来版本中实现！');
    }
    
    // 设置背景
    function setBackground(type) {
      addHistory();
      canvasState.background = type;
      
      // 更新UI
      document.querySelectorAll('[data-bg]').forEach(el => {
        if (el.dataset.bg === type) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
      
      redrawCanvas();
    }
    
    // 设置画笔工具
    function setBrushTool() {
      canvasState.isErasing = false;
      
      // 更新UI
      document.getElementById('brush-btn').classList.add('tool-active');
      document.getElementById('eraser-btn').classList.remove('tool-active');
    }
    
    // 设置橡皮擦工具
    function setEraserTool() {
      canvasState.isErasing = true;
      
      // 更新UI
      document.getElementById('brush-btn').classList.remove('tool-active');
      document.getElementById('eraser-btn').classList.add('tool-active');
    }
    
    // 设置画笔大小
    function setBrushSize(size) {
      canvasState.brushSize = size;
    }
    
    // 设置画笔颜色
    function setBrushColor(color) {
      canvasState.brushColor = color;
      
      // 更新UI
      document.querySelectorAll('[data-color]').forEach(el => {
        if (el.dataset.color === color) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
    
    // 处理画布上的点击事件
    function handleCanvasClick(e) {
      // 如果正在绘画模式或裁剪模式，不处理点击
      if (canvasState.isDrawing || canvasState.isCropping) return;
      
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      const x = (e.clientX - rect.left) * scale;
      const y = (e.clientY - rect.top) * scale;
      
      // 检查是否点击了元素
      let clickedElement = null;
      for (let i = canvasState.elements.length - 1; i >= 0; i--) {
        if (canvasState.elements[i].isPointInside(x, y)) {
          clickedElement = canvasState.elements[i];
          break;
        }
      }
      
      // 如果点击了元素，检查是否是双击（删除元素）
      if (clickedElement) {
        // 记录选中的元素
        canvasState.selectedElement = clickedElement;
        
        // 检查是否是双击
        if (clickedElement.lastClickTime && (Date.now() - clickedElement.lastClickTime) < 300) {
          // 双击删除元素
          addHistory();
          const index = canvasState.elements.indexOf(clickedElement);
          if (index !== -1) {
            canvasState.elements.splice(index, 1);
          }
          redrawCanvas();
          canvasState.selectedElement = null;
        } else {
          // 记录点击时间
          clickedElement.lastClickTime = Date.now();
          redrawCanvas(); // 重绘以显示选中状态
        }
      } else {
        // 点击空白处，取消选中
        canvasState.selectedElement = null;
        redrawCanvas();
      }
    }
    
    // 处理画布上的拖拽事件
    function handleCanvasDrag(e) {
      // 如果正在绘画模式或裁剪模式，不处理拖拽
      if (canvasState.isDrawing || canvasState.isCropping) return;
      
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      const x = (e.clientX - rect.left) * scale;
      const y = (e.clientY - rect.top) * scale;
      
      // 如果有选中的元素，移动它
      if (canvasState.selectedElement && canvasState.selectedElement.dragging) {
        canvasState.selectedElement.x = x - canvasState.selectedElement.offsetX;
        canvasState.selectedElement.y = y - canvasState.selectedElement.offsetY;
        redrawCanvas();
      }
    }
    
    // 处理画布上的拖拽结束事件
    function handleCanvasDragEnd() {
      // 如果正在绘画模式或裁剪模式，不处理
      if (canvasState.isDrawing || canvasState.isCropping) return;
      
      // 如果有选中的元素，停止拖拽
      if (canvasState.selectedElement) {
        canvasState.selectedElement.dragging = false;
        addHistory(); // 拖拽结束后添加历史记录
      }
    }
    
    // 处理画布上的拖拽开始事件
    function handleCanvasDragStart(e) {
      // 如果正在绘画模式或裁剪模式，不处理
      if (canvasState.isDrawing || canvasState.isCropping) return;
      
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      const x = (e.clientX - rect.left) * scale;
      const y = (e.clientY - rect.top) * scale;
      
      // 检查是否点击了元素
      let clickedElement = null;
      for (let i = canvasState.elements.length - 1; i >= 0; i--) {
        if (canvasState.elements[i].isPointInside(x, y)) {
          clickedElement = canvasState.elements[i];
          break;
        }
      }
      
      // 如果点击了元素，开始拖拽
      if (clickedElement) {
        canvasState.selectedElement = clickedElement;
        clickedElement.dragging = true;
        clickedElement.offsetX = x - clickedElement.x;
        clickedElement.offsetY = y - clickedElement.y;
      }
    }
    
    // 开始绘画
    function startDrawing(e) {
      // 如果有选中的元素正在拖拽或处于裁剪模式，不处理绘画
      if ((canvasState.selectedElement && canvasState.selectedElement.dragging) || canvasState.isCropping) return;
      
      canvasState.isDrawing = true;
      
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      canvasState.lastX = (e.clientX - rect.left) * scale;
      canvasState.lastY = (e.clientY - rect.top) * scale;
      
      // 隐藏操作提示
      document.getElementById('canvas-guide').classList.add('hidden');
    }
    
    // 绘画
    function draw(e) {
      if (!canvasState.isDrawing) return;
      
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      const x = (e.clientX - rect.left) * scale;
      const y = (e.clientY - rect.top) * scale;
      
      ctx.beginPath();
      ctx.moveTo(canvasState.lastX, canvasState.lastY);
      ctx.lineTo(x, y);
      
      if (canvasState.isErasing) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = canvasState.brushSize * scale + 2; // 橡皮擦稍大一点
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = canvasState.brushColor;
        ctx.lineWidth = canvasState.brushSize * scale;
      }
      
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      
      canvasState.lastX = x;
      canvasState.lastY = y;
    }
    
    // 结束绘画
    function stopDrawing() {
      if (canvasState.isDrawing) {
        canvasState.isDrawing = false;
        addHistory(); // 绘画结束后添加历史记录
      }
    }
    
    // 处理表情元素拖放
    function setupDragAndDrop() {
      // 为所有可拖动的表情元素添加事件监听
      function addDragListeners() {
        document.querySelectorAll('.emoji-item').forEach(item => {
          item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.dataset.emoji);
            item.classList.add('dragging');
            
            // 设置拖拽预览
            canvasState.dragPreview = item.dataset.emoji;
            dragPreview.textContent = canvasState.dragPreview;
            dragPreview.style.display = 'block';
          });
          
          item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            canvasState.dragPreview = null;
            dragPreview.style.display = 'none';
          });
        });
      }
      
      // 初始添加监听器
      addDragListeners();
      
      // 当新的表情元素被加载时，重新添加监听器
      const observer = new MutationObserver(() => {
        addDragListeners();
      });
      
      document.querySelectorAll('.emoji-grid').forEach(grid => {
        observer.observe(grid, { childList: true });
      });
      
      // 为画布容器添加拖放事件监听
      const canvasContainer = document.querySelector('.canvas-container');
      
      canvasContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        canvasContainer.classList.add('dragover');
        
        // 更新拖拽预览位置
        if (canvasState.dragPreview) {
          const rect = canvasContainer.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          dragPreview.style.left = `${x}px`;
          dragPreview.style.top = `${y}px`;
        }
      });
      
      canvasContainer.addEventListener('dragleave', (e) => {
        // 只有当离开容器边界时才移除样式
        if (!canvasContainer.contains(e.relatedTarget)) {
          canvasContainer.classList.remove('dragover');
        }
      });
      
      canvasContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        canvasContainer.classList.remove('dragover');
        
        const rect = canvas.getBoundingClientRect();
        const scale = canvasState.scale;
        const x = (e.clientX - rect.left) * scale;
        const y = (e.clientY - rect.top) * scale;
        
        const emoji = e.dataTransfer.getData('text/plain');
        
        if (emoji) {
          // 添加历史记录
          addHistory();
          
          // 创建新元素
          const element = new CanvasElement(emoji, x, y);
          canvasState.elements.push(element);
          
          // 重绘画布
          redrawCanvas();
          
          // 隐藏操作提示
          document.getElementById('canvas-guide').classList.add('hidden');
        }
        
        // 隐藏拖拽预览
        dragPreview.style.display = 'none';
      });
      
      // 组合工具拖放
      setupCombineDragAndDrop();
    }
    
    // 组合工具拖放
    function setupCombineDragAndDrop() {
      const combineBoxes = document.querySelectorAll('.combine-box');
      
      combineBoxes.forEach(box => {
        box.addEventListener('dragover', (e) => {
          e.preventDefault();
          box.classList.add('dragover');
        });
        
        box.addEventListener('dragleave', () => {
          box.classList.remove('dragover');
        });
        
        box.addEventListener('drop', (e) => {
          e.preventDefault();
          box.classList.remove('dragover');
          
          const emoji = e.dataTransfer.getData('text/plain');
          if (emoji) {
            box.innerHTML = emoji;
            box.dataset.emoji = emoji;
          }
        });
      });
    }
    
    // 缩放画布
    function zoomCanvas(direction) {
      if (direction === 'in' && canvasState.scale < 2) {
        canvasState.scale += 0.25;
      } else if (direction === 'out' && canvasState.scale > 0.25) {
        canvasState.scale -= 0.25;
      } else if (direction === 'reset') {
        canvasState.scale = 1;
      }
      
      // 更新显示
      document.getElementById('zoom-display').textContent = `${Math.round(canvasState.scale * 100)}%`;
      
      // 重设画布大小
      resizeCanvas();
    }
    
    // 处理滚轮缩放元素
    function handleElementZoom(e) {
      if (!canvasState.selectedElement) return;
      
      e.preventDefault();
      
      // 调整元素大小
      const delta = Math.sign(e.deltaY) * -5;
      canvasState.selectedElement.size = Math.max(20, Math.min(100, canvasState.selectedElement.size + delta));
      
      redrawCanvas();
    }
    
    // 处理旋转元素
    function handleElementRotate(e) {
      if (!canvasState.selectedElement || !e.altKey) return;
      
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      const x = (e.clientX - rect.left) * scale;
      const y = (e.clientY - rect.top) * scale;
      
      const dx = x - canvasState.selectedElement.x;
      const dy = y - canvasState.selectedElement.y;
      
      // 计算旋转角度
      canvasState.selectedElement.rotation = Math.atan2(dy, dx);
      
      redrawCanvas();
    }
    
    // 组合表情
    function combineEmojis() {
      const box1 = document.getElementById('combine-box-1');
      const box2 = document.getElementById('combine-box-2');
      const resultBox = document.getElementById('combine-result');
      
      if (!box1.dataset.emoji || !box2.dataset.emoji) {
        alert('请选择两个表情进行组合！');
        return;
      }
      
      // 简单的组合：将两个表情放在一起
      resultBox.innerHTML = box1.innerHTML + box2.innerHTML;
      resultBox.dataset.emoji = box1.dataset.emoji + box2.dataset.emoji;
    }
    
    // 表情组合规则
    const combineRules = {
      // 表情 + 配饰的组合规则
      emotions: {
        '😀': { tears: '😭', hearts: '😍', flowers: '🌸' },
        '😃': { tears: '😢', hearts: '🥰', flowers: '🌺' },
        '😄': { tears: '😅', hearts: '😘', flowers: '🌻' },
        '😁': { tears: '😂', hearts: '😗', flowers: '🌼' },
        '😆': { tears: '🤣', hearts: '😚', flowers: '🌷' },
        '😊': { tears: '😌', hearts: '😙', flowers: '💐' },
        '🙂': { tears: '😔', hearts: '🤗', flowers: '🌹' },
        '😉': { tears: '😏', hearts: '😍', flowers: '🥀' },
        '😇': { tears: '😇', hearts: '🥰', flowers: '🌸' },
        '🥰': { tears: '😭', hearts: '💕', flowers: '💐' },
        '😍': { tears: '😢', hearts: '💖', flowers: '🌹' },
        '🤩': { tears: '😆', hearts: '💘', flowers: '🌺' },
        '😘': { tears: '😗', hearts: '💝', flowers: '🌻' },
        '😗': { tears: '😙', hearts: '💗', flowers: '🌼' },
        '😚': { tears: '😊', hearts: '💓', flowers: '🌷' },
        '😙': { tears: '😌', hearts: '💞', flowers: '💮' }
      },
      
      // 动物 + 表情的组合
      animals: {
        '🐶': ['😊', '😃', '😄', '🥰'],
        '🐱': ['😸', '😺', '😻', '😽'],
        '🐭': ['😋', '🤤', '😍', '🥰'],
        '🐹': ['😊', '🥰', '😚', '😙'],
        '🐰': ['😇', '🥰', '😍', '😘'],
        '🦊': ['😏', '😉', '😈', '🤫'],
        '🐻': ['😴', '😌', '🥰', '😊'],
        '🐼': ['😴', '😌', '🥱', '😇'],
        '🐨': ['😴', '😌', '🥱', '😊'],
        '🐯': ['😤', '😠', '😡', '🤬'],
        '🦁': ['😤', '😠', '🦁', '👑'],
        '🐮': ['😌', '😊', '🥰', '😇'],
        '🐷': ['😋', '🤤', '😍', '🥰'],
        '🐸': ['😊', '😃', '😄', '🤗'],
        '🐵': ['😜', '😝', '🤪', '😛']
      }
    };
    
    // 智能表情组合算法
    function getSmartCombination(emoji1, emoji2) {
      // 检查是否有预定义的组合规则
      if (combineRules.emotions[emoji1]) {
        const rules = combineRules.emotions[emoji1];
        
        // 检查第二个表情是否属于某个类别
        if (emojiData.tears.includes(emoji2)) {
          return emoji1 + (rules.tears || emoji2);
        } else if (emojiData.hearts.includes(emoji2)) {
          return emoji1 + (rules.hearts || emoji2);
        } else if (emojiData.flowers.includes(emoji2)) {
          return emoji1 + (rules.flowers || emoji2);
        }
      }
      
      // 动物 + 表情组合
      if (emojiData.animals.includes(emoji1) && combineRules.animals[emoji1]) {
        const possibleEmotions = combineRules.animals[emoji1];
        if (possibleEmotions.includes(emoji2)) {
          return emoji1 + emoji2;
        } else {
          // 随机选择一个合适的表情
          const randomEmotion = possibleEmotions[Math.floor(Math.random() * possibleEmotions.length)];
          return emoji1 + randomEmotion;
        }
      }
      
      // 反向检查
      if (emojiData.animals.includes(emoji2) && combineRules.animals[emoji2]) {
        const possibleEmotions = combineRules.animals[emoji2];
        if (possibleEmotions.includes(emoji1)) {
          return emoji2 + emoji1;
        } else {
          const randomEmotion = possibleEmotions[Math.floor(Math.random() * possibleEmotions.length)];
          return emoji2 + randomEmotion;
        }
      }
      
      // 如果没有特殊规则，使用基础组合
      return getBasicCombination(emoji1, emoji2);
    }
    
    // 基础组合算法
    function getBasicCombination(emoji1, emoji2) {
      const combinations = [
        emoji1 + emoji2,  // 简单拼接
        emoji2 + emoji1,  // 反序拼接
        emoji1 + '✨' + emoji2,  // 添加特效
        emoji2 + '💫' + emoji1,  // 添加特效反序
        '🌟' + emoji1 + emoji2,  // 前置特效
        emoji1 + emoji2 + '🎉',  // 后置特效
      ];
      
      return combinations[Math.floor(Math.random() * combinations.length)];
    }
    
    // 自动组合表情
    function autoCombineEmojis() {
      const box1 = document.getElementById('combine-box-1');
      const box2 = document.getElementById('combine-box-2');
      const resultBox = document.getElementById('combine-result');
      
      // 如果没有选择表情，随机选择两个
      if (!box1.dataset.emoji || !box2.dataset.emoji) {
        // 随机选择第一个表情（主要从笑脸类别选择）
        const emoji1 = box1.dataset.emoji || emojiData.smileys[Math.floor(Math.random() * emojiData.smileys.length)];
        
        // 随机选择第二个表情（从配饰类别选择）
        const accessoryCategories = ['tears', 'hearts', 'flowers'];
        const randomCategory = accessoryCategories[Math.floor(Math.random() * accessoryCategories.length)];
        const emoji2 = box2.dataset.emoji || emojiData[randomCategory][Math.floor(Math.random() * emojiData[randomCategory].length)];
        
        // 更新UI
        box1.innerHTML = emoji1;
        box1.dataset.emoji = emoji1;
        box2.innerHTML = emoji2;
        box2.dataset.emoji = emoji2;
      }
      
      const emoji1 = box1.dataset.emoji;
      const emoji2 = box2.dataset.emoji;
      
      // 使用智能组合算法
      const result = getSmartCombination(emoji1, emoji2);
      
      resultBox.innerHTML = result;
      resultBox.dataset.emoji = result;
      
      // 添加动画效果
      resultBox.style.transform = 'scale(1.2)';
      resultBox.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        resultBox.style.transform = 'scale(1)';
      }, 300);
    }
    
    // 批量自动组合（生成多个组合选项）
    function generateMultipleCombinations() {
      const box1 = document.getElementById('combine-box-1');
      const box2 = document.getElementById('combine-box-2');
      
      if (!box1.dataset.emoji || !box2.dataset.emoji) {
        alert('请选择两个表情进行组合！');
        return;
      }
      
      const emoji1 = box1.dataset.emoji;
      const emoji2 = box2.dataset.emoji;
      
      // 生成多个组合选项
      const combinations = [
        getSmartCombination(emoji1, emoji2),
        getBasicCombination(emoji1, emoji2),
        getBasicCombination(emoji2, emoji1),
        emoji1 + '💖' + emoji2,
        emoji2 + '⭐' + emoji1,
        '🎨' + emoji1 + emoji2 + '🎨'
      ];
      
      // 去重
      const uniqueCombinations = [...new Set(combinations)];
      
      // 显示选项（可以扩展为弹窗选择）
      const options = uniqueCombinations.slice(0, 3).join('  |  ');
      alert(`组合选项：${options}`);
      
      // 使用第一个组合
      const resultBox = document.getElementById('combine-result');
      resultBox.innerHTML = uniqueCombinations[0];
      resultBox.dataset.emoji = uniqueCombinations[0];
    }
    
    // 获取随机表情
    function getRandomEmoji() {
      const categories = Object.keys(emojiData);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const emojis = emojiData[randomCategory];
      return emojis[Math.floor(Math.random() * emojis.length)];
    }
    
    // 清空组合工具
    function clearCombine() {
      const box1 = document.getElementById('combine-box-1');
      const box2 = document.getElementById('combine-box-2');
      const resultBox = document.getElementById('combine-result');
      
      box1.innerHTML = '<div class="placeholder">拖入第一个表情</div>';
      box2.innerHTML = '<div class="placeholder">拖入第二个表情</div>';
      resultBox.innerHTML = '<div class="placeholder">生成结果</div>';
      
      delete box1.dataset.emoji;
      delete box2.dataset.emoji;
      delete resultBox.dataset.emoji;
    }
    
    // 裁剪功能
    function startCrop() {
      if (!canvasState.selectedElement) {
        alert('请先选择一个表情元素进行裁剪！');
        return;
      }
      
      canvasState.isCropping = true;
      const cropOverlay = document.getElementById('crop-overlay');
      const cropBox = document.getElementById('crop-box');
      
      // 显示裁剪覆盖层
      cropOverlay.style.display = 'block';
      
      // 设置裁剪框位置和大小
      const element = canvasState.selectedElement;
      const bounds = element.getBounds();
      const rect = canvas.getBoundingClientRect();
      const scale = canvasState.scale;
      
      // 计算裁剪框的初始位置（相对于画布容器）
      const containerRect = canvas.parentElement.getBoundingClientRect();
      const canvasOffsetX = rect.left - containerRect.left;
      const canvasOffsetY = rect.top - containerRect.top;
      
      cropBox.style.left = `${canvasOffsetX + bounds.left / scale}px`;
      cropBox.style.top = `${canvasOffsetY + bounds.top / scale}px`;
      cropBox.style.width = `${bounds.width / scale}px`;
      cropBox.style.height = `${bounds.height / scale}px`;
      
      // 添加裁剪框拖拽功能
      setupCropBoxDrag();
      
      // 显示裁剪提示
      showCropInstructions();
    }
    
    // 显示裁剪说明
    function showCropInstructions() {
      const instructions = document.createElement('div');
      instructions.id = 'crop-instructions';
      instructions.style.cssText = `
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 30;
        text-align: center;
      `;
      instructions.innerHTML = `
        <div>拖动裁剪框调整位置，拖动角落调整大小</div>
        <div style="margin-top: 5px; font-size: 12px;">按 Enter 确认裁剪，按 Esc 取消</div>
      `;
      
      document.getElementById('crop-overlay').appendChild(instructions);
    }
    
    // 设置裁剪框拖拽
    function setupCropBoxDrag() {
      const cropBox = document.getElementById('crop-box');
      const cropOverlay = document.getElementById('crop-overlay');
      let isDragging = false;
      let isResizing = false;
      let dragStartX, dragStartY;
      let resizeHandle = null;
      let initialBoxRect = null;
      
      // 移除之前的事件监听器
      const newCropBox = cropBox.cloneNode(true);
      cropBox.parentNode.replaceChild(newCropBox, cropBox);
      
      newCropBox.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        
        if (e.target.classList.contains('crop-handle')) {
          isResizing = true;
          resizeHandle = e.target;
        } else {
          isDragging = true;
        }
        
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        initialBoxRect = newCropBox.getBoundingClientRect();
        
        e.preventDefault();
      });
      
      document.addEventListener('mousemove', (e) => {
        if (!isDragging && !isResizing) return;
        
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        
        if (isDragging) {
          // 拖动裁剪框
          const newLeft = initialBoxRect.left + deltaX - cropOverlay.getBoundingClientRect().left;
          const newTop = initialBoxRect.top + deltaY - cropOverlay.getBoundingClientRect().top;
          
          newCropBox.style.left = `${Math.max(0, newLeft)}px`;
          newCropBox.style.top = `${Math.max(0, newTop)}px`;
        } else if (isResizing && resizeHandle) {
          // 调整裁剪框大小
          const overlayRect = cropOverlay.getBoundingClientRect();
          const currentLeft = initialBoxRect.left - overlayRect.left;
          const currentTop = initialBoxRect.top - overlayRect.top;
          const currentWidth = initialBoxRect.width;
          const currentHeight = initialBoxRect.height;
          
          if (resizeHandle.classList.contains('crop-handle-se')) {
            // 右下角
            const newWidth = Math.max(50, currentWidth + deltaX);
            const newHeight = Math.max(50, currentHeight + deltaY);
            newCropBox.style.width = `${newWidth}px`;
            newCropBox.style.height = `${newHeight}px`;
          } else if (resizeHandle.classList.contains('crop-handle-nw')) {
            // 左上角
            const newWidth = Math.max(50, currentWidth - deltaX);
            const newHeight = Math.max(50, currentHeight - deltaY);
            const newLeft = currentLeft + (currentWidth - newWidth);
            const newTop = currentTop + (currentHeight - newHeight);
            
            newCropBox.style.width = `${newWidth}px`;
            newCropBox.style.height = `${newHeight}px`;
            newCropBox.style.left = `${Math.max(0, newLeft)}px`;
            newCropBox.style.top = `${Math.max(0, newTop)}px`;
          } else if (resizeHandle.classList.contains('crop-handle-ne')) {
            // 右上角
            const newWidth = Math.max(50, currentWidth + deltaX);
            const newHeight = Math.max(50, currentHeight - deltaY);
            const newTop = currentTop + (currentHeight - newHeight);
            
            newCropBox.style.width = `${newWidth}px`;
            newCropBox.style.height = `${newHeight}px`;
            newCropBox.style.top = `${Math.max(0, newTop)}px`;
          } else if (resizeHandle.classList.contains('crop-handle-sw')) {
            // 左下角
            const newWidth = Math.max(50, currentWidth - deltaX);
            const newHeight = Math.max(50, currentHeight + deltaY);
            const newLeft = currentLeft + (currentWidth - newWidth);
            
            newCropBox.style.width = `${newWidth}px`;
            newCropBox.style.height = `${newHeight}px`;
            newCropBox.style.left = `${Math.max(0, newLeft)}px`;
          }
        }
      });
      
      document.addEventListener('mouseup', () => {
        isDragging = false;
        isResizing = false;
        resizeHandle = null;
        initialBoxRect = null;
      });
    }
    
    // 应用裁剪
    function applyCrop() {
      if (!canvasState.isCropping || !canvasState.selectedElement) return;
      
      const cropBox = document.getElementById('crop-box');
      const cropOverlay = document.getElementById('crop-overlay');
      const scale = canvasState.scale;
      
      // 获取裁剪框相对于画布的位置
      const overlayRect = cropOverlay.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const cropBoxRect = cropBox.getBoundingClientRect();
      
      // 计算裁剪区域（相对于画布）
      const cropLeft = (cropBoxRect.left - canvasRect.left) * scale;
      const cropTop = (cropBoxRect.top - canvasRect.top) * scale;
      const cropWidth = cropBoxRect.width * scale;
      const cropHeight = cropBoxRect.height * scale;
      
      // 创建临时画布进行裁剪
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = cropWidth;
      tempCanvas.height = cropHeight;
      const tempCtx = tempCanvas.getContext('2d');
      
      // 设置背景（如果需要）
      tempCtx.fillStyle = '#FFFFFF';
      tempCtx.fillRect(0, 0, cropWidth, cropHeight);
      
      // 绘制被裁剪区域的内容
      tempCtx.drawImage(
        canvas,
        cropLeft, cropTop, cropWidth, cropHeight,
        0, 0, cropWidth, cropHeight
      );
      
      // 创建预览窗口
      showCropPreview(tempCanvas);
    }
    
    // 显示裁剪预览
    function showCropPreview(croppedCanvas) {
      // 创建预览窗口
      const previewModal = document.createElement('div');
      previewModal.id = 'crop-preview-modal';
      previewModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      `;
      
      const previewContent = document.createElement('div');
      previewContent.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 20px;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
      `;
      
      const previewTitle = document.createElement('h3');
      previewTitle.textContent = '裁剪预览';
      previewTitle.style.marginBottom = '15px';
      
      const previewImage = document.createElement('img');
      previewImage.src = croppedCanvas.toDataURL('image/png');
      previewImage.style.cssText = `
        max-width: 300px;
        max-height: 300px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 15px;
      `;
      
      const buttonContainer = document.createElement('div');
      buttonContainer.style.cssText = `
        display: flex;
        gap: 10px;
        justify-content: center;
      `;
      
      const downloadBtn = document.createElement('button');
      downloadBtn.textContent = '下载裁剪图片';
      downloadBtn.className = 'btn btn-primary';
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.download = 'cropped_emoji.png';
        link.href = croppedCanvas.toDataURL('image/png');
        link.click();
        
        document.body.removeChild(previewModal);
        exitCrop();
      };
      
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = '取消';
      cancelBtn.className = 'btn';
      cancelBtn.onclick = () => {
        document.body.removeChild(previewModal);
      };
      
      buttonContainer.appendChild(downloadBtn);
      buttonContainer.appendChild(cancelBtn);
      
      previewContent.appendChild(previewTitle);
      previewContent.appendChild(previewImage);
      previewContent.appendChild(buttonContainer);
      previewModal.appendChild(previewContent);
      
      document.body.appendChild(previewModal);
    }
    
    // 退出裁剪模式
    function exitCrop() {
      canvasState.isCropping = false;
      const cropOverlay = document.getElementById('crop-overlay');
      cropOverlay.style.display = 'none';
      
      // 移除裁剪说明
      const instructions = document.getElementById('crop-instructions');
      if (instructions) {
        instructions.remove();
      }
      
      // 移除预览窗口
      const previewModal = document.getElementById('crop-preview-modal');
      if (previewModal) {
        previewModal.remove();
      }
    }
    
    // 初始化事件监听
    function setupEventListeners() {
      // 画布点击事件
      canvas.addEventListener('click', handleCanvasClick);
      
      // 画布拖拽事件
      canvas.addEventListener('mousedown', handleCanvasDragStart);
      canvas.addEventListener('mousemove', handleCanvasDrag);
      window.addEventListener('mouseup', handleCanvasDragEnd);
      
      // 画笔工具事件
      canvas.addEventListener('mousedown', startDrawing);
      canvas.addEventListener('mousemove', draw);
      window.addEventListener('mouseup', stopDrawing);
      window.addEventListener('mouseout', stopDrawing);
      
      // 元素缩放和旋转
      canvas.addEventListener('wheel', handleElementZoom);
      canvas.addEventListener('mousemove', handleElementRotate);
      
      // 触摸设备支持
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        startDrawing(touch);
      });
      
      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        draw(touch);
      });
      
      canvas.addEventListener('touchend', stopDrawing);
      
      // 背景选择事件
      document.querySelectorAll('[data-bg]').forEach(item => {
        item.addEventListener('click', () => {
          setBackground(item.dataset.bg);
        });
      });
      
      // 工具按钮事件
      document.getElementById('brush-btn').addEventListener('click', setBrushTool);
      document.getElementById('eraser-btn').addEventListener('click', setEraserTool);
      
      // 画笔控制事件
      document.getElementById('brush-size').addEventListener('input', (e) => {
        setBrushSize(parseInt(e.target.value));
      });
      
      document.querySelectorAll('[data-color]').forEach(item => {
        item.addEventListener('click', () => {
          setBrushColor(item.dataset.color);
        });
      });
      
      // 画布控制按钮事件
      document.getElementById('zoom-in-btn').addEventListener('click', () => zoomCanvas('in'));
      document.getElementById('zoom-out-btn').addEventListener('click', () => zoomCanvas('out'));
      document.getElementById('reset-zoom-btn').addEventListener('click', () => zoomCanvas('reset'));
      document.getElementById('clear-btn').addEventListener('click', clearCanvas);
      document.getElementById('undo-btn').addEventListener('click', undo);
      document.getElementById('crop-btn').addEventListener('click', startCrop);
      
      // 修复组合工具事件监听
      document.getElementById('combine-btn').addEventListener('click', combineEmojis);
      document.getElementById('auto-combine-btn').addEventListener('click', autoCombineEmojis);
      document.getElementById('clear-combine-btn').addEventListener('click', clearCombine);
      
      // 保存和分享事件
      document.getElementById('save-btn').addEventListener('click', saveCanvas);
      document.getElementById('share-btn').addEventListener('click', shareCanvas);
      
      // 裁剪覆盖层点击事件（点击空白处退出裁剪）
      document.getElementById('crop-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'crop-overlay') {
          exitCrop();
        }
      });
      
      // ESC键退出裁剪
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && canvasState.isCropping) {
          exitCrop();
        } else if (e.key === 'Enter' && canvasState.isCropping) {
          applyCrop();
        }
      });
    }
    
    // 初始化应用
    function init() {
      initUI();
      setupEventListeners();
      resizeCanvas();
    }
    
    // 启动应用
    init();
  });

