$(function(){
	var wid = window.innerWidth;
	if( wid > 1000 ){
		$('img').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
		});
	}
	$('img').each(function(){
		$(this).attr("src",$(this).attr("src")).css('visibility', 'visible');
	});
});