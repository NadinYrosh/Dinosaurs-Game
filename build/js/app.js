(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
