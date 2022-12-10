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
  welcomeScreen.style.visibility = `hidden`;

  var config = {
    type: Phaser.AUTO,
    parent: `game`,
    width: 800,
    height: 600,
    scene: {
      create: create,
      update: update
    },
    physics: {
      defailt: `arcade`,
      arcade: {
        gravity: {y:0},
        debug: false
      }
    }
  };

  var game = new Phaser.Game(config);

});

// Everything above should happen when Play is clicked