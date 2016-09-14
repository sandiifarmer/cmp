;require.config({
	urlArgs : 't=' + ( new Date() ).getTime(),
	paths : {}
});
require(['tip','input','ask'], function(Tip, Input, Ask){

window.main = {};

window.main.cfg = {};



var ftn = {};
var pageName = $('#page-name').attr('data-page-name');

ftn.toggleBtn = function( e ){
	var btn = $( e.currentTarget );
	if( btn.hasClass('fold-up') ){
		btn.addClass('fold-down').removeClass('fold-up').attr({title : '撤销'});
	}
	else if( btn.hasClass('fold-down') ){
		btn.addClass('fold-up').removeClass('fold-down').attr({title : '发布'});
	}
	else if( btn.hasClass('fold-tick') ){
		btn.addClass('fold-cross').removeClass('fold-tick').attr({title : '屏蔽'});
	}
	else if( btn.hasClass('fold-cross') ){
		btn.addClass('fold-tick').removeClass('fold-cross').attr({title : '启用'});
	}
	else if( btn.hasClass('fold-start') ){
		btn.addClass('fold-stop').removeClass('fold-start').attr({title : '停止'});
	}
	else if( btn.hasClass('fold-stop') ){
		btn.addClass('fold-start').removeClass('fold-stop').attr({title : '启动'});
	}	
};
ftn['temp'] = function(){
	$('.btn1').on('click', function(){
		require(['pop1'], function(pop1){
			pop1(function(v1, v2, v3){
				alert('节目名称：'+v1+'，频道类型：'+v2+'，事件类型：'+v3);
			});
		});
	});
	$('.btn2').on('click', function(){
		require(['pop2'], function(pop2){
			pop2(function(){
				alert('ok');
			});
		});
	});
	$('.btn3').on('click', function(){
		require(['pop3'], function(pop3){
			pop3(function(v1, v2){
				alert('左边按钮点击，旧字符串：'+v1+'，新字符串：'+v2);
			},function(v1, v2){
				alert('中间按钮点击，旧字符串：'+v1+'，新字符串：'+v2);
			},function(v1, v2){
				alert('右边按钮点击，旧字符串：'+v1+'，新字符串：'+v2);
			});
		});
	});
	$('.btn4').on('click', function(){
		require(['tip'], function(Tip){
			new Tip('http://play.baidu.com/methodName=mboxCtrl.playSong&fm=altg&argsValue=2041575#');
		});
	});
	$('.btn5').on('click', function(){
		require(['pop-test'], function(t){
			t();
		});
	});
};
ftn['home'] = function(){
	$( document.body ).delegate('.top-login', 'click', function(e){
		require(['login'], function(Login){
			new Login();
		});
	});
	$('.home-ul').children('a').on('click', function(){
		require(['login'], function(Login){
			new Login();
		});
	});	
};
ftn['0003'] = function(){
	$( document.body ).delegate('.fold-tick', 'click', function(e){
		new Ask('确实要启用吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-cross', 'click', function(e){
		new Ask('确实要屏蔽吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0006'] = function(){
	$('.role-admin-btn').on('click', function(e){
		var btn = $( e.currentTarget );
		var title = btn.parent().parent();
		var checkbox = title.siblings('.role-admin-one').children('input');
		checkbox.trigger('click');
	});
};
ftn['0008'] = function(){
	$( document.body ).delegate('.fold-tick', 'click', function(e){
		ftn.toggleBtn(e);
	});
	$( document.body ).delegate('.fold-cross', 'click', function(e){
		new Ask('确实要屏蔽吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(e){
		new Ask('确实要删除吗？', function(){});
	});
};
ftn['0013'] = function(){
	$( document.body ).delegate('.fold-tick', 'click', function(e){
		new Ask('确实要启用吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-cross', 'click', function(e){
		new Ask('确实要屏蔽吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(e){
		new Ask('确实要删除吗？', function(){});
	});
};
ftn['0018'] = function(){
	$('.ctrl-del').on('click', function(e){
			new Ask('确实要删除吗？', function(){});
		});
};
ftn['0021'] = function(){
	$( document.body ).delegate('.fold-start', 'click', function(e){
		new Ask('确实要启动吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-stop', 'click', function(e){
		new Ask('确实要停止吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0025'] = function(){
	// require(['table'], function(Table){
	// 	new Table();
	// });
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-rel').on('click', function(){
		new Ask('确实要发布吗？', function(){});
	});
	$('.ctrl-cancel').on('click', function(){
		new Ask('确实要撤销发布吗？', function(){});
	});
};
ftn['0029'] = function(){
	$('.add-addr-btn').on('click', function(e){
		var html =
			'<div class="input-row addr-row">'
			+'	<input type="text" class="addr-input-1">'
			+'	<input type="text" class="addr-input-2">'
			+'	<div class="btn del-addr-btn">删除</div>'
			+'</div>';
		$('.addr-row').last().after( html );
	});
	$( document.body ).delegate('.del-addr-btn', 'click', function(e){
		$( e.currentTarget ).parent().remove();
	});
};
ftn['0033'] = function(){
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0037'] = function(){
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0040'] = function(){
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.fold-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0043'] = function(){
	// require(['table'], function(Table){
	// 	new Table();
	// });
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-rel').on('click', function(e){		
		new Ask('确认发布吗？', function(){});
	});
	$('.ctrl-audit').on('click', function(e){		
		new Ask('确认复核吗？', function(){});
	});
	$( document.body ).delegate('.tag-cross', 'click', function(e){
		$( e.currentTarget ).parent().remove();
	});
	$( document.body ).delegate('.insert-add-tag', 'click', function(e){
		new Input('请输入标签名称', function( text ){
			if( !text ){
				return;
			}else if( text.length > 50 ){
				new Tip('标签名称不得多于50字符');
			}else{
				var html = '<span>'+ text +'<i class="tag-cross"></i></span>';
				$('.insert-add-tag').before( html );
			}
		});
	});
};
ftn['0054'] = function(){
	// require(['table'], function(Table){
	// 	new Table();
	// });
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-wait').on('click', function(e){		
		new Ask('确认待发布吗？', function(){});
	});
	$( document.body ).delegate('.fold-del', 'click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.tag-cross', 'click', function(e){
		$( e.currentTarget ).parent().remove();
	});
	$( document.body ).delegate('.insert-add-tag', 'click', function(e){
		new Input('请输入标签名称', function( text ){
			if( !text ){
				return;
			}else if( text.length > 50 ){
				new Tip('标签名称不得多于50字符');
			}else{
				var html = '<span>'+ text +'<i class="tag-cross"></i></span>';
				$('.insert-add-tag').before( html );
			}
		});
	});
};
ftn['0065-1'] = function(){
	$('.mg-clear-1').on('click', function(){
		$('.mg-input').val('');
	});
};
ftn['0065-2'] = function(){
	$('.mg-clear-2').on('click', function(){
		$('.mg-ul').html('');
	});
	$( document.body ).delegate('.mg-cross', 'click', function(e){
		$( e.currentTarget ).parent().remove();
	});
};
ftn['0065-3'] = function(){
	$( document.body ).delegate('.fold-a', 'click', function(e){
		var tr = $( e.currentTarget ).parent().parent().parent();
		var id = getId( tr );
		doAddReserve( id );
		removeDel( id );		
	});
	$( document.body ).delegate('.fold-b', 'click', function(e){
		var tr = $( e.currentTarget ).parent().parent().parent();
		var id = getId( tr );
		if( idReserved( id ) ) return;
		if( idDeleted( id ) ) return;
		doAddDel( id );
	});
	$('.ctrl-b').on('click', function(){
		var idArr = getCheckedIdArr();
		if( !idArr.length ) return;
		console.log(idArr);
		$.each(idArr, function(i, id){
			doAddDel( id );
		});
	});
	function getId( tr ){
		var id = tr.children('td').eq(1).text();
		return id;
	}
	function doAddReserve( id ){
		var iframe1 = window.parent.window.iframe1;
		var input = iframe1.document.getElementsByClassName('mg-input')[0];
		$( input ).val( id );
	}
	function idReserved( id ){
		var iframe1 = window.parent.window.iframe1;
		var input = iframe1.document.getElementsByClassName('mg-input')[0];
		var _id = $( input ).val();
		if( id == _id ) return true;
		return false;
	}
	function idDeleted( id ){
		var iframe2 = window.parent.window.iframe2;
		var ul = iframe2.document.getElementsByClassName('mg-ul')[0];
		var li = $( ul ).children( 'li' );
		var result = false;
		li.each(function(){
			var _id = $( this ).text();
			if( id == _id )	result = true;
		});
		return result;
	}
	function doAddDel( id ){
		var iframe2 = window.parent.window.iframe2;
		var ul = iframe2.document.getElementsByClassName('mg-ul')[0];
		var li = '<li>'+ id +'<i class="mg-cross"></i></li>';
		$( ul ).append( li );
	}
	function removeDel( id ){
		var iframe2 = window.parent.window.iframe2;
		var ul = iframe2.document.getElementsByClassName('mg-ul')[0];
		var li = $( ul ).children('li');
		li.each(function(){
			var _li = $( this );
			if( _li.text() == id ) _li.remove();
		});
	}
	function getCheckedIdArr(){
		var result = [];
		$('.checkone').each(function(){
			if( this.checked ){
				var row = $( this ).parent().parent();
				var id = row.children( 'td' ).eq(1).text();
				result.push( id );
			}
		});
		return result;
	}
};
ftn['0067'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0070'] = function(){
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.td-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-refresh').on('click', function(){
		new Ask('确认刷新吗？', function(){});
	});
};
ftn['0075'] = function(){
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-clear').on('click', function(){
		new Ask('确认清除数据吗？', function(){});
	});
	$('.ctrl-data').on('click', function(){
		new Ask('是否确认同步以上标签？', function(){});
	});
	$('.ctrl-tag').on('click', function(){
		new Ask('是否确认同步以上标签？', function(){});
	});
	require(['rank'], function(Rank){
		new Rank();
	});
};
ftn['0080'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.tag-box').children('li').on('click', function(e){
		var li = $( e.currentTarget );
		if( li.hasClass('checked') ) return;
		li.siblings('.checked').removeClass('checked');
		li.addClass('checked');
		var text = '当前标签名称：' + li.text();
		$('#tag-name').text( text );
	});
};
ftn['0084'] = function(){
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0089'] = function(){
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0094'] = function(){
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0099'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0103'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0108'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0113'] = function(){
	// require(['table'], function(Table){
	// 	new Table();
	// });
	$('.ctrl-bind').on('click', function(){
		new Input('影片ID：', function( text ){
			console.log( text );
		});
	});
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0119'] = function(){
	// require(['table'], function(Table){
	// 	new Table();
	// });
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-rel').on('click', function(){
		new Ask('确实要发布吗？', function(){});
	});
	$('.ctrl-cancel').on('click', function(){
		new Ask('确实要撤销发布吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0128'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0131'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0135'] = function(){
	// require(['table'], function(Table){
	// 	new Table();
	// });
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-rel').on('click', function(){
		new Ask('确认发布吗？', function(){});
	});
	$('.ctrl-cancel').on('click', function(){
		new Ask('确认撤销吗？', function(){});
	});
};
ftn['0142'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0145'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-collect').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.ctrl-into').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0151'] = function(){
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0153'] = function(){
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0155'] = function(){
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
	require(['rank'], function(Rank){
		new Rank();
	});
};
ftn['0157'] = function(){
	$('.ctrl-del').on('click', function(e){		
		new Ask('确认删除吗？', function(){});
	});
};
ftn['0159'] = function(){
	$('.ctrl-rel').on('click', function(){
		new Ask('确实要发布吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0161'] = function(){
	$('.ctrl-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});
	$('.fold-del').on('click', function(){
		new Ask('确认删除吗？', function(){});
	});	
};
ftn['0162'] = function(){	
	$('.btn-checkall').on('click', function(e){
		var ones = $( e.currentTarget ).parent().siblings('i').children('input');
		var len = ones.length;
		for(var i = 0; i < len; i++){
			var one = ones[ i ];
			if( !one.checked ){
				$( one ).trigger('click');
			}
		}
	});
	$('.btn-check-invert').on('click', function(e){
		var ones = $( e.currentTarget ).parent().siblings('i').children('input');
		var len = ones.length;
		for(var i = 0; i < len; i++){
			var one = ones[ i ];
			$( one ).trigger('click');
		}
	});
};
ftn['0163'] = function(){	
	$('.btn-checkall').on('click', function(e){
		var ones = $( e.currentTarget ).parent().siblings('i').children('input');
		var len = ones.length;
		for(var i = 0; i < len; i++){
			var one = ones[ i ];
			if( !one.checked ){
				$( one ).trigger('click');
			}
		}
	});
	$('.btn-check-invert').on('click', function(e){
		var ones = $( e.currentTarget ).parent().siblings('i').children('input');
		var len = ones.length;
		for(var i = 0; i < len; i++){
			var one = ones[ i ];
			$( one ).trigger('click');
		}
	});
};
ftn['0165'] = function(){
	$('.ctrl-cancel').on('click', function(){
		new Ask('确实要撤销发布吗？', function(){});
	});
	$('.ctrl-cancel-all').on('click', function(){
		new Ask('确实要撤销发布吗？', function(){});
	});
	$( document.body ).delegate('.fold-up', 'click', function(e){
		new Ask('确实要发布吗？', function(){
			ftn.toggleBtn(e);
		});
	});
	$( document.body ).delegate('.fold-down', 'click', function(e){
		new Ask('确实要撤销吗？', function(){
			ftn.toggleBtn(e);
		});
	});
};
ftn['0170'] = function(){
	var option1 = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['项目1','项目2']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'视频统计',
	            type:'pie',
	            radius : ['40%', '60%'],
	            center: ['50%', '50%'],
	            data:[
	                {value:178, name:'项目1'},
	                {value:122, name:'项目2'}
	            ]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts1')).setOption(option1);
};
ftn['0170-bar'] = function(){
	var option2 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['华数传媒','OTHE','SITV','天华传媒','cdm','华数传媒','OTHE','SITV','天华传媒','cdm','华数传媒','OTHE','SITV','天华传媒','cdm','华数传媒','OTHE','SITV','天华传媒','cdm']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'总计',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6,2.0, 4.9, 7.0, 23.2, 25.6,2.0, 4.9, 7.0, 23.2, 25.6,2.0, 4.9, 7.0, 23.2, 25.6]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts2')).setOption(option2);
	$('.sel-btn').on('click', function(){
		$('.sel-ul').toggleClass('hide');
	});
	$('.sel-confirm').on('click', function(){
		$('.sel-ul').addClass('hide');
	});
};
ftn['0171'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['内容导入','导入成功','导入失败']
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['2010-10-10','2010-10-11','2010-10-12','2010-10-13','2010-10-14','2010-10-15','2010-10-16']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'内容导入',
	            type:'line',
	            stack: '总量',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'导入成功',
	            type:'line',
	            stack: '总量',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'导入失败',
	            type:'line',
	            stack: '总量',
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0172'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['聚合元数据','绑定资源（互联网）','绑定内容（媒资等）']
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['2010-10-10','2010-10-11','2010-10-12','2010-10-13','2010-10-14','2010-10-15','2010-10-16']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'聚合元数据',
	            type:'line',
	            stack: '总量',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'绑定资源（互联网）',
	            type:'line',
	            stack: '总量',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'绑定内容（媒资等）',
	            type:'line',
	            stack: '总量',
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0173'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['华数传媒','OTHE','SITV','天华传媒','cdm']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '80%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'华数传媒'},
	                {value:310, name:'OTHE'},
	                {value:234, name:'SITV'},
	                {value:135, name:'天华传媒'},
	                {value:1548, name:'cdm'}
	            ]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0174'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['2010-10-10','2010-10-11','2010-10-12','2010-10-13','2010-10-14','2010-10-15','2010-10-16']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'总计',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0175'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['影片资料','媒资视频','转码视频']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'未发布',
	            type:'bar',
	            data:[2.0, 76.7, 135.6]
	        },
	        {
	            name:'已发布',
	            type:'bar',
	            data:[21.0, 6.7, 35.6]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0176'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['新增待审核','已发布复审','待发布','已发布']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '80%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'新增待审核'},
	                {value:234, name:'已发布复审'},
	                {value:135, name:'待发布'},
	                {value:1548, name:'已发布'}
	            ]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0177'] = function(){
	var option1 = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['电影','电视剧','综艺','动漫']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '80%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'电影'},
	                {value:234, name:'电视剧'},
	                {value:135, name:'综艺'},
	                {value:1548, name:'动漫'}
	            ]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts-1')).setOption(option1);
	var option2 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['影片名称','主演','海报','简述','影片时长','分类','地区']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'总计',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts-2')).setOption(option2);
};
ftn['0178'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['土豆','优库','PPTV','乐视']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '80%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'土豆'},
	                {value:234, name:'优库'},
	                {value:135, name:'PPTV'},
	                {value:1548, name:'乐视'}
	            ]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0179'] = function(){
	var option = {
		title : {
	        text: '版权引入量'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['2010-10-10','2010-10-11','2010-10-12','2010-10-13','2010-10-14','2010-10-15','2010-10-16']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'总计',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0180'] = function(){
	var option = {
		title : {
	        text: '版权引入量'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['2010-10-10','2010-10-11','2010-10-12','2010-10-13','2010-10-14','2010-10-15','2010-10-16']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'总计',
	            type:'bar',
	            data:[12.0, 4.9, 7.0, 23.2, 125.6, 7.7, 35.6]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0181'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['正常版权','将要过期','过期版权','没有版权']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '80%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'正常版权'},
	                {value:234, name:'将要过期'},
	                {value:135, name:'过期版权'},
	                {value:1548, name:'没有版权'}
	            ]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0182'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['华数','芒果','其他']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'版权数据引入',
	            type:'bar',
	            data:[20, 767, 1356]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['0183'] = function(){
	var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['2010-10-10','2010-10-11','2010-10-12','2010-10-13','2010-10-14','2010-10-15','2010-10-16']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'电影',
	            type:'bar',
	            data:[120, 49, 70, 232, 1256, 77, 356]
	        },{
	            name:'电视剧',
	            type:'bar',
	            data:[12, 469, 7, 23, 126, 7, 56]
	        },{
	            name:'未分类',
	            type:'bar',
	            data:[120, 449, 740, 32, 126, 70, 56]
	        }
	    ]
	};
	echarts.init(document.getElementById('echarts')).setOption(option);
};
ftn['dropdown'] = function(){
	require(['dropdown'], function(dropdown){
		dropdown(function( arr ){
			alert('点击了确定，选中的值为：' + arr.toString());
		},function( arr ){
			alert('点击了取消，选中的值为：' + arr.toString());
		});
	});
};

