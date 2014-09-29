$(document).ready(function(){
	$('#lines').click(function(){
		$('#mobilenav').slideToggle();
	});
	$('.mobilenavparent a').click(function(){
		var id=$(this).attr('id');
		id=id.split('_');
		$('#child_'+id[0]).slideToggle();
	});
});