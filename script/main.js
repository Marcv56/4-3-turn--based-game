//class Player can account for both enemies and players as they have the same
//base properties.


class Player {
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.status = null;
  }

  attack (player) {
    let damage = Math.floor((Math.random() * 10) + 1);
    player.health -= damage;
    // player.status = true;
  }
}


class Enemy extends Player {
  constructor(name) {
    super();
    this.name = name;
    this.status = null;


  }
}



class BTeam extends Player {
  constructor(config) {
    super();
    this.name = config.name;
    this.weapon = config.weapon;
  }


}

// ***************************BTEAM_PLAYERS_TO_CHOOSE_FROM*************************

let ramona = new Player({
  name: 'Ramona',
  weapon: 'Yo-Yo',
  value: 1
});

let rachel = new Player({
  name: 'Rachel',
  weapon: 'mace',
  value: 2
});

let marcos = new Player({
  name: 'Marcos',
  weapon: 'axe body spray',
  value: 3
});


let pearl = new Player({
  name: 'Pearl',
  weapon: 'shiny sword',
  value: 4
});


// ********************RANDOMLY_SELECTED_VILLIANS***********************************

let mario = new Enemy({
    name: 'Mario',
    weapon: 'pipe',
    value: 0 //this value will be randomly selected in JS by math.random()
})

let donkeyKong = new Enemy({
    name: 'DK',
    weapon: 'SmashArm',
    value: 2
})

let cptFalcon = new Enemy({
    name: 'cptFalcon',
    weapon: 'polyGuns',
    value: 1
})

let selectedPlayer;
let selectedVillain;
// let chooseVillian = () => {
//   let randomValue = Math.floor(Math.random() * Math.floor(3));//returns 0, 1, or 2;
//   console.log(randomVillian);
// }
//
// chooseVillian();

//*************************EVENTLISTENERFORSTARTBUTTON***************************

let chooseEnemy = (event) => {
  let randomValue = Math.floor(Math.random() * Math.floor(3));
  if (randomValue === 0) {
    selectedVillian = mario;
    console.log(selectedVillian);
    updateEnemyHTML(selectedVillian);
    selectedVillian.status = 'active'
  } else if (randomValue === 1) {
    selectedVillian = cptFalcon;
    console.log(selectedVillian);
    updateEnemyHTML(selectedVillian);
    selectedVillian.status = 'active'
  } else if (randomValue === 2) {
    selectedVillian = donkeyKong;
    console.log(selectedVillian);
    updateEnemyHTML(selectedVillian);
    selectedVillian.status = 'active'
  }
}

let updateEnemyHTML = (enemy) => {
  var enemyName = enemy.name.name
  document.getElementById('playerRight').style.background =  'url(images/' + enemyName + '.jpeg) no-repeat';

  console.log("fight", enemyName)
}


let goButton = document.querySelector('.start-button').addEventListener('click', chooseEnemy);



//************************Event Listeners for DropDown***************************
let chooseFighter = (event) => {

  if (event.target.alt === 'rachel') {
    selectedPlayer = rachel; //should also randomly select a villian here********
    updateFighterHTML(rachel);
    rachel.status = 'active';
    console.log(rachel);
  } else if (event.target.alt === 'marcos') {
    selectedPlayer = marcos;
    updateFighterHTML(marcos);
    marcos.status = 'active'
    console.log(marcos);
  } else if (event.target.alt === 'ramona') {
    selectedPlayer = ramona;
    updateFighterHTML(ramona);
    ramona.status = 'active'
    console.log(ramona);
  }
  stageMusic = document.getElementById('background-music');
  stageMusic.play()
}


let updateFighterHTML = (player) => {
  var playerName = player.name.name
  document.getElementById('playerLeft').style.background =  'url(images/' + playerName + '.jpeg) no-repeat';

  console.log("you picked", playerName)
  // document.getElementById('playerLeft').style.background =""

  // use a template to update your HTML
}

let chooseYourChar = (event) => {
  choose.play();
}

let choose = document.getElementById('chooseChar');
let charChoice = document.getElementById('dropdownMenuButton')
charChoice.addEventListener('click', chooseYourChar);
let fighters = document.querySelectorAll('.dropdown-item');
let gameMsg = document.getElementById('game-msg');

let attack = (event) => {

  // you attack enemy
  selectedPlayer.attack(selectedVillian);
  let playerHealth = selectedPlayer.health;

    let width = playerHealth;
    let pixel = width + "%";

    document.querySelector(".player-health-bar").style.width = pixel;
  // document.querySelector(".player-health").innerHTML = playerHealth;


  //enemy attacks back
  selectedVillian.attack(selectedPlayer);


  // console.log(selectedPlayer);
  // console.log(selectedVillian);


  if(selectedPlayer.health <= 0){
    console.log("You Lose");
    gameMsg.innerHTML = 'You Lost!';
    charChoice.style.display = 'none';
  }
  else if (selectedVillian.health <= 0){
    console.log("You Win");
    gameMsg.innerHTML = 'You Won!';
    charChoice.style.display = 'none';
  }
}

let fightButton = document.querySelector('.attack-button').addEventListener("click", attack);
