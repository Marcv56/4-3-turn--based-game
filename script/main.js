//class Player can account for both enemies and players as they have the same
//base properties.

class Player {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }

  attack (player) {
    player.health -= 5;
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
  weapon: 'Yo-Yo'
});

let rachel = new Player({
  name: 'Rachel',
  weapon: 'sword'
});

let marcos = new Player({
  name: 'Marcos',
  weapon: 'axe body spray'
});

console.log(rachel);
console.log(marcos);

rachel.attack(marcos);

console.log(rachel);
console.log(marcos);

// let rachel = {    //players can have preset key value pairs by making an object for each player
//   name: 'Rachel', //or by making an array of objects for all players
//   weapon: 'sword'
// }



//************************Event Listeners for DropDown***************************



let chooseFighter = (event) => {
  if (event.target.value === 'rachel') {
    console.log(rachel);
  } else if (event.target.value === 'marcos') {
    console.log(marcos);
  } else console.log(ramona);
}
// let fighters = document.querySelectorAll('.dropdown-item').addEventListener('click', chooseFighter);
let fighters = document.querySelectorAll('.dropdown-item');
  fighters.forEach(function(){addEventListener('click', chooseFighter)})

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
}


// trying to write a function to display the enemys health when fight button is pressed
let p1Attack = (name) => {
  console.log("attack");


}



let fightButton = document.querySelector('.attack-button').addEventListener("click", attack);
