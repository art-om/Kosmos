$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__line slider__line-left" src="images/line_left.svg" alt="line-left">',
        nextArrow: '<img class="slider__line slider__line-right" src="images/line_right.svg" alt="line-right">',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                arrows: false,
              }
            }            
          ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    });
});

// путь к картинкам писать исходя из того что находишься в index.html потому что он подключается