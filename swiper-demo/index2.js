let $allButtons = $('.button button')
let length = $allButtons.length
let n = 0
let timer = setTimer()
$allButtons.eq(n%length).trigger('click')

for (let i = 0; i < length; i++) {
    $($allButtons[i]).on('click', function (e) {
        let index = $(e.currentTarget).index()
        let distance = index * -330
        $('#images').css({
            'transform': 'translateX(' + distance + 'px)'
        })
        activeButton($allButtons.eq(index))
    })
}

function setTimer () {
    return setInterval(() => {
        $allButtons.eq(n%length).trigger('click')
        n += 1
    }, 3000)
}

function activeButton($button){
    $button
        .addClass('active')
        .siblings('.active').removeClass('active')
}

$('.wrapper').on('mouseenter', function () {
    clearInterval(timer);
})

$('.wrapper').on('mouseleave', function () {
    timer = setTimer()
})
