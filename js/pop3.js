define(function(){

var html =
'<div class="box" id="pop-box">'
+'	<div class="shade"></div>'
+'	<div class="ask-wrap center">'
+'		<div class="ask-top">'
+'			<div class="ask-cross"></div>'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>原字符串</span>'
+'			<input type="text">'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>新字符串</span>'
+'			<input type="text">'
+'		</div>'
+'		<div class="ask-btn pop-l btn">替换显示名称</div>'
+'		<div class="ask-btn pop-m btn">替换影片ID</div>'
+'		<div class="ask-btn pop-r btn">替换集数</div>'
+'	</div>'
+'</div>';

return function( f1, f2, f3 ){
	$( document.body ).append( html );
	$('.ask-cross').on('click', function(){ $('#pop-box').remove(); });
	var i1 = $('.pop-row').eq( 0 ).children('input');
	var i2 = $('.pop-row').eq( 1 ).children('input');
	$('.pop-l').on('click', function(){ f1 && f1( i1.val(), i2.val() ); });
	$('.pop-m').on('click', function(){ f2 && f2( i1.val(), i2.val() ); });
	$('.pop-r').on('click', function(){ f3 && f3( i1.val(), i2.val() ); });
}

});