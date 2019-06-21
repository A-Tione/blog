let ajax = new XMLHttpRequest()//初始化XMLHttpRequest构造函数
ajax.open('get','http://baidu.com')//设置参数
ajax.send()//发送给http://baidu.com
ajax.onreadystatechange = ()=>{//监听状态的改变
    if (ajax.readyState === 4){//请求体已全部传送完成
        if (ajax.status >= 200 && ajax.status < 300){//判断状态码
            let data = ajax.responseText//拿到json字符串信息
            let obj = JSON.parse(data)//转成js对象
        } else if (ajax.status >= 400){
            console.log('请求失败了')
        }
    }
}