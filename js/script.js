$(document).ready(function() {

	//Smooth Scroll
	/*$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
            if(this.className=='right carousel-control' || this.className=='left carousel-control'){
            	return;
			}
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }

		});
	});*/


	// Main Menu
	$('#main-nav').affix({
		offset: {
			top: $('header').height()
		}
	});


	// Top Search
	$("#ss").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('current');
		$(".search-form").toggleClass('visible');
	});


	//Slider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		pauseOnAction: false,
	});

	var containerPosition = $('.container').offset();
	var positionPad = containerPosition.left + 15;

	$('#slider').find('.caption').css({
		left: positionPad + 'px',
		marginTop: '-' + $('.caption').height() / 2 + 'px'
	});


	// number effect
	$('.about-bg-heading').one('inview', function(event, visible) {
		if (visible == true) {
			$('.count').each(function() {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 5000,
					easing: 'swing',
					step: function(now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});


    //audio
    var ap1 = new APlayer({
        element: document.getElementById('player1'),
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#e6d0b2',
        preload: 'metadata',
        mode: 'circulation',
        music: {
            title: 'Preparation English for today',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'audio/horse.ogg',
            pic: 'images/Preparation.jpg'
        }
    });

    /*//slide
    $('#media').carousel({
        pause: true,
        interval: 7000,
    });
*/

    // prettyPhoto
    $("a[data-pretty^='prettyPhoto']").prettyPhoto();

    // cache container
    var $container = $('#portfolio-wrap');
    $.browser.safari = ($.browser.webkit && !(/chrome/.test(navigator.userAgent.toLowerCase())));

    if($.browser.safari){
        // initialize isotope
        $container.isotope({
            animationEngine : 'jquery',
            animationOptions: {
                duration: 200,
                queue: false
            },
            layoutMode: 'fitRows'
        });
    } else {
        $container.isotope({
            animationEngine : 'best-available',
            animationOptions: {
                duration: 200,
                queue: false
            },
            layoutMode: 'fitRows'
        });

        $(window).resize(function() {
            $container.isotope('reLayout');
        });
    }
    // filter items when filter link is clicked
    $('#filters a').click(function(){
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });

    // flexslider main
    $('#main-flexslider').flexslider({
        animation: "swing",
        direction: "vertical",
        slideshow: true,
        slideshowSpeed: 3500,
        animationDuration: 1000,
        directionNav: true,
        prevText: '<i class="icon-angle-up icon-2x"></i>',
        nextText: '<i class="icon-angle-down icon-2x active"></i>',
        controlNav: false,
        smootheHeight:true,
        useCSS: false
    });
});