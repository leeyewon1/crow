$(function () {
    $('#Header .mopen button').on('click', () => {
        $('#Header .gnb').toggleClass('on')
    });


    const MainSlide = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 900,
    });

    $('.main_visual .arrows .left').on('click', () => {
        MainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', () => {
        MainSlide.slideNext();
    });


    const ContentSlide = new Swiper('.visual_content .slide_wrap', {
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 10,
    });

    $('.visual_content .arrows .left').on('click', () => {
        ContentSlide.slidePrev();
    });
    $('.visual_content .arrows .right').on('click', () => {
        ContentSlide.slideNext();
    });


})