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


    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });



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


    $('.adv-item:first-child').addClass('active').find('.adv-item-content').show();

    $('.adv-item-btn').click(function(){
        var th = $(this);
        var parent = th.parents('.adv-item');
        var content = th.siblings('.adv-item-content');

        parent.toggleClass('active');
        content.slideToggle();

        parent.siblings('.adv-item').removeClass('active').find('.adv-item-content').slideUp();
    })

    function heightses() {
        if ($(window).width()>480) {
            $('.project-item-title').matchHeight({byRow: true});
            $('.project-item-desc').matchHeight({byRow: true});
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();


    /** FORMS START*/
    var uPhone = $('.user-phone');
    uPhone.mask("+7 (999) 999-99-99",{autoclear: false});

    uPhone.on('click', function (ele) {
        var needelem = ele.target || event.srcElement;
        needelem.setSelectionRange(4,4);
        needelem.focus();
    });

    $.validate({
        form : '.contact-form',
        scrollToTopOnError: false
    });

    $('input[type="file"]').styler({
        fileBrowse: "Загрузить проект",
        filePlaceholder: "Загрузить проект",
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
    /** FORMS END */
});
