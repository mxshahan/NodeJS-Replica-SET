function updateMenu() {
    //For the top button
    if ($(window).scrollTop() >600){
        $('.topbar').animate({
            'opacity':'1'
        },100);
        $('.topbar').removeClass('topbar-mute')
    }
    else {        
        $('.topbar').animate({
            'opacity':'0'
        },100);
        $('.topbar').addClass('topbar-mute')
    }

    //Reducing the opacity if it is in top
    if(($(window).scrollTop()>5) && ($(window).scrollTop()< $('#header').height()-55)){        
        $('#navbar').animate({
            'opacity' : '0'
        }, 300);
        $('#navbar').addClass('affix-none');
    }
    else {        
        $('#navbar').animate({
            'opacity' : '1'
        }, 300);
        $('#navbar').removeClass('affix-none');
    }

    //Adding affix Class for adding custom background in fixed navbar
    if($(window).scrollTop()>=$('#header').height()-55){    
        $('#navbar').addClass('affix');
    }  
    else{    
        $('#navbar').removeClass('affix');
    }   


    // if($('#timeline').scrollTop()>0){
    //     $('#timeline').animate({
    //         'opacity' : '0'
    //     }, 300);
    //     $('#timeline').addClass('avc');
    // } 


    // $('#editable').html('Web Development');

}

setInterval(updateMenu, 500);

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top-50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
