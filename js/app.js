$(document).ready(function() {
	$(document).on('click','.startButton',function() {

		var i = 1;
		for(i; i < 101; i++) {

			if((i % 3 == 0) && (i % 5 == 0)) {
				$('.fizzBuzzCounts').append('<p>fizz buzz</p>');
			}
			else if(i % 3 == 0) {
				$('.fizzBuzzCounts').append('<p>fizz</p>');
			}

			else if(i % 5 == 0) {
				$('.fizzBuzzCounts').append('<p>buzz</p>');
			}

			else {
				$('.fizzBuzzCounts').append('<p>' + i + '</p>');
			}
		}
	});
});