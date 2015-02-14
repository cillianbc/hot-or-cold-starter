
$(document).ready(function(){
	
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /*--- Function to create randomly generated number ---*/
  var computerGuess = function(){
    Math.floor((Math.random() * 100) + 1);
  };

  /*--- user guess variable that takes value from input box ---*/
  var userGuess = +$('#userGuess').val();
  console.log(userGuess);


  /*--- New Game function that returns page to original state ---*/
  var newGame = function(){
    $('.new').click(function(){
      $('#count').text('0');
      $('#guessList li').remove();
    });
  };
  /*--- On click function to run new Game function ---*/
  newGame();

});


