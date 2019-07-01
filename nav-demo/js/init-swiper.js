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
//MVC的整个通信流程可以理解为：当用户进入页面点击视图时，视图会通知控制器，然后控制器会对其进行相应的逻辑处理，再然后调用model，将处理完成的数据保存到服务器。
//服务器将数据响应给model，model再将数据返回给控制器，最后控制器更新视图，最后用户看见页面内容改变。
//V: view    视图，即为用户可见区域
//C: controller  控制器，处理逻辑（视图及数据以外的东西）
//M: model   数据，专门处理数据，不对HTML，DOM，CSS以及逻辑进行操作，一般从服务器获取数据和保存数据
