var APP_ID = '6cdlXTFh4OBU1PGaTp7yFc4R-gzGzoHsz';
var APP_KEY = 'PrnMiL9dmp7qc9B9vEESOfK6';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let query = new AV.Query('A_Tione')
query.find().then(e=>{
    let array = e.map(item=> item.attributes)//拿到A_Tione的留言数据
    console.log(array)
    array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = item.name+'：'+item.content
        messageList.appendChild(li)
    })

})

let myForm = document.querySelector('#message')
myForm.addEventListener('submit', function (e) {
    e.preventDefault() //阻止默认事件
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    let Tione = AV.Object.extend('A_Tione');
    let tione = new Tione();
    tione.save({
        'name': name,
        'content': content
    }).then(function(object) {
        let li = document.createElement('li')
        li.innerText = name+'：'+content
        messageList.appendChild(li)
        myForm.querySelector('input[name=name]').value = ''
        myForm.querySelector('input[name=content]').value = ''
        console.log('保存成功')
    })

})
