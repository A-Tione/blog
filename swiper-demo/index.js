let n;
init();

let timer = setInterval(() => {
    afterStatus(thisImg(n)).one('transitionend', (e) => {
        beforeStatus($(e.currentTarget))
    })
    centerStatus(thisImg(n + 1))
    n++
}, 3000)

//visibilitychange 监听是否为当前页面，离开为true，当前为false
document.addEventListener('visibilitychange', ()=>{
    if(document.hidden){//document.hidden为true
        window.clearInterval(timer)//砸掉闹钟
    }else {
        timer = setInterval(() => {
            afterStatus(thisImg(n)).one('transitionend', (e) => {
                beforeStatus($(e.currentTarget))
            })
            centerStatus(thisImg(n + 1))
            n++
        }, 3000)
    }
})

function thisImg(n) {
    return $('.imgBox>img:nth-child(' + x(n) + ')')
}

function x(n) {
    if (n > 4) {
        n = n % 4
        if (n === 0) {
            n = 4
        }
    }
    return n
}

function init() {
    n = 1
    $('.imgBox>img:nth-child(' + n + ')').addClass('center').siblings().addClass('before')
}

function beforeStatus($node) {
    return $node.removeClass('center after').addClass('before')
}

function centerStatus($node) {
    return $node.removeClass('before after').addClass('center')
}

function afterStatus($node) {
    return $node.removeClass('before center').addClass('after')
}