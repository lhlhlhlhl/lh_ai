/**
 * @desc 页面背景切换
 * @author lhh
 * @date 2025-05-10 11:18:50
 */
// JS面向对象 语言
// 事件监听
//弹窗加载完成后执行
// 获取按钮元素并添加点击事件监听器
// 监听DOM内容加载完成事件（确保页面元素已渲染完毕）
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('changeColorBtn').addEventListener('click', async () => {
    // 获取当前窗口中处于激活状态的标签页（返回数组，取第一个元素）
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // 使用Chrome扩展v3的scripting API向目标标签注入脚本
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },  // 指定要注入脚本的标签页ID
      func: () => {  // 定义要在目标页面执行的函数
        document.body.style.backgroundColor = 'green';  // 修改当前页面body的背景颜色为绿色
      }
    });
  });
});