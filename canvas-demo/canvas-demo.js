let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
//画板控制开关
let painting = false;
//第一个点坐标
let startPoint = {x: undefined, y: undefined};
//初始化画布大小
wh();

//特性检测
if (document.body.ontouchstart !== undefined) {
    //触屏设备
    canvas.ontouchstart = function (e) {
        //[0]表示touch第一个触碰点
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        painting = true;
        if (EraserEnabled) {
            ctx.clearRect(x - 20, y - 20, 40, 40)
        }
        startPoint = {x: x, y: y};
    };
    canvas.ontouchmove = function (e) {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        let newPoint = {x: x, y: y};
        if (painting) {
            if (EraserEnabled) {
                ctx.clearRect(x - 15, y - 15, 30, 30)
            } else {
                drawLine(startPoint.x, startPoint.y, newPoint.x, newPoint.y);
            }
            startPoint = newPoint;
        }
    };
    canvas.ontouchend = function () {
        painting = false;
    };
}else{// 非触屏设备
    // 按下鼠标(mouse)
    //鼠标点击事件（onmousedown）
    canvas.onmousedown = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        painting = true;
        if (EraserEnabled) {
            ctx.clearRect(x - 15, y - 15, 30, 30)
        }
        startPoint = {x: x, y: y};
    };

//    滑动鼠标
//    鼠标滑动事件（onmousemove）
    canvas.onmousemove = function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let newPoint = {x: x, y: y};
        if (painting) {
            if (EraserEnabled) {
                ctx.clearRect(x - 15, y - 15, 30, 30)
            } else {
                drawLine(startPoint.x, startPoint.y, newPoint.x, newPoint.y);
            }
            startPoint = newPoint;
        }
    };
//    松开鼠标
//    鼠标松开事件（onmouseup)
    canvas.onmouseup = function () {
        painting = false;
    };
}


/*****工具函数*****/
//    点与点之间连接
function drawLine(xStart, yStart, xEnd, yEnd) {
    //开始绘制路径
    ctx.beginPath();
    //线宽
    ctx.lineWidth = 2;
    //起始位置
    ctx.moveTo(xStart, yStart);
    //停止位置
    ctx.lineTo(xEnd, yEnd);
    //描绘线路
    ctx.stroke();
    //结束绘制
    ctx.closePath();
}

//    canvas与屏幕宽高一致
function wh() {
    let pageWidth = document.documentElement.clientWidth;
    let pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}

//控制橡皮擦开启
let EraserEnabled = false;
eraser.onclick = function () {
    EraserEnabled = true;
    eraser.classList.add('active');
    brush.classList.remove('active');
    canvas.classList.add('xiangpica');
};
brush.onclick = function () {
    EraserEnabled = false;
    brush.classList.add('active');
    eraser.classList.remove('active');
    canvas.classList.remove('xiangpica');
};

//清屏
clear.onclick = function() {
    ctx.fillStyle = '#C5C5C5';
    ctx.fillRect(0,0,canvas.width,canvas.height);
};

//保存
save.onclick = function() {
    let url = canvas.toDataURL('image/jpg');
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = '草稿纸';
    a.target = '_blank';
    a.click()
};

//画笔颜色及鼠标样式
black.onclick = function () {
    ctx.strokeStyle = 'black';
    canvas.classList.add('cursor1');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    EraserEnabled = false;
    eraser.classList.remove('active');
};
red.onclick = function () {
    ctx.strokeStyle = 'red';
    canvas.classList.add('cursor2');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    EraserEnabled = false;
    eraser.classList.remove('active');
};
orange.onclick = function () {
    ctx.strokeStyle = 'orange';
    canvas.classList.add('cursor3');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    EraserEnabled = false;
    eraser.classList.remove('active');
};
green.onclick = function () {
    ctx.strokeStyle = 'green';
    canvas.classList.add('cursor4');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('cursor5');
    canvas.classList.remove('xiangpica');
    EraserEnabled = false;
    eraser.classList.remove('active');
};
blue.onclick = function () {
    ctx.strokeStyle = 'blueviolet';
    canvas.classList.add('cursor5');
    canvas.classList.remove('cursor2');
    canvas.classList.remove('cursor3');
    canvas.classList.remove('cursor4');
    canvas.classList.remove('cursor1');
    canvas.classList.remove('xiangpica');
    EraserEnabled = false;
    eraser.classList.remove('active');
};

