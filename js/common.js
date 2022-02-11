//메뉴(펼침)
$(document).ready(function(){
	$('.menu01 li').hover(function(){
		$('ul',this).slideDown(400);
		$(this).children('a:first').addClass("hov");
	}, function(){
		$('ul',this).slideUp(200);
		$(this).children('a:first').removeClass("hov");
	});
});


//메뉴(세로펼침)
$(document).ready(function(){
	$('.menu01_2 li').hover(function(){
		$('ul', this).slideDown(400);
		$(this).children('a:first').addClass("hov");
	},function(){
		$('ul', this).slideUp(200);
		$(this).children('a:first').removeClass("hov");
	});
});