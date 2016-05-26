function DinoApiClass () {
}

DinoApiClass.prototype.makeRequest = function (numberOfDinos, playGame) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=' + numberOfDinos).then( function(response) {
    var dinoArray = response[0];
    $("#dinoName").text(dinoArray[0]);
    var index = 0;
    var intervalID = setInterval(function() {
      $("#dinoName").text(dinoArray[index]);
      index++;
      if (index > dinoArray.length) {
        clearInterval(intervalID);
        $("#dinoName").text("");
        $(".dinoGuess").show();
      }
    }, 3000);
    console.log(dinoArray);
    playGame(dinoArray);
  });
}

exports.DinoApiClass = DinoApiClass;
