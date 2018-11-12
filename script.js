let startingBet,
  gameMoney,
  highestMoney,
  highestMoneyRollCount = 0,
  totalRolls = 0;

 //called by start button
let start = () => {
  startingBet = parseInt(document.getElementById("betInput").value);
  highestMoney = document.getElementById("betInput").value;
  //start game if money bet
  if (startingBet <= 0) {
    alert("It takes money to make money!");
  } else {
    document.getElementById("betInput").disabled = 1;
    gameMoney = startingBet;

    //roll dice until out of money
    while (gameMoney > 0) {
      rollDice();
    }
    //update and display results
    document.getElementById("results").setAttribute("style", "");
    document
      .getElementById("startButton")
      .setAttribute("style", "display:none");
    document.getElementById("startingBet").innerHTML = "$" + startingBet;
    document.getElementById("totalRolls").innerHTML = totalRolls;
    document.getElementById("highestMoney").innerHTML = "$" + highestMoney;
    document.getElementById(
      "highestMoneyRollCount"
    ).innerHTML = `${highestMoneyRollCount}`;
  }
};

//simulate rolling two 6-sided die
let rollDice = () => {
  totalRolls++;
  let diceTotal = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
  if (diceTotal === 7) {
    gameMoney = gameMoney + 4.0;
    if (gameMoney > highestMoney) {
      highestMoney = gameMoney;
      highestMoneyRollCount = totalRolls;
    }
  } else {
    gameMoney = gameMoney - 1.0;
  }
};
