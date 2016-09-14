define(function(){
function Rank(){
	this.i = 0;
	this.type = '';
	this.action = '';
	this.row1 = null;
	this.tr = [];

	this.bind();
}

Rank.prototype = {
	bind : function(){
		var self = this;
		$('.rank-up').on('click', function(e){
			self.action = 'up';
			self.getStatus( e );
		});
		$('.rank-down').on('click', function(e){			
			self.action = 'down';
			self.getStatus( e );
		});
	},

	getStatus : function( e ){
		var self = this;
		var btn = $( e.currentTarget );
		self.i = btn.parent().index();
		self.type = btn.attr('data-type') ? btn.attr('data-type') : 'num';
		self.row1 = btn.parent().parent();
		self.tr = self.row1.siblings('tr');
		self.run();
	},

	run : function(){
		var self = this;
		var len = self.tr.length;
		for( var i = 0; i < len; i++ ){
			for( var j = 0; j < len - 1; j++ ){
				self.compare( j );
			}
		}
	},

	compare : function( j ){
		var self = this;
		self.tr = self.row1.siblings('tr');
		var tr1 = self.tr.eq( j );
		var tr2 = self.tr.eq( j + 1 );
		var t1 = tr1.children('td').eq( self.i ).text();
		var t2 = tr2.children('td').eq( self.i ).text();
		if( self.needChange( t1, t2 ) ){
			tr2.insertBefore( tr1 );
		}
		console.log( t1 +' - '+ t2 );
	},

	needChange : function( t1, t2 ){
		var self = this;
		if( self.type === 'num' ){
			var v1 = parseInt( t1 );
			var v2 = parseInt( t2 );
		}else{
			var v1 = self.getTimeNum( t1 );
			var v2 = self.getTimeNum( t2 );
		}
		return self.wrongRank( v1, v2 );
	},

	getTimeNum : function( t ){
		var self = this;
		t = t.replace(/-/g, "");
		t = t.replace(/\s/g, "");
		t = t.replace(/:/g, "");
		return parseInt( t );
	},

	wrongRank : function( v1, v2 ){
		var self = this;
		if( v1 === v2 ) return false;
		if( self.action === 'up'){
			return v1 > v2;
		}else{
			return v1 < v2;
		}
	}
};

return Rank;
});