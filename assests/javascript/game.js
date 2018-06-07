$(document).ready(function() {
  var userScore = 0;
  var randomNumOne = Math.floor(Math.random() * 12) + 1;
  var randomNumTwo = Math.floor(Math.random() * 12) + 1;
  var randomNumThree = Math.floor(Math.random() * 12) + 1;
  var randomNumFour = Math.floor(Math.random() * 12) + 1;
  var target = Math.floor(Math.random() * 101) + 19;
  var wins = 0;
  var losses = 0;

  console.log(target);

  $("#crystalOne").val(randomNumOne);
  $("#crystalTwo").val(randomNumTwo);
  $("#crystalThree").val(randomNumThree);
  $("#crystalFour").val(randomNumFour);

  $(".crystal").on("click", function() {
    var number = $(this).val();
    var num = parseInt(number);

    console.log(number);

    if (userScore === target) {
      alert("you win!");
      wins++;
      $("#wins").html("Wins: " + wins);
    }
    if (userScore > target) {
      alert("You Lose!");
      losses++;
      "#losses".html("Losses: " + losses);
    }

    var html = "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>";
  });
});
