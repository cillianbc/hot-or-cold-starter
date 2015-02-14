
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
var userGuess = document.getElementById("userGuess").value;

var newGame = function(){
  $('#count span').text('Test');
  $('#guessList li').remove();

};

var computerGuess = function(){
  Math.floor((Math.random() * 100) + 1);
};


