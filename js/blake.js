$(document).ready(function () {
  var game = newGame();

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function newGame () {
    var count = 0;
    var computerGuess = generateGuess();
    var gameComplete = false;
    var prevUserDiff;

    $('#count').text('0');
    $('#feedback').text("Make your Guess!");
    $('#guessList li').remove();

    return function (guess) {
      if (gameComplete) {
        // alert the user to start a new game.
        return;
      }

      var guessDiff = Math.abs(compGuess - userGuess);

      if (guessDiff === 0){
        feedback('Correct');
        gameComplete = true;
        // stop the game from running again.
        return;
      }

      var feedback = 'Freezing';

      if (prevUserDiff) {
        if (guessDiff < prevUserDiff) {
          feedback = 'Warmer';
        } else if (guessDiff === prevUserDiff) {
          feedback = 'No change';
        } else {
          feedback = 'Colder';
        }
      } else {
        if (guessDiff < 10){
          feedback = 'Warm';
        } else if (guessDiff < 50) {
          feedback = 'Cold';
        }
      }

      setFeedback(feedback);
      guessAmount(userGuess);
      count++;
      setGuessCount(count);
      prevUserDiff = guessDiff;
    };
  }

  function generateGuess () {
    return Math.floor((Math.random() * 100) + 1);
  }

  $('.new').click(function(){
    game = newGame();
  });

  $('form').submit(function (e) {
    var guess = Number($('#userGuess').val());

    e.preventDefault();

    if (isNaN(guess)) {
      alert('soemthign');
      return;
    }

    game(guess);
  });
});
