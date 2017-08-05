$(function(){
	$('.navBtn').hover(function(){
		$(this).addClass('cur');
		$(this).find('span').addClass('on');
		$('.subnav').slideDown();
	},function(){
		$(this).removeClass('cur');
		$(this).find('span').removeClass('on');
		$('.subnav').slideUp();
	});

});