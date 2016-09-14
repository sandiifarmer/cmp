define(function(){

var html = 
'<div class="box" id="pop-box">'
+'	<div class="shade"></div>'
+'	<div class="ask-wrap pop1-box center">'
+'		<div class="ask-top">'
+'			<div class="ask-cross"></div>'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>节目名称</span>'
+'			<input type="text">'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>频道类型</span>'
+'			<select value="1">'
+'				<option value="1">1</option>'
+'				<option value="2">2</option>'
+'				<option value="3">3</option>'
+'			</select>'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>事件类型</span>'
+'			<select value="1">'
+'				<option value="1">1</option>'
+'				<option value="2">2</option>'
+'				<option value="3">3</option>'
+'			</select>'
+'		</div>'
+'		<div class="ask-btn ask-ok btn">确定</div>'
+'		<div class="ask-btn ask-no btn gray">取消</div>'
+'	</div>'
+'</div>';

return function( f ){
	$( document.body ).append( html );
	$('.ask-cross').add('.ask-no').on('click', function(){ $('#pop-box').remove(); });
	var i1 = $('.pop-row').eq( 0 ).children('input');
	var i2 = $('.pop-row').eq( 1 ).children('select');
	var i3 = $('.pop-row').eq( 2 ).children('select');
	$('.ask-ok').on('click', function(){ f && f( i1.val(), i2.val(), i3.val() ); });
}

});