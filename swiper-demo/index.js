let n;
init();
//核心代码
setInterval(()=>{
    makeLeave(getImg(n)).one('transitionend', (e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImg(n+1))
    n += 1
},3000)
//end

function init() {
    n = 1;
    $('.imgBox> img:nth-child('+ n +')').addClass('current').siblings().addClass('enter')
}
function x(n) {
    if (n>4){
        n = n % 4
        if (n===0){
            n = 4
        }
    }
    console.log(n,'1111111111')
    return n
}
function getImg(n) {
    return $('.imgBox> img:nth-child('+ x(n) +')')
}
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}



