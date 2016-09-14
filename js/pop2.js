define(function(){

var html =
'<div class="box" id="pop-box">'
+'	<div class="shade"></div>'
+'	<div class="ask-wrap pop2-box center">'
+'		<div class="ask-top">弹框名称'
+'			<div class="ask-cross"></div>'
+'		</div>'
+'		<div class="pop-row">'
+'			<input type="checkbox">'
+'			<b>测试1</b>'
+'		</div>'
+'		<div class="pop-row">'
+'			<input type="checkbox">'
+'			<b>测试2</b>'
+'		</div>'
+'		<div class="pop-row">'
+'			<span>优先级</span>'
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
	$('.ask-ok').on('click', function(){ f && f(); });
}

});
