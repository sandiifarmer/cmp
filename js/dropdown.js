define(function(){

$( document.body ).delegate('.dropdown', 'click', function( e ){
	if( !$( e.target ).hasClass('dropdown') ) return;
	var self = $( e.currentTarget );
	var menu = self.children('.dropdown-menu');
	$('.dropdown').children('.dropdown-menu').not( menu ).addClass('hide');
	menu.toggleClass('hide');
});
function getValueArr( ul ){
	var arr = [];
	var inputs = ul.children('li').children('input');
	inputs.each(function(){
		if( this.checked ) arr.push( this.value );
	});
	return arr;
}

return function(okFtn, noFtn){
	$( document.body ).delegate('.dropdown-ok', 'click', function( e ){
		var ul = $( e.currentTarget ).parent().siblings('ul');
		var valueArr = getValueArr( ul );
		okFtn && okFtn( valueArr );
		ul.parent().addClass('hide');
	});
	$( document.body ).delegate('.dropdown-no', 'click', function( e ){
		var ul = $( e.currentTarget ).parent().siblings('ul');
		var valueArr = getValueArr( ul );
		noFtn && noFtn( valueArr );
		ul.parent().addClass('hide');
	});
};

});