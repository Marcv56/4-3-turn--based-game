//class Player can account for both enemies and players as they have the same
//base properties.

class Player {
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.status = null;
  }

  attack (player) {
    player.health -= 5;
    // player.status = true;
  }
}


class Enemy extends Player {
  constructor(name) {
    super();


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

let theHand = new Enemy({
    name: 'Hand',
    weapon: 'IndexFinger',
    value: 0 //this value will be randomly selected in JS by math.random()
})

let donkeyKong = new Enemy({
    name: 'DK',
    weapon: 'SmashArm',
    value: 2
})

let polyGon = new Enemy({
    name: 'polyGon',
    weapon: 'polyGuns',
    value: 1
})

let selectedPlayer;
let selectedVillain;
let chooseVillian = () => {
  return Math.floor(Math.random() * Math.floor(max));//returns 0, 1, or 3;
}


//************************Event Listeners for DropDown***************************
let chooseFighter = (event) => {
  if (event.target.alt === 'rachel') {
    selectedPlayer = rachel; //should also randomly select a villian here********
    updateFighterHTML(rachel);
    rachel.status = 'active';
    console.log(rachel);
  }
  else if (event.target.alt === 'marcos') {
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
}


let updateFighterHTML = (player) => {
  var playerName = player.name.name
  document.getElementById('playerLeft').style.background =  'url(images/' + playerName + '.jpeg) no-repeat';

  console.log("you picked", playerName)
  // document.getElementById('playerLeft').style.background =""

  // use a template to update your HTML
}
// let fighters = document.querySelectorAll('.dropdown-item').addEventListener('click', chooseFighter);
let fighters = document.querySelectorAll('.dropdown-item');
// fighters.forEach(function(){addEventListener('click', chooseFighter)});
// fighters.forEach((fighter) => fighter.addEventListener('click', chooseFighter));

//this is to have the characters show on screen when selected








// *******************Trying to import constructor data into template**************
//
// let chooseFighter = (data) => { //this function will fire on an event
//   let source = $('#choose-player-template').html();
//   let template = Handlebars.compile(source);
//   let ramona = new Player();//this will call on the constructor to create the player selected
//   let html = template(data);
//   $('.dropdown-menu').html(html);
// }

// let fighters = document.querySelector('.dropdown').addEventListener('click', chooseFighter);



//////////////////////////////////////event listener for fight button
// selectedPlayer.attack(selectedVillain);
//
// selectedVillain.attack(selectedPlayer);


let attack = (event) => {
  selectedPlayer.attack(selectedVillian);
  console.log(marcos);
  console.log(rachel);
}



let fightButton = document.querySelector('.attack-button').addEventListener("click", attack);
