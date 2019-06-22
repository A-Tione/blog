//封装XMLHttpRequest
window.jQuery.ajax = ({url, method, body, success, fail}) => {
    let ajax = new XMLHttpRequest;
    ajax.open(method, url)
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status >= 200 && ajax.status < 300) {
                success.call(undefined, ajax.responseText)
            } else if (ajax.status >= 400) {
                fail.call(undefined, ajax.responseText)
            }
        }
    }
    ajax.send(body)
}

//点击传参发送ajax
myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/go_api',
        method: 'get',
        success: (e) => {
            console.log(e, '成功了')
        },
        fail: (e) => {
            console.log(e, '失败了')
        }
    })
})
// ----------------------------------------------------------------------------
//用Promise重构 ajax
window.jQuery.ajax = ({url, method, body}) => {
    return new Promise(function (resolve, reject) {
        let ajax = new XMLHttpRequest;
        ajax.open(method, url)
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4) {
                if (ajax.status >= 200 && ajax.status < 300) {
                    resolve.call(undefined, ajax.responseText)
                } else if (ajax.status >= 400) {
                    reject.call(undefined, ajax.responseText)
                }
            }
        }
        ajax.send(body)
    })
}

myButton.addEventListener('click', (e) => {
    window.jQuery.ajax({
        url: '/go_api',
        method: 'get',
    }).then(
        (res)=>{console.log(res,'成功')},
        (err)=>{console.log(err,'失败')}
    )
})