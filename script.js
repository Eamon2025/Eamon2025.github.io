// 获取DOM元素
const video = document.getElementById('ad-video');
const tip = document.querySelector('.tip');

// 监听滑动事件（向上滑动超过50px触发）
let startY = 0;

document.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY; // 记录触摸起始位置
});

document.addEventListener('touchend', function(e) {
    const endY = e.changedTouches[0].clientY; // 记录触摸结束位置
    const deltaY = startY - endY; // 计算滑动距离

    // 如果向上滑动超过50px，开始播放视频
    if (deltaY > 50) {
        startVideo();
    }
});

// 开始播放视频
function startVideo() {
    tip.style.display = 'none'; // 隐藏提示文字
    video.style.display = 'block'; // 显示视频
    video.play().catch(error => {
        console.error('视频播放失败:', error);
        // 处理自动播放被阻止的情况（部分浏览器需要用户交互）
        alert('请点击屏幕继续播放');
    });
}

// 监听视频播放结束事件
video.addEventListener('ended', function() {
    window.location.href = 'https://www.baidu.com'; // 跳转百度
});