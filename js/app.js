
$(document).ready(function(){
	
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /*--- user guess variable that takes value from input box ---*/
  var userGuess = document.getElementById("userGuess").value;

  /*--- On click function to run new Game function ---*/
  $('.new').on('click',function(){
    newGame()
  });

  /*--- New Game function that returns page to original state ---*/
  var newGame = function(){
    $('#count span').text('Test');
    $('#guessList li').remove();
  };

 /*--- Function to create randomly generated number ---*/
  var computerGuess = function(){
    Math.floor((Math.random() * 100) + 1);
  };

});



