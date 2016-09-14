define(function(){

function Login(){
	this.html =
	'<div class="box" id="login-box">'
	+'	<div class="shade"></div>'
	+'	<form class="login-wrap center">'
	+'		<ul class="login-top clearfix">'
	+'			<li></li>'
	+'			<li></li>'
	+'			<li></li>'
	+'			<li></li>'
	+'			<li></li>'
	+'			<li></li>'
	+'			<li></li>'
	+'		</ul>'
	+'		<div class="login-input login-username">'
	+'			<input type="text" id="username" placeholder="请输入用户名" required>'
	+'		</div>'
	+'		<div class="login-input login-password">'
	+'			<input type="password" id="password" placeholder="请输入密码" required>'
	+'		</div>'
	+'		<input type="text" class="login-code" id="code" placeholder="请输入验证码" required>'
	+'		<div class="login-img">'
	+'			<img src="../img/login-code.jpg">'
	+'		</div>'
	+'		<input type="submit" class="login-submit btn" value="登录"></input>'
	+'	</form>'
	+'</div>';
	this._run();
}

Login.prototype = {

	_run : function(){
		var self = this;
		$( document.body ).append( self.html );
		self._bind();
	},

	_bind :function(){
		var self = this;
		$('#login-submit').on('click', function(){

		});
		$('#login-box').on('click', function(e){
			var target = $( e.target );
			if( !target.hasClass('shade') ) return;
			self._remove();
		});
	},

	_remove : function(){
		var self = this;
		$('#login-box').remove();
	}
	
};

return Login;

});