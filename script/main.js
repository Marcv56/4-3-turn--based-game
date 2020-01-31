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
    player.status = true;
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



//************************Event Listeners for DropDown***************************



let chooseFighter = (event) => {
  if (event.target.value === 'rachel') {
    rachel.status = 'active';
    console.log(rachel);
  } else if (event.target.value === 'marcos') {
    marcus.status = 'active';
    console.log(marcos);
  } else if (event.target.value === 'ramona') {
    marcus.status = 'active';
    console.log(ramona);
  }
}
// let fighters = document.querySelectorAll('.dropdown-item').addEventListener('click', chooseFighter);
let fighters = document.querySelectorAll('.dropdown-item');
  fighters.forEach(function(){addEventListener('click', chooseFighter)});

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

let attack = (event) => {
  rachel.attack(marcos);
  console.log(marcos);
  console.log(rachel);
  // console.log(rachel.status);
}


// trying to write a function to display the enemys health when fight button is pressed



let fightButton = document.querySelector('.attack-button').addEventListener("click", attack);
