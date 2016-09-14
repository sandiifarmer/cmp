define(function(){

var html = 
'<div class="box" id="pwd-box">'
+'	<div class="shade"></div>'
+'	<div class="ask-wrap center">'
+'		<div class="ask-top">修改密码'
+'			<div class="ask-cross"></div>'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>旧密码</span>'
+'			<input type="password">'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>新密码</span>'
+'			<input type="password">'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>确认密码</span>'
+'			<input type="password">'
+'		</div>'
+'		<div class="ask-btn ask-ok btn">确定</div>'
+'		<div class="ask-btn ask-no btn gray">取消</div>'
+'	</div>'
+'</div>';

return function( f ){
	$( document.body ).append( html );
	$('.ask-cross').add('.ask-no').on('click', function(){ $('#pwd-box').remove(); });
	var i1 = $('.pop-row').eq( 0 ).children('input');
	var i2 = $('.pop-row').eq( 1 ).children('input');
	var i3 = $('.pop-row').eq( 2 ).children('input');
	$('.ask-ok').on('click', function(){ f && f( i1.val(), i2.val(), i3.val() ); });
}

});