$(document).ready(function(){
    /**
     * mobile-mnu customization
     */
    var mmenu = $('#mobile-mnu');
    var menuName = mmenu.data("name");
    var menuDesc = mmenu.data("description");
    var $mmenu = mmenu.mmenu({
        navbars: [{
            content: [ "<div class='mmenu-logo'><div class='name'>"+menuName+"</div><div class='description'>"+menuDesc+"</div></div>" ],
            height: 3
        }],
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "theme-dark",
            "pagedim-black",
            "position-front",
            "fx-listitems-slide",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-wrapper"
        },
    });

    var mmenuBtn = $(".mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    /**
     * end mobile-mnu customization
     */



    $('.intro-slider').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        margin: 15,
        dots: true,
        animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        mouseDrag: false,
        touchDrag: false,
        // autoplay: true,
    });
    
    
    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
