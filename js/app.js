$(function(){
	$('.toggleAside').click(function(){
		rightContent = $('.content').css('right');
		if(rightContent == '0px'){
			$('.content').animate({
				right: '-300px'
			}, 150);
		}else{
			$('.content').animate({
				right: '0px'
			}, 150);
		}
	});

});

