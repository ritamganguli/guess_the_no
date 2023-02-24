let computerGuess;
let userNumber;
let userGuess = [];
let userGuessUpdate = document.getElementById("your_guess");
let userNumberUpdate = document.getElementById("inputBox");
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("game_arena").style.display = "none";
}
// start new game
const startNewGame = () => {
    document.getElementById("newGame").style.display = "block";
    userNumberUpdate.setAttribute("disabled", true);
  };
  const newGameBegin = () => {
    window.location.reload();
  };
  
//Ab comare() karo 
const compare = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber] // ... ye hota he spread opertor to usse hum save kar le rahe he userGuess Me
    document.getElementById("guesses").innerHTML=userGuess;
    if (userGuess.length < maxAttempts) {
        if (userNumber > computerGuess) {
          userGuessUpdate.innerHTML = "Your guess is High 😲";
          userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
          userGuessUpdate.innerHTML = "Your guess is Low 😌";
          userNumberUpdate.value = "";
        } else {
          userGuessUpdate.innerHTML = "It's Correct 😀";
          userNumberUpdate.value = "";
          startNewGame();
        }
      } else {
        if (userNumber > computerGuess) {
          userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
          userNumberUpdate.value = "";
          startGame();
        } else if (userNumber < computerGuess) {
          userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
          userNumberUpdate.value = "";
          startNewGame();
        } else {
          userGuessUpdate.innerHTML = "It's Correct 😀";
          userNumberUpdate.value = "";
          startNewGame();
        }
      }
      document.getElementById("attempts").innerHTML = userGuess.length;
    
}
//Bhai ab easy attempts ka hard attempts pe jab click honge to bolega game ko start kar
const startGame = () => {
    document.getElementById("font_page_1").style.display = "none";
    document.getElementById("newGame").style.display = "none";
    document.getElementById("game_arena").style.display = "block";
}
//Jab koi asy attempts me click karega to chances to apan usko 10 de rahe he
const easyAttempts = () => {
    maxAttempts = 10;
    startGame()
}
const hardAttempts = () => {
    maxAttempts = 5;
    startGame()
}

