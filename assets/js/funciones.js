$(document).ready(function(){



    /* $('.fa-bars').click(function(){
        var iteration2;
        iteration2 = $(this).data('iteration') || 1;
        switch (iteration2) {
            case 1:
                $(this).parent().addClass('activo');
                $(this).addClass('activar');
                break;
            case 2:
                $(this).parent().removeClass('activo');
                $(this).removeClass('activar');
                break;
        }
        iteration2++;
        if (iteration2 > 2) {
            iteration2 = 1;
        }
        return $(this).data('iteration', iteration2);
    }); */


    var sticky_navigation_offset_top = $('#s2').offset().top - 50;

    $('#dosdon').css('height',sticky_navigation_offset_top);
    $('#s1').css('height',sticky_navigation_offset_top);
    $('#s4 .tabla').css('height',sticky_navigation_offset_top);
    $('#s7').css('height',sticky_navigation_offset_top);
    $('#s16').css('height',sticky_navigation_offset_top);

    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) {
            $('#barra').addClass('activens');
            $('#header').addClass('activens');
        } else {
            $('#barra').removeClass('activens');
            $('#header').removeClass('activens');
            $('#barra').removeClass('activo');
            $('.fa-bars').attr('iteration',1);
            $('.fa-bars').removeClass('activar');
        }
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function() {
        sticky_navigation();
    });

    /* slide stick


    $('.items li a').click(function(event){
        event.preventDefault();
        var usaras = $(this).attr('href');
        var medidos = $(''+usaras+'').offset();
        var medidos2 = medidos.top;
        $('body').animate({scrollTop: medidos2+'px'},300);
        $('.items li').removeClass('active');
        $(this).parent().addClass('active');
    }); */

    /* vimeo */


    var iframe = $('#vimeo-player')[0];
    var player = $f(iframe);

    $('#stop').click(function() {
        player.api('pause');
    });

    $('.baton').click(function(){
        player.api('play');
        $(this).parent().fadeOut();
    })

    $('.items li a').qtip({
        position: {
            my: 'left center',  // Position my top left...
            at: 'right center'
        },
        style: {
            classes: 'qtip-dark qtip-shadow'
        }
    });

    $('.tabbed li').on('click',function(){
        var movere = $(this).attr('rel');
        var deslizare = $(this).index();
        var dor = deslizare+1;

        $('.tabbed li').removeClass('active');
        $(this).addClass('active');
        $('.burd_').removeClass('insp');
        $('.burd_').removeClass('insp2');
        $('.burd_').removeClass('insp3');
        $('.burd_').removeClass('insp4');
        $('.burd_').removeClass('insp5');
        $('.burd_').removeClass('insp6');
        $('.burd_').removeClass('insp7');
        $('.burd_').addClass(movere);
        $('.compt').cycle('goto', deslizare);
    });

/*scrollspy*/


    // Cache selectors
    var lastId,
        topMenu = $("#header"),
        topMenuHeight = topMenu.outerHeight()-100,
        topMenuHeight2 = topMenu.outerHeight(),
    // All list items
        menuItems = $(".items").find("a"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight2;
        if(fromTop >= 13741){
               $('.roud').addClass('activo');
        }else{
            $('.roud').removeClass('activo');
        }

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
        }
    });

    /* scroll spy */

    $('#trager').toggle(function(){
        $('#barra').addClass('activans');
        $(this).addClass('moverse');
    }, function(){
        $('#barra').removeClass('activans');
        $(this).removeClass('moverse');
    });


});