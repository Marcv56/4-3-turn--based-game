//class Player can account for both enemies and players as they have the same
//base properties.

class Player {
  constructor(name) {
    this.health = 100;
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

// let rachel = {    //players can have preset key value pairs by making an object for each player
//   name: 'Rachel', //or by making an array of objects for all players
//   weapon: 'sword'
// }






// *******************Trying to import constructor data into template**************

let chooseFighter = (data) => { //this function will fire on an event
  let source = $('#choose-player-template').html();
  let template = Handlebars.compile(source);
  let rachel = new Player();//this will call on the constructor to create the player selected
  let html = template(data);
  $('.dropdown-menu').html(html);
}

let fighters = document.querySelector('.dropdown').addEventListener('click', chooseFighter);


//////////////////////////////////////event listener for fight button


// trying to write a function to display the enemys health when fight button is pressed
let p1Attack = (name) => {


  console.log("attack");

}



let fightButton = document.querySelector('.attack-button').addEventListener("click", p1Attack);
