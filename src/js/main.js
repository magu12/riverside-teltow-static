jQuery(document).ready(function ($) {
    $(window).scroll(function () {

        if ($(window).width() > 700) {
            if ($('.hero__item:eq(0)').offset().top - $(this).scrollTop() <= 0 && $('.hero__item:eq(0)').offset().top - $(this).scrollTop() >= -600) {
                $('.hero__item-bg, .hero__item').removeClass('active hide');
                $('.hero__item:eq(0)').addClass('active').find('.hero__item-bg').addClass('active');
            }
            if ($('.hero__item:eq(1)').offset().top - $(this).scrollTop() <= 450 && $('.hero__item:eq(1)').offset().top - $(this).scrollTop() >= -600) {
                $('.hero__item-bg, .hero__item').removeClass('active hide');
                $('.hero__item:eq(0)').find('.hero__item-bg').addClass('hide');
                $('.hero__item:eq(1)').addClass('active').find('.hero__item-bg').addClass('active');
            }
            if ($('.hero__item:eq(2)').offset().top - $(this).scrollTop() <= 450 && $('.hero__item:eq(2)').offset().top - $(this).scrollTop() >= -600) {
                $('.hero__item-bg, .hero__item').removeClass('active hide');
                $('.hero__item:eq(0)').find('.hero__item-bg').addClass('hide');
                $('.hero__item:eq(1)').find('.hero__item-bg').addClass('hide');
                $('.hero__item:eq(2)').addClass('active').find('.hero__item-bg').addClass('active');
            }
            $('.hero__item .logo').css('opacity', 1 - $(this).scrollTop() / 450);
        }
        /*  $('.hero__item:eq(1) h2.title, .hero__advantages').css('opacity', 0 + $(this).scrollTop()/1300);
         
         $('.hero__item:eq(2) h2.title, .hero__text, .hero .btn').css('opacity', 0 + $(this).scrollTop()); */
    });

    $('.video__content').on('click', function () {
        if ($(this).hasClass('hide')) {
            $(this).removeClass('hide');
            $('.video video').get(0).pause();
        } else {
            $(this).addClass('hide');
            $('.video video').get(0).play();
        }
    });

    var direction = 'to-right';

    $(window).scroll(function () {
        /*  $('.waves svg').each(function () {
             let left = parseInt($(this).css('left'));
             left += 10;
             left += 'px';
             $(this).css('left', left);
             if ($(this).offset().left > $(window).width()) {
                 $(this).css('left', 0);
             }
         }); */

        /* let left = parseInt($('.waves').css('left'));
        console.log(left);
        left += 60;
        left += 'px';
        $('.waves').css('left', left);
        if ( $('.waves').offset().left > -100) {
            $('.waves').css('left', '-5000px');
        } */
        if ($(window).width() > 700) {

            if ($('.waves svg:eq(0)').offset().left < -50 && direction == 'to-right') {
                let left = parseInt($('.waves').css('left'));
                left += 7;
                left += 'px';
                $('.waves').css('left', left);
            } else {
                direction = 'to-left';
            }

            if ($('.waves svg:eq(4)').offset().left > $(window).width() + 50 && direction == 'to-left') {
                let left = parseInt($('.waves').css('left'));
                left -= 7;
                left += 'px';
                console.log(left, 'right');
                $('.waves').css('left', left);
            } else {
                direction = 'to-right';
            }
        }
    });


    $('.agree').on('click', function () {
        $(this).toggleClass('active');
    });


    $('.nav-open').on('click', function () {
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    })




    var $dragMe = $(".dragme"),
        $container = $(".sl-container"),
        $viewAfter = $(".view-after");
    $dragMe.draggable({
        containment: "parent",
        drag: function () {
            $viewAfter.css({
                width: parseFloat($(this).css('left')) + 2
            });
        }
    });
    animateTo("50%");
    /*   $container.on("click", function (event) {
          var eventLeft = event.pageX - $container.offset().left - 15;
          animateTo(eventLeft);
      });*/
    function animateTo(_left) {
        $dragMe.animate({
            left: _left
        }, '0.1s', 'linear');
        $viewAfter.animate({
            width: _left
        }, '0.1s', 'linear');
    }

    $('.hero__item .btn').on('click', function () {
        $('html').animate({
            scrollTop: $("section").eq(7).offset().top + 100
        }, 600);
        return
    })

    $('nav li, footer li').on('click', function () {
        $('.nav-open, .nav').removeClass('active');
        if ($(this).index() == 0) {
            $('html').animate({
                scrollTop: $("section").eq(1).offset().top + 100
            }, 600);
            return
        }
        if ($(this).index() == 1) {
            $('html').animate({
                scrollTop: $("section").eq(2).offset().top + 100
            }, 600);
            return
        }
        if ($(this).index() == 2) {
            $('html').animate({
                scrollTop: $("section").eq(3).offset().top + 100
            }, 600);
            return
        }
        if ($(this).index() == 3) {
            $('html').animate({
                scrollTop: $("section").eq(7).offset().top + 100
            }, 600);
            return
        }
        if ($(this).index() == 4) {
            $('html').animate({
                scrollTop: $("section").eq(8).offset().top
            }, 600);
            return
        }
    });

    $('.wpcf7-form').on('submit', function(e){
        if (!$('.agree').hasClass('active')) {
            e.preventDefault();
            $('.agree').addClass('error');
            setTimeout(()=>{
                $('.agree').removeClass('error');
            }, 1500)
        }
    });


    var swiper = new Swiper(".attractive__slider", {});

});