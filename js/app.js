$('#resistance-input').bind('input', function(){
	$('div').text($(this).val());
});

$('.color-selector li').each(function(){
	var color = $(this).attr('id');
	$(this).css('background-color', color);
});