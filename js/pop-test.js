define(function(){

var html =
'<div class="box" id="pop-box"> '
+'	<div class="shade"></div> '
+'	<div class="ask-wrap pop2-box center"> '
+'		<div class="ask-top">'
+'		 转码规则 '
+'		 <div class="ask-cross"></div> '
+'		</div> '
+'		<div class="pop-row"> '
+'		 <span>转码类型：</span> '
+'		</div>'
+'		<div class="pop-row"> '
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_15" /><b> 电视院线_changshaguoan_15</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_14" /><b> 电视院线_jilin_14</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_13" /><b> 电视院线_HNYX_13</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_12" /><b> 电视院线_guangxi_12</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_11" /><b> 电视院线_hunan_11</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_10" /><b> 电视院线_tianjin_10</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_9" /><b> 电视院线_shenzhen_9</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_8" /><b> 电视院线_shandong_8</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_7" /><b> 电视院线_ningxia_7</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_6" /><b> 电视院线_shanxi_6</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="OTHER_5" /><b> 电视院线_kuming_5</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="DN_4" /><b> 离线下载2</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="DN_3" /><b> 离线下载1</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="IP_2" /><b> 标清</b></label>'
+'		 <label><input type="checkbox" name="trans" onclick="checkClick($(this));" value="IP_1" /><b> 高清</b></label> '
+'		</div> '
+'		<div class="pop-row"> '
+'		 <span>优先级：</span> '
+'		 <select id="Priority" name="Priority">'
+'			 <option value="1">&nbsp;&nbsp;1&nbsp;&nbsp;</option>'
+'			 <option value="2">&nbsp;&nbsp;2&nbsp;&nbsp;</option>'
+'			 <option value="4">&nbsp;&nbsp;4&nbsp;&nbsp;</option>'
+'			 <option value="5">&nbsp;&nbsp;5&nbsp;&nbsp;</option>'
+'		 </select> '
+'		 <input type="hidden" id="AssetIDS" name="AssetIDS" value="GMOV0120140417200169" /> '
+'		</div> '
+'		<input class="ask-btn ask-ok btn" id="trascode_btn" onclick="trans_button();" value="确定" /> '
+'		<div class="ask-btn ask-no btn gray">'
+'		 取消'
+'		</div> '
+'	</div> '
+'</div>';

return function( f ){
	$( document.body ).append( html );
	$('.ask-cross').add('.ask-no').on('click', function(){ $('#pop-box').remove(); });
	$('.ask-ok').on('click', function(){ f && f(); });
}

});
