function rockPaperScissors(value) {
  var array = ["rock", "paper", "scissors"];
  var random = parseInt(Math.random() * array.length);
  var computerValue = array[random];
  console.log(computerValue);
  if (value == computerValue)
    var str = "It's a tie!  Computer chose " + computerValue;
  else {
    if (value == "rock") {
      if (computerValue == "paper")
        var str = "You Lost! Computer chose " + computerValue;
      else if (computerValue == "scissors")
        var str = "You Won! Computer chose " + computerValue;
    } else if (value == "paper") {
      if (computerValue == "scissors")
        var str = "You Lost! Computer chose " + computerValue;
      else if (computerValue == "rock")
        var str = "You Won!  Computer chose " + computerValue;
    } else if (value == "scissors") {
      if (computerValue == "rock")
        var str = "You Lost!  Computer chose " + computerValue;
      else if (computerValue == "paper")
        var str = "You Won!  Computer chose " + computerValue;
    }
  }
  document.getElementsByClassName("result")[0].innerHTML = str;
}
