$(document).ready(function() {

	$('#fizzBuzzContainer').on('click','.startButton',function() {
		entryFromUser = +$('#formEntryFromUser').val();
		$('#formEntryFromUser').val('');		// clear form entry
		validateThenFizzBuzz(entryFromUser);	// validate input, if good execute fizzbuzz
	});

});

function validateThenFizzBuzz(form) {
	if(form == "" || form ==null || form < 1 || form > 999) {
		alert("Please enter a number from 1 to 999");
		return false;
	}
	else {
		$('.fizzBuzzCounts').empty();			// dump previous fizzBuzz content
		fizzBuzzFxn(entryFromUser);				// run fizz buzz function
	}
}

function fizzBuzzFxn(number) {
	for(var i = 1; i <= number; i++) {
		if((i % 3 == 0) && (i % 5 == 0)) {
			$('.fizzBuzzCounts').append('<p class="fizzBuzz">fizz buzz</p>');
		}
		else if(i % 3 == 0) {
			$('.fizzBuzzCounts').append('<p class="fizz">fizz</p>');
		}
		else if(i % 5 == 0) {
			$('.fizzBuzzCounts').append('<p class="buzz">buzz</p>');
		}
		else {
			$('.fizzBuzzCounts').append('<p>' + i + '</p>');
		}
	}
}