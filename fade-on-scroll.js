$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            $('.logo, .navigation_links').css({'opacity':(( 380-scroll )/400)+0.4});
        });