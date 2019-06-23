!function () {
    let view = document.querySelector('#mySlides')
    let controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            pagination: {el: '.swiper-pagination',},
            navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        }
    }
    controller.init(view)
}.call()

//MVC结构
//V: view    视图，即为用户可见区域
//C: controller  控制器，控制整个视图的行为逻辑
//M: model   模型，整个匿名自执行函数为model，V和C合起来即为一个model。整个页面可由多个MVC组件组合而成
