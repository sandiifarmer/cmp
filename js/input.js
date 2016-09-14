define(function(){

function Input( text, okFtn, noFtn ){
	this.text = text ? text : '您确定吗？';
	this.html =
	'<div class="box" id="input-box">'
	+'	<div class="shade"></div>'
	+'	<div class="input-wrap center">'
	+'		<div class="input-top">'
	+'			<div class="input-cross"></div>'
	+'		</div>'
	+'		<div class="input-content">'+ this.text +'</div>'
	+'		<input type="text" class="input-input">'
	+'		<div class="input-btn input-ok btn">确认</div>'
	+'		<div class="input-btn input-no btn gray">取消</div>'
	+'	</div>'
	+'</div>';
	this.okFtn = okFtn;
	this.noFtn = noFtn;
	this._run();
}

Input.prototype = {

	_run : function(){
		var self = this;
		$( document.body ).append( self.html );
		$(".input-input").focus();
		self._bind();
	},

	_bind : function(){
		var self = this;
		$('.input-ok').on('click', function(){
			var val = $.trim( $('.input-input').val() );
			self._remove();
			if( !self.okFtn ) return;
			self.okFtn( val );
		});		
		$('.input-no').on('click', function(){
			self._remove();
			if( !self.noFtn ) return;
			self.noFtn();
		});
		$('.input-cross').on('click', function(){
			self._remove();
		});
		$( document.body ).on('keydown', function(e){
			if( e.keyCode == 13){
				$('.input-ok').trigger('click');
			}
		});
	},

	_remove : function(){
		var self = this;
		$('#input-box').remove();
	}

};

return Input;

});