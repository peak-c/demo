$(function(){	
	
	//首次进来加载
	firstEnter();
	function firstEnter(){
		var liindex = $('.title-list li').index('.title-list li');
		/*$('.title-list li').addClass('on').siblings().removeClass('on');*/
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.cont_tab .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	}
	//切换
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.cont_tab .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	
	//hover效果
	$('.product-wrap .product li').hover(function(){
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).find('p > a').css('color','#666666');
	});
	});