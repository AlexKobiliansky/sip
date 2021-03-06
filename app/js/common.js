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



    $('.stocks-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 3,
        margin: 30,
        dots: true,
        autoplay: true,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $('.catalog-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 4,
        dots: true,
        autoplay: false,
        navText: ['', ''],
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            480: {
                items: 2,
                margin: 15
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 4,
                margin: 30
            }
        }
    });

    $('.similars-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 4,
        dots: false,
        autoplay: false,
        navText: ['', ''],
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            480: {
                items: 2,
                margin: 15
            },
            992: {
                items: 3,
                margin: 30
            },
            1200: {
                items: 4,
                margin: 30
            }
        }
    });

    $('.gallery-slider').owlCarousel({
        loop:false,
        nav: true,
        items: 3,
        margin: 15,
        dots: true,
        autoplay: false,
        navText: ['', ''],
        dotsEach: 1,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });



    var $reviewsSlider = $('.reviews-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: false,
        navText: ["", ""],
        autoWidth: true,
        startPosition: 1,
        center: true,
        nav: true,
        responsive: {
            0: {
                margin: 15
            },
            768: {
                margin: 30
            }
        }
    });

    $('.project-slider').owlCarousel({
        loop:false,
        nav:false,
        autoHeight: true,
        items: 1,
        thumbs: true,
        dots: false,
        thumbsPrerendered: true,
        thumbItemClass: 'product-nav',
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
    });

    $('.project-slider').photoswipe({
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    });

    $('.intro-slider').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        margin: 15,
        dots: true,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        mouseDrag: false,
        touchDrag: false,
        // autoplay: true,
    });

    function heightses() {
        if ($(window).width()>480) {
            $('.projects-wrap .project-item-title').matchHeight({byRow: true});
            $('.projects-wrap .project-item-desc').matchHeight({byRow: true});
            $('.catalog-slider .project-item-title').height('auto').equalHeights();
            $('.catalog-slider .project-item-desc').height('auto').equalHeights();
            $('.similars-slider .project-item-title').height('auto').equalHeights();
            $('.similars-slider .project-item-desc').height('auto').equalHeights();
        }

        if ($(window).width()>480) {
            $('.gal-item-title').height('auto').equalHeights();
            $('.gal-item-desc').height('auto').equalHeights();
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    $('.projects-tabs-wrap').tabs();

    $('.adv-item:first-child').addClass('active').find('.adv-item-content').show();

    $(function() {
        $("a[href='#popup-form'], a[href='#project-popup']").magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            fixedBgPos: !0,
            overflowY: "auto",
            closeBtnInside: !0,
            preloader: !1,
            midClick: !0,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in"
        })
    });

    $("a[href='#project-popup']").on('click', function(){
        var projectName = $(this).data('name');

        $('#popup-project-name').attr('value', projectName);
        $('#popup-project-title').text(projectName);
    })






    $('.preloader').fadeOut();

    $('.gallery-slider').magnificPopup({
        mainClass: 'mfp-zoom-in',
        delegate: 'a',
        type: 'image',
        tLoading: '',
        gallery:{
            enabled:true,
        },
        removalDelay: 300,
        callbacks: {
            beforeChange: function() {
                this.items[0].src = this.items[0].src + '?=' + Math.random();
            },
            open: function() {
                $.magnificPopup.instance.next = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                }
                $.magnificPopup.instance.prev = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                }
            },
            imageLoadComplete: function() {
                var self = this;
                setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
            }
        }
    });

    $('.adv-item-btn').click(function(){
        var th = $(this);
        var parent = th.parents('.adv-item');
        var content = th.siblings('.adv-item-content');

        parent.toggleClass('active');
        content.slideToggle();

        parent.siblings('.adv-item').removeClass('active').find('.adv-item-content').slideUp();
    })


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

            $.magnificPopup.open({
                items: {
                    src: '#popup-greeting'
                },
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-request'
            }, 0);


            setTimeout(function() {
                th.find(".btn").removeAttr('disabled').removeClass("disabled");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });
    /** FORMS END */

    /**
     * YOUTUBE SCRIPT
     */
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var videoPlayers = [];
    var i = 0;

    onYouTubeIframeAPIReady = function () {
        $('.video-player .you-player').each(function(){
            var $playerID = $(this).attr("id");
            var $videoID = $(this).parents('.video-player').data("video");
            var $start = $(this).siblings('.start-video');

            $start.attr("data-playern", i);

            $start.on('click', function(){
                var playerN = $(this).attr("data-playern");
                $(this).hide();
                $(this).siblings('.you-player').show();
                $(this).siblings('.thumbnail-container').hide();
                $('.video-text-hide').hide();


                videoPlayers[i] = new YT.Player($playerID, {
                    videoId: $videoID,
                    playerVars: {
                        'autoplay': 0,
                        'rel': 0,
                        'showinfo': 0
                    },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });

                if(videoPlayers[i])
                {
                    var fn = function(){ videoPlayers[i].playVideo(); };
                    setTimeout(fn, 1500);
                }

            });
            i++;
        });
    };

    var p = document.getElementsByClassName("you-player");
    $(p).hide();

    onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.ENDED) {
            $('.you-player').hide();
            $('.start-video').fadeIn('normal');
            $('.thumbnail-container').fadeIn('normal');
            $('.video-text-hide').fadeIn('normal');
        }
    };
    /**
     * end YOUTUBE SCRIPT
     */



    function loadScript(url, callback){
        var script = document.createElement("script");

        if (script.readyState){  // IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  // Другие браузеры
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }


    function initMap() {
        ymaps.ready(function(){
            var mapId = $('#map'),
                attitude = mapId.data("att"),
                longtitude = mapId.data("long"),
                zoom = mapId.data("zoom"),
                marker = mapId.data("marker"),
                map = new ymaps.Map("map", {
                    center: [attitude, longtitude],
                    controls: ['zoomControl'],
                    zoom: zoom
                }),

                myPlacemark = new ymaps.Placemark(map.getCenter(), {}, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: marker,
                    // Размеры метки.
                    iconImageSize: [26, 42],
                });

            map.geoObjects.add(myPlacemark);
        });
    }

    if( $('#map').length )         // use this if you are using id to check
    {
        setTimeout(function(){
            loadScript("https://api-maps.yandex.ru/2.1/?apikey=e470b388-a1d0-4edf-acdc-34b4bc5bedee&lang=ru_RU&loadByRequire=1", function(){
                initMap();
            });
        }, 2000);
    }
});
