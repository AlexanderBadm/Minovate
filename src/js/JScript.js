

// $(document).ready(function(){
//     $('#bxslider').bxSlider({
//         pager: false,
//         slideMargin: 20,
//         pause: 5000,
//         minSlides:1,
//         maxSlides:4,
//         autoDirection: 'next',
//         auto: false,
//         moveSlides: 1,
//         slideWidth: 220,
//         autoDelay: 0,
//         adaptiveHeight:true,
//         responsive: true
//
//     });
// });


//main-slider
$(document).ready(function(){
    $('#main-bxslider').bxSlider({
        pager: false,
        pause: 5000,
        mode:'fade',
        autoDirection: 'next',
        auto: false,
        moveSlides: 1,
        adaptiveHeight:true,
        nextSelector:'#bxslider-main-next',
        prevSelector: '#bxslider-main-prev',
        nextText:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        responsive: true

    });
});
//end main-slider

//block-arrivals
$(document).ready(function(){
    sliderResize();
});
$(window).resize(function(){
    sliderResize();
});
function sliderResize() {
    var slider = $('#bxslider').bxSlider({
        slideWidth:220,
        slideMargin: 20,
        pager: false,
        controls: true,
        speed:500,
        minSlides:4,
        maxSlides: 4,
        responsive:true,
        nextSelector:'#bxslider-next',
        prevSelector: '#bxslider-prev',
        nextText:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        // nextText: '',
        // prevText: '',
        moveSlides: 1


    });
    if ($(window).width()<1024 && $(window).width()>767) {
        slider.reloadSlider({
            slideWidth:220,
            maxSlides: 4,
            pager: false,
            speed:500,
            minSlides:1,
            responsive:true,
            moveSlides:1
        });
    } else if ($(window).width()<769 && $(window).width()>641) {
        slider.reloadSlider({
            slideWidth:155,
            maxSlides: 6,
            pager: false,
            speed:500,
            minSlides:6,
            responsive:true,
            moveSlides:1
        });
    } else if ($(window).width()<640 && $(window).width()>321) {
        slider.reloadSlider({
            slideWidth: 180,
            speed:500,
            pager: false,
            maxSlides: 3,
            responsive:true,
            minSlides:3,
            moveSlides:1
        });
    } else if ($(window).width()<320) {
        slider.reloadSlider({
            speed:500,
            slideWidth: 155,
            maxSlides: 6,
            pager: false,
            arrows:false,
            responsive:true,
            controls:false,
            minSlides:1,
            moveSlides:1
        });
    }
}
//end block-arrivals



$("#slider-price").slider({
    min: 0,
    max: 120,
    values: [36,89],
    range: true,

    stop: function(event, ui) {
        $("input#minCost").val(jQuery("#slider-price").slider("values",0));
        $("input#maxCost").val(jQuery("#slider-price").slider("values",1));
    },
    slide: function(event, ui){
        $("input#minCost").val(jQuery("#slider-price").slider("values",0));
        $("input#maxCost").val(jQuery("#slider-price").slider("values",1));
    }

});
jQuery("input#minCost").change(function(){
    var value1=jQuery("input#minCost ").val();
    var value2=jQuery("input#maxCost").val();
    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        jQuery("input#minCost").val(value1);
    }
    jQuery("#slider-price").slider("values",0,value1);
});
jQuery("input#maxCost").change(function(){
    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();
    if (value2 > 120) {
        value2 = 120; jQuery("input#maxCost").val(120)
    }
    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        jQuery("input#maxCost").val(value2);
    }
    jQuery("#slider-price").slider("values",1,value2);

});
