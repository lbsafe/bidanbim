$(document).ready(function(){
    slider();
    sliderSponsor();
    sliderMedia();
    sliderDetail();
    imgChange1();
    imgBack1();
    imgChange2();
    imgBack2();
    imgChange3();
    imgBack3();
    imgChange4();
    imgBack4();
    imgChange5();
    imgBack5();
    imgChange6();
    imgBack6();
    pageUpBtn();
    searchChange();
    menuChange();
    headerChange();
    menuimg0();
    menuimg1();
    menuimg2();
    menuimg3();
    menuimg4();
    menuimg5();
    menuimg6();
    menuimg7();
    menuimg8();
});

function slider(){
    $('.slider').bxSlider({
        mode: 'fade',
        speed: 300,
        easing : 'ease-in-out', 
        startSlide : 0,
        randomStart : false,
        preloadImages : 'visible',
        mouseDrag : false, 
        infiniteLoop : true,
        hideControlOnEnd : false,
        responsive : true,
        touchEnabled : true,
        swipeThreshold : 50, 
        oneToOneTouch : true, 
        preventDefaultSwipeX: true, 
        preventDefaultSwipeY: false,
        controls: false,
        pager : true,
        auto : true,
        autoControls : true,
        autoDirection : 'next',
        autoHover : true,
        autoDelay : 3000, 
        pause : 4000,
        keyboardEnabled : true,
        stopAutoOnClick : true,
        autoControlsCombine : true,
        ariaHidden : true,
    });
}
function sliderSponsor(){
    $('.sliderSponsor').bxSlider({
        mode: 'horizontal',
        speed: 800,
        easing : 'ease-in-out', 
        startSlide : 0,
        randomStart : false,
        preloadImages : 'visible',
        video : true,
        captions : false, 
        mouseDrag : false, 
        infiniteLoop : true,
        hideControlOnEnd : false,
        responsive : true,
        touchEnabled : false,
        swipeThreshold : 50, 
        oneToOneTouch : true, 
        preventDefaultSwipeX: true, 
        preventDefaultSwipeY: false,
        controls: false,
        pager : false,
        auto : true,
        autoControls : false,
        pause : 2000,
        autoHover : true,
        slideMargin : 0
    });
}
function sliderMedia(){
    $('.sliderMedia').bxSlider({
        mode: 'horizontal',
        speed: 300,
        easing : 'ease-in-out', 
        startSlide : 0,
        randomStart : false,
        preloadImages : 'visible',
        adaptiveHeight : false, 
        adaptiveHeightSpeed : 500,
        captions : false, 
        mouseDrag : false, 
        infiniteLoop : true,
        hideControlOnEnd : false,
        responsive : true,
        touchEnabled : true,
        swipeThreshold : 50, 
        oneToOneTouch : true, 
        preventDefaultSwipeX: true, 
        preventDefaultSwipeY: false,
        controls: true,
        auto : false,
        autoControls : true,
        autoDirection : 'next',
        autoHover : true,
        autoDelay : 3000, 
        pause : 4000,
        keyboardEnabled : false,
        stopAutoOnClick : true,
        autoControlsCombine : true,
        ariaHidden : true,
        pager : false,
        slideMargin : 20,
        maxSlides : 5,
        moveSlides : 1,
        slideWidth : 300,
        shrinkItems : true
    });
}
function sliderDetail(){
    $('.detailSlider').bxSlider({
        mode: 'fade',
        speed: 1000,
        easing : 'ease-in-out', 
        startSlide : 0,
        randomStart : false,
        preloadImages : 'visible',
        video : true,
        captions : false, 
        mouseDrag : false, 
        infiniteLoop : true,
        hideControlOnEnd : false,
        responsive : true,
        touchEnabled : false,
        oneToOneTouch : false, 
        preventDefaultSwipeX: false, 
        preventDefaultSwipeY: false,
        controls: false,
        pager : true,
        pagerCustom : '.thumbPager',
        auto : true,
        stopAutoOnClick : true,
        autoControls : true,
        autoControlsCombine : true,
        pause : 4000,
        autoHover : false,
    });
}
function headerChange(){
    $(document).scroll(function(){
        if($(window).scrollTop() != 0){
            $('header').addClass('headerChange');
        }else{
            $('header').removeClass('headerChange');
        }
    })
}
function searchChange(){
    $("header > div input:first-of-type").on("click", function(){
        if($(this).prop('checked')){
            $("header > div label:first-of-type span").text("close");
            $("header > div label:last-of-type span").css("display", "none");
        } 
        else{
            $("header > div label:first-of-type span").text("search");
            $("header > div label:last-of-type span").css("display", "block");
            }
    });
}
function menuChange(){
    $("header > div input:last-of-type").on("click", function(){
        if($(this).prop('checked')){
            $("header > div label:last-of-type span").text("close");
            $("header > div label:first-of-type span").css("display", "none");
        } 
        else{
            $("header > div label:last-of-type span").text("menu");
            $("header > div label:first-of-type span").css("display", "block");
            }
    });
}
function imgChange1(){
    $(".headOfficeArea div ul li:first-of-type a img").mouseenter(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_07_2.jpg").animate({opacity:1},1000);
    });
}
function imgBack1(){
    $(".headOfficeArea div ul li:first-of-type a img").mouseout(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_07_1.jpg").animate({opacity:1},1000);
    });
}
function imgChange2(){
    $(".headOfficeArea div ul li:nth-of-type(2) a img").mouseenter(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_01_2.jpg").animate({opacity:1},1000);
    });
}
function imgBack2(){
    $(".headOfficeArea div ul li:nth-of-type(2) a img").mouseout(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_01_1.jpg").animate({opacity:1},1000);
    });
}
function imgChange3(){
    $(".headOfficeArea div ul li:nth-of-type(3) a img").mouseenter(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_04_2.jpg").animate({opacity:1},1000);
    });
}
function imgBack3(){
    $(".headOfficeArea div ul li:nth-of-type(3) a img").mouseout(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_04_1.jpg").animate({opacity:1},1000);
    });
}
function imgChange4(){
    $(".headOfficeArea div ul li:nth-of-type(4) a img").mouseenter(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_03_2.jpg").animate({opacity:1},1000);
    });
}
function imgBack4(){
    $(".headOfficeArea div ul li:nth-of-type(4) a img").mouseout(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_03_1.jpg").animate({opacity:1},1000);
    });
}
function imgChange5(){
    $(".headOfficeArea div ul li:nth-of-type(5) a img").mouseenter(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_08_2.jpg").animate({opacity:1},1000);
    });
}
function imgBack5(){
    $(".headOfficeArea div ul li:nth-of-type(5) a img").mouseout(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_08_1.jpg").animate({opacity:1},1000);
    });
}
function imgChange6(){
    $(".headOfficeArea div ul li:last-of-type a img").mouseenter(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_05_2.jpg").animate({opacity:1},1000);
    });
}
function imgBack6(){
    $(".headOfficeArea div ul li:last-of-type a img").mouseout(function(){
        $(this).css('opacity',0).stop().attr("src","images/headOffice/headOffice_05_1.jpg").animate({opacity:1},1000);
    });
}
function menuimg0(){
    $("header > div div.menuPage ul li:first-of-type a").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuBasis.jpg").animate({opacity:1},1000);
    });
}
function menuimg1(){
    $("header > div div.menuPage ul li:nth-of-type(2) a:first-of-type").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuHead.jpg").animate({opacity:1},1000);
    });
}
function menuimg2(){
    $("header > div div.menuPage ul li:nth-of-type(2) a:nth-of-type(2)").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuCouple.jpg").animate({opacity:1},1000);
    });
}
function menuimg3(){
    $("header > div div.menuPage ul li:nth-of-type(2) a:nth-of-type(3)").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuParents.jpg").animate({opacity:1},1000);
    });
}
function menuimg4(){
    $("header > div div.menuPage ul li:nth-of-type(2) a:nth-of-type(4)").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuDress.jpg").animate({opacity:1},1000);
    });
}
function menuimg5(){
    $("header > div div.menuPage ul li:nth-of-type(2) a:last-of-type").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuCueza.jpg").animate({opacity:1},1000);
    });
}
function menuimg6(){
    $("header > div div.menuPage ul li:nth-of-type(3) a:first-of-type").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuSponsor.jpg").animate({opacity:1},1000);
    });
}
function menuimg7(){
    $("header > div div.menuPage ul li:nth-of-type(3) a:last-of-type").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuMedia.jpg").animate({opacity:1},1000);
    });
}
function menuimg8(){
    $("header > div div.menuPage ul li:last-of-type a").mouseenter(function(){
        $("header > div div.menuPage div img").css('opacity',0).stop().attr("src","images/menuBasis.jpg").animate({opacity:1},1000);
    });
}
function pageUpBtn(){
    $(document).scroll(function(){
        if($(window).scrollTop() != 0){
            $('body>a').addClass('btnRotate');
        }else{
            $('body>a').removeClass('btnRotate');
        }
    });
}