if( ftn[ pageName ] ) ftn[ pageName ]();


;(function(){
var floatBox = $('.float-box');
if( !floatBox.length ) return;
floatBox.on('mouseenter', function(){ floatBox.addClass('float-unfold'); });
var body = $( document.body );
body.on('click', function(e){
	var floatH = floatBox.height();
	var bodyH = body.height();
	if( e.pageY < bodyH - floatH ) floatBox.removeClass('float-unfold');
});
if( pageName == '0003') floatBox.addClass('float-unfold');
if( pageName == '0025') floatBox.addClass('float-unfold');
if( pageName == '0043') floatBox.addClass('float-unfold');
if( pageName == '0113') floatBox.addClass('float-unfold');
if( pageName == '0161') floatBox.addClass('float-unfold');
if( pageName == '0170') floatBox.addClass('float-unfold');
})();

$( document.body ).delegate('.checkall', 'click', function(e){
	var tr = $( e.currentTarget ).parent().parent();
	var ones = tr.siblings('tr').children('td').children('.checkone');
	var len = ones.length;
	for(var i = 0; i < len; i++){
		var one = ones[ i ];
		if( one.checked != e.currentTarget.checked ){
			$( one ).trigger('click');
		}
	}
});
$('.top-refresh')
	.attr({title : '刷新页面'})
	.on('click', function(){ location.reload(); });
$('.top-home')
	.attr({title : '返回首页'})
	.on('click', function(){ location = 'home.html'; });
$('.top-gear')
	.attr({title : '修改密码'})
	.on('click', function(){
		require(['pwd'], function(pwd){
			pwd(function(v1, v2, v3){
				alert('旧密码：'+v1+'，新密码：'+v2+'，重复新密码：'+v3);
			});
		});
	});
$('.top-power')
	.attr({title : '退出登录'})
	.on('click', function(){
		new Ask('确定注销退出吗？', function(){});
	});

});
