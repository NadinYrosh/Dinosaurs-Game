//var Message = require('./../js/message.js').Message;

var dinoArray;
$(document).ready(function(){
  $(".dinoForm").submit(function(event) {
    event.preventDefault();
    $("#textArea").val('');
    dinoArray = [];
    $(".comparison").hide();
    var numberOfDinos = parseInt($("#dinoNumber").val());
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=' + numberOfDinos, function(response) {
      dinoArray = response[0];
      $("#dinoName").text(dinoArray[0]);
      var index = 1;
      var intervalID = setInterval(function() {
        $("#dinoName").text(dinoArray[index]);
        index++;
        if (index > dinoArray.length) {
          clearInterval(intervalID);
          $("#dinoName").text("");
          $(".dinoGuess").show();
        }
      }, 3000);
    });
  });

  $('.dinoGuessInput').submit(function(event) {
    event.preventDefault();
    $(".dinoGuess").hide();
    $(".comparison").show();
    $('#displayDino').text("");
    $('#dinoGuessOutput').text("");
    dinoArray.forEach(function(dino){
      $('#displayDino').append('<li>' + dino + '</li>');
    });
    var userGuesses = document.getElementById("textArea").value;
    userGuesses = userGuesses.replace(/(\r\n|\n|\r)/gm," ");
    var guessArray = userGuesses.split(" ");
    guessArray.forEach(function(dino){
      $('#dinoGuessOutput').append('<li>' + dino + '</li>');
    });
  });
});
