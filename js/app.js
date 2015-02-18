
$(document).ready(function(){

    /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function newGame(){
    $('.new').click(function(){
      $('#count').text('0');
      $('#feedback').text("Make your Guess!");
      $('#guessList li').remove();
    });
  };

    /*--- Function to create randomly generated number ---*/
  var computerGuess = Math.floor((Math.random() * 100) + 1);

  var count = 1;
  /*--- user guess variable that takes value from input box ---*/
  function cleartext(){
    $("#userGuess").attr("placeholder", "Enter your Guess").val('');
  };

  function entryCheck(guess){
    if(isNaN(guess)){
      alert("Numbers Only");
      Game();
    };
  };

  function numbGuess(count){
    $('#count').text(count);
  };

  function guessAmount(guess){
    $('#guessList').append('<li> '+guess+'</li>');
  };

  function feedback(guessText){
    $('#feedback').text(guessText);
  };

  function game(guessdiff){
    event.preventDefault();
    newGame();
    var userGuess = $('#userGuess').val();
    var guessdiff = Math.abs(computerGuess - userGuess);
    entryCheck(userGuess);

    if (guessdiff === 0){
      feedback("Correct");
      guessAmount(userGuess);
    }

    else if (guessdiff <10){
      feedback("Getting Warm");
      guessAmount(userGuess);
      numbGuess(count);
      count++;
    }

    else {
      feedback("Freezing");
      guessAmount(userGuess);
      numbGuess(count);
      count++;
    }
  };

  $("form").submit(function(event){
    game()
    cleartext();
  });

});


