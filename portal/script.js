$(function() {
	var $audio = $('audio');
	var $message = $('#message');
	var audio = $audio.get(0);
	var autoplay = true;
	
	$('#click-overlay').click(function() {
		if(audio.paused) {
			autoplay = false;
			audio.play();
			$message.show();
			$message.text('Aumente o volume!');
		}
	});
	
	$audio.bind('play', function() {
		if(autoplay) {
			$message.hide();
		}
	});
	
	$audio.bind('pause', function() {
		$message.text('Clique para tocar');
	});
});