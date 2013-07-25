
jQuery.noConflict();
/* ><> ><> ~~~ ><> <>< ~~~~ ><> SLIDER ><> ><> ~~~ ><> ><> ~~~~ ><> */
jQuery(document).ready(function(){

//========================== Slide show
	
	jQuery(window).load(function() {
        jQuery('#slider').nivoSlider();
    });
//========================== Floor
jQuery(".slidefloors").jCarouselLite({
                      auto: false,
                      speed: 1000,
                      btnNext: ".arrow1",
                      btnPrev: ".arrow2",
                      visible: 4,
                      scroll: 1
                });
//============================

jQuery(".trainer").jCarouselLite({
                      auto: false,
                      speed: 1000,
                      btnNext: ".next",
                      btnPrev: ".prev",
                      visible: 1,
                      scroll: 1
                });
//$(function(){
// 	var	
// 		$newsTicker = $('.newsticker'),
//        $train = $newsTicker.find('.trainer'),
//        $slides = $newsTicker.find('.trainer > li'),
//        $btns = $('div.buttons'),
//        $nextBtn = $btns.find('.next'),
//        $prevBtn = $btns.find('.prev'),
//        slideWidth = $slides.eq(0).width(),
//        currentSlide = 0,
//        autoPlayDelay = 1000,
//        autoPlayIv,
//        go2slide = function(n){ // go to slide n
//          if(n>=$slides.length) n = 0;
//          if(n<0) n=$slides.length - 1;
//
//          $train.animate({
//            left:n*slideWidth*-1
//          },600);
//          
//          currentSlide = n;
//        },
//        initEvents = function(){ // btns click events
//            $nextBtn.click(nextSlide);
//            $prevBtn.click(prevSlide);
//        },
//        nextSlide = function(){
//          go2slide(currentSlide + 1);
//        },
//        prevSlide = function(){
//          go2slide(currentSlide - 1);
//        },
///*        autoPlay = function(){
//          autoPlayIv = setInterval(nextSlide,autoPlayDelay);
//          
//          $slideshow.mouseover(function(){
//            clearInterval(autoPlayIv);
//          });
//          
//          $slideshow.mouseout(function(){
//            autoPlayIv = setInterval(nextSlide,autoPlayDelay);
//          });
//        },*/
//        initSlideshow = function(){
//            initEvents();
//            go2slide(0);
//            //autoPlay();
//        };
//
//
//    initSlideshow();

	
/* jQuery(".myclass").jCarouselLite({
		     auto: 2000,
			 speed: 1000,
			 visible: 4,
			 scroll: 1
		    });*/
 
 
 });
 
 
 
 
 
 
 
 
 