


class Enemy {
  constructor(name) {
    this.health = 100;
  }
}

let javaScript = new Enemy()

let css = new Enemy()

let boaConstructor = new Enemy()


class Player {
  constructor(name) {
    this.health = 100;
  }
}

let rachel = new Player()

let marcos = new Player()

let ramona = new Player()


//////////////////////////////////////event listener for fight button
// still needs function name beside click

let p1Attack = () => {
  console.log("attack");
}
let fightButton = document.querySelector('.attack-button').addEventListener("click", p1Attack);
