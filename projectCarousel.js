$(function(){
    $('.carouselItem').eq(0).addClass('active');
    let total = $('.carouselItem').length;
    let current = 0;
    $('#moveRight').on('click', function(){
        let next = current;
        current = current+1;
        setSlide(next, current)
    });

    $('#moveLeft').on('click', function () {
        let prev = current;
        current = current - 1;
        setSlide(prev, current);
    });
    function setSlide(prev, next) {
        let slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        $('.carouselItem').eq(prev).removeClass('active');
        $('.carouselItem').eq(slide).addClass('active');
        setTimeout(function () {

        }, 800);
    }

});