define(function(){

function Tip( text, okFtn ){
	this.text = text ? text : '';
	this.html =
	'<div class="box" id="tip-box">'
	+'	<div class="shade"></div>'
	+'	<div class="tip-wrap">'
	+'		<div class="tip-top">'
	+'			<div class="tip-cross"></div>'
	+'		</div>'
	+'		<div class="tip-content">'+ this.text +'</div>'
	+'		<div class="tip-btn tip-ok btn">确认</div>'
	+'	</div>'
	+'</div>';
	this.okFtn = okFtn;
	this._run();
}

Tip.prototype = {

	_run : function(){
		var self = this;
		$( document.body ).append( self.html );
		self._bind();
	},

	_bind : function(){
		var self = this;
		$('.tip-ok').on('click', function(){
			self._remove();
			if( !self.okFtn ) return;
			self.okFtn();			
		});	
		$('.tip-cross').on('click', function(){
			self._remove();
		});
		$( document.body ).on('keydown', function(e){
			if( e.keyCode == 13){
				$('.tip-ok').trigger('click');
			}
		});
	},

	_remove : function(){
		var self = this;
		$('#tip-box').remove();
	}

};

return Tip;

});