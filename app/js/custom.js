$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

/* viewport width */
$(function(){

	$('.js-open-list').on('click', function(){
		$(this).parent().toggleClass('list-isClosed');
	})


	/* components */
	if($('.clothes-items-slider').length) {
		$('.clothes-items-slider').slick({
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: '.slider-navigations',
			appendDots: '.slider-navigations',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		});
	};

	if($('.js-custom-scroll').length) {
		$(".js-custom-scroll").mCustomScrollbar({
			axis:"y",
			theme:"dark-thin",
		});
	};


	if($('.custom-select').length) {
		$('.custom-select').styler();
	};

	/* components */

});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}

$(window).bind('load', handler);
$(window).bind('resize', handler);



