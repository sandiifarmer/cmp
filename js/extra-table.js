define(function(){

var html =
'<div class="box extra-box">'
+'	<div class="shade"></div>'
+'	<div class="extra-x"></div>'
+'	<div class="extra-wrap"></div>'
+'</div>';

function bindClose(){
	$('.extra-x').on('click', function(){
		$('.extra-box').remove();
	});
}
function bindNav(){
	var nav = $('.extra-box').find('.insert-nav').children('li');
	var pannel = $('.extra-box').find('.insert-pannel').children('li');
	console.log(nav);
	nav.eq(0).addClass('checked');
	pannel.eq(0).addClass('checked');

	nav.on('mouseenter', function(e){
		var _nav = $( e.currentTarget );
		if( _nav.hasClass('checked') ) return;
		nav.filter('.checked').removeClass('checked');
		pannel.filter('.checked').removeClass('checked');
		var index = _nav.index();
		pannel.eq( index ).addClass('checked');
		nav.eq( index ).addClass('checked');
	});
}

return function( temp ){
	$( document.body ).append( html );
	$( '.extra-wrap' ).append( temp );
	bindClose();
	bindNav();
};

});