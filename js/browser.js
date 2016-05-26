var DinoApiClass = require('./../js/dino.js').DinoApiClass;

var dinoArray;

var playGame = function(dinoArray) {
  $('.dinoGuessInput').submit(function(event) {
    event.preventDefault();
    $(".dinoGuess").hide();
    $(".comparison").show();
    $('#displayDino').text("");
    $('#dinoGuessOutput').text("");
    console.log("attaching dinoGuessInput submit listener");
    console.log(dinoArray);
    dinoArray.forEach(function(dino){
      $('#displayDino').append('<li>' + dino + '</li>');
    });
    var userGuesses = document.getElementById("textArea").value;
    userGuesses = userGuesses.replace(/(\r\n|\n|\r)/gm," ");
    var guessArray = userGuesses.split(" ");
    for (var i = 0; i < guessArray.length; i++) {
      if (guessArray[i] === dinoArray[i]) {
        $('#dinoGuessOutput').append('<li class="correct">' + guessArray[i] + '</li>');
      } else {
        $('#dinoGuessOutput').append('<li class="incorrect">' + guessArray[i] + '</li>');
      }
    }
  });
}

$(document).ready(function(){
  $(".dinoForm").submit(function(event) {
    event.preventDefault();
    $("#textArea").val('');
    $(".comparison").hide();
    var numberOfDinos = parseInt($("#dinoNumber").val());

    var myDinoObject = new DinoApiClass();
    myDinoObject.makeRequest(numberOfDinos, playGame);
  });
});
