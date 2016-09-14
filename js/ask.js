define(function(){

function Ask( text, okFtn, noFtn ){
	this.text = text ? text : '您确定吗？';
	this.html =
	'<div class="box" id="ask-box">'
	+'	<div class="shade"></div>'
	+'	<div class="ask-wrap center">'
	+'		<div class="ask-top">'
	+'			<div class="ask-cross"></div>'
	+'		</div>'
	+'		<div class="ask-content">'+ this.text +'</div>'
	+'		<div class="ask-btn ask-ok btn">确认</div>'
	+'		<div class="ask-btn ask-no btn gray">取消</div>'
	+'	</div>'
	+'</div>';
	this.okFtn = okFtn;
	this.noFtn = noFtn;
	this._run();
}

Ask.prototype = {

	_run : function(){
		var self = this;
		$( document.body ).append( self.html );
		self._bind();
	},

	_bind : function(){
		var self = this;
		$('.ask-ok').on('click', function(){
			self._remove();
			if( !self.okFtn ) return;
			self.okFtn();			
		});		
		$('.ask-no').on('click', function(){
			self._remove();
			if( !self.noFtn ) return;
			self.noFtn();
		});
		$('.ask-cross').on('click', function(){
			self._remove();
		});
		$( document.body ).on('keydown', function(e){
			if( e.keyCode == 13){
				$('.ask-ok').trigger('click');
			}
		});
	},

	_remove : function(){
		var self = this;
		$('#ask-box').remove();
	}

};

return Ask;

});