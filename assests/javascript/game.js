$(document).ready(function() {
  var randomNumOne = Math.floor(Math.random() * 12) + 1;
  var randomNumTwo = Math.floor(Math.random() * 12) + 1;
  var randomNumThree = Math.floor(Math.random() * 12) + 1;
  var randomNumFour = Math.floor(Math.random() * 12) + 1;
  var target = Math.floor(Math.random() * 101) + 19;
  var wins = 0;
  var losses = 0;
  var userScore = 0;

  $("#losses").html("Losses: " + losses);
  $("#wins").html("Wins: " + wins);
  $("#targetScore").html("Target Score: " + target);
  $("#userScore").html("user Score: " + userScore);

  console.log(userScore);

  $("#crystalOne").val(randomNumOne);
  $("#crystalTwo").val(randomNumTwo);
  $("#crystalThree").val(randomNumThree);
  $("#crystalFour").val(randomNumFour);

  $(".crystal").on("click", function() {
    var number = $(this).val();
    var num = parseInt(number);

    userScore += num;
    // $("#userScore").html("User Score: " + userScore);

    if (userScore === target) {
      alert("you win!");
      wins++;
    }
    if (userScore > target) {
      alert("You Lose!");
      losses++;
    }
    document.getElementById("userScore").innerHTML = userScore;
  });
});
