var wins = 0;
var losses = 0;
var pointVal = 0;
//var randomStart (randomly generated between 19 & 120) is the number the player should match to win the game
var randomStart = Math.floor((Math.random() * 102) + 19);
  var random = Math.floor((Math.random() * 13) + 1);
    var smokyVal = Math.floor((Math.random() * 13) + 1);
    var amethystVal=Math.floor((Math.random() * 13) + 1);
    var snowVal=Math.floor((Math.random() * 13) + 1);
    var saltVal=Math.floor((Math.random() * 13) + 1);

//each crystal "Val" (randomly generated between 1 & 12) is the number of points awarded to each crystal on click
$(document).ready(function(){
  $("#toMatch").text(randomStart);
  $("#points").text(pointVal);
  $("#smoky").click(function(){
    $("#points").text(pointVal+=smokyVal);
    if (pointVal < randomStart) {
      $("#numberSet").text("Keep going!");
    } else if (pointVal === randomStart) {
      $("#numberSet").text("You did it!!");
    } else {
  $("#numberSet").text("Alas, your crystals deceived you! Would you like to play again?");
}
  });
$("#amethyst").click(function(){
    function refreshNumber(){
      return amethystVal;
    };
      $("#points").text(pointVal+=amethystVal);
      if (pointVal < randomStart) {
        $("#numberSet").text("Guess again!");
      } else if (pointVal === randomStart) {
          $("#numberSet").text("You rock!!! What a winner!");
      } else {
      $("#numberSet").text("Oh, no! This wasn't your best round. Would you like to play again?");
      }
});
$("#snow").click(function(){
  function refreshNumber(){
    return snowVal;
  };
    $("#points").text(pointVal+=snowVal);
    if (pointVal < randomStart) {
      $("#numberSet").text("Don't stop!");
    } else if (pointVal === randomStart) {
        $("#numberSet").text("Victory!!");
        $("wins").append(" <b>1</b>");
    } else {
    $("#numberSet").text("Well, that wasn't so good... play again?");
    $("losses").append(" <b>1+=</b>");
    }
  });
$("#salt").click(function(){
  function refreshNumber(){
    return saltVal;
  };
    $("#points").text(pointVal+=saltVal);
    if (pointVal < randomStart) {
      $("#numberSet").text("Please continue!");
    } else if (pointVal === randomStart) {
        $("#numberSet").text("It's crystal clear - you're a winner!");
    } else {
    $("#numberSet").text("Well, well, well... didn't happen for you this time. Play again?");
    }
  })
});
