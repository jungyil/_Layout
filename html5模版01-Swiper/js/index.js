//*====Powered by ZhengYi===========2016.00.00===*
$(document).ready(function () {

    $("body").css("height", $(document).height() + "px");

    var picArray = [];
    var str = "";
    $("img").each(function () {
        str = $(this).attr("src");
        picArray.push(str);
    });
//    picArray.push("./img/bg01.png");

    $.imageloader({
        urls: picArray,
        smoothing: true,

        onComplete: function () {
            $('.preloaderNum').animate({opacity: 1}, 600);
            $("#load-img").hide();
            $("#wrap").css("opacity", "1");
            $("#music").attr("src", "./img/music.mp3");
        },

        onUpdate: function (pre, img) {
            $('.preloaderLine').css('width', parseInt(pre * 100) + '%');
            if (pre > 1) {
                pre = 1;
            }
            $('.preloaderNum').html(parseInt(pre * 100) + '%');
            if (img) {
//                console.log(img);
            }
        },

        onError: function (err) {
            console.log(err);
        }
    });


    var mySwiper = new Swiper('#wrap', {
        direction: 'vertical',
//        initialSlide :2,

        onInit: function (e) {
            swiperAnimateCache(e); //隐藏动画元素
            swiperAnimate(e); //初始化完成开始动画
        },

        onSlideChangeEnd: function (e) {
            swiperAnimate(e);
        }
    });

    var m = document.getElementById("music");
    m.play();

    $(".sound").bind("touchstart", function (e) {
        if (m.paused) {
            m.play();
            $(".sound").removeClass("i");
        } else {
            m.pause();
            $(".sound").addClass("i");
        }
    });

    $(".page1img6").bind("touchstart",function(){
        $(".share").fadeIn(200);
    });

    $(".close").bind("touchstart",function(){
        $(this).parent().fadeOut(200);
    });

});

