


class Enemy {
  constructor(name) {
    this.health = 100;
  }
}


let javaScript = new Enemy()

let css = new Enemy();

let boaConstructor = new Enemy();



class Player {
  constructor(name) {
    this.health = 100;
  }
}


let rachel = new Player()

let marcos = new Player();

let ramona = new Player();

// *******************Trying to import constructor data into template**************

let chooseFighter = (data) => {
  let source = $('#choose-player-template').html();
  let template = Handlebars.compile(source);
  let context = data;
  let html = template(data);
  $('.dropdown').html(html);
}


//////////////////////////////////////event listener for fight button


// trying to write a function to display the enemys health when fight button is pressed
let p1Attack = (name) => {
  console.log(Enemy.name.health);

  console.log("attack");
}



let fightButton = document.querySelector('.attack-button').addEventListener("click", p1Attack);
