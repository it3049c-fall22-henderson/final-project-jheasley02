const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const playGameButton = document.getElementById(`play-game-button`);

// Instantiate the Game object
let game;

// Hide Game Screen
gameScreen.classList.add(`d-none`);

// play-button Event Listener
playGameButton.addEventListener(`click`, function() {
  gameScreen.classList.remove(`d-none`);
  game = new Phaser.Game(ataribreakout);
  welcomeScreen.style.visibility = `hidden`;
});