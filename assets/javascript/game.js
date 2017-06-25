var wins = 0;
var losses = 0;
var pointVal = 0;
//var randomStart (randomly generated between 19 & 120) is the number the player should match to win the game
var randomStart = Math.floor((Math.random() * 102) + 19);
  var random = Math.floor((Math.random() * 13) + 1);
    //each crystal "Val" (randomly generated between 1 & 12) is the number of points awarded to each crystal on click
    var smokyVal = Math.floor((Math.random() * 13) + 1);
    var amethystVal=Math.floor((Math.random() * 13) + 1);
    var snowVal=Math.floor((Math.random() * 13) + 1);
    var saltVal=Math.floor((Math.random() * 13) + 1);
$(document).ready(function(){
  $("#toMatch").text(randomStart);
  $("#points").text(pointVal);
  $("#wins").text(wins);
  $("#losses").text(losses);
  //smoky crystal on button click options
  $("#smoky").click(function(){
    $("#points").text(pointVal+=smokyVal);
    if (pointVal < randomStart) {
      $("#numberSet").text("Keep going!");
    } else if (pointVal === randomStart) {
      $("#numberSet").text("You did it!!");
      wins++;
      $("#wins").text(wins);
      $("#smoky").attr('disabled','disabled');
}   else {
  $("#numberSet").text("Alas, the crystals deceived you! Would you like to play again?");
  losses++;
    $("#losses").text(losses);
    $("#smoky").attr('disabled','disabled');
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
        wins++;
      $("#wins").text(wins);
          $("#numberSet").text("You rock!!! What a winner!");
      } else {
      $("#numberSet").text("Oh, no! This wasn't your best round. Would you like to play again?");
        losses++;
        $("#losses").text(losses);
      }
});
$("#snow").click(function(){
  function refreshNumber(){
    return snowVal;
  };
    $("#points").text(pointVal+=snowVal);
    if (pointVal < randomStart) {
      $("#numberSet").text("Don't stop-you're on a roll!");
    } else if (pointVal === randomStart) {
      wins++;
    $("#wins").text(wins);
        $("#numberSet").text("Victory!!");
    } else {
    $("#numberSet").text("Well, that was a click too far... play again?");
    losses++;
      $("#losses").text(losses);
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
    wins++;
    $("#wins").text(wins);
        $("#numberSet").text("It's crystal clear - you're a winner!");
    } else {
    $("#numberSet").text("Oh, well.. didn't happen for you this time. Play again?");
    losses++;
      $("#losses").text(losses);
    }
  })
});
