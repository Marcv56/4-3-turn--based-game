console.log("hello");


class Enemy {
  constructor(name) {
    this.health = 100;
  }
}

let JavaScript = new Enemy {
  constructor(name) {
    super();
  }
}

let Css = new Enemy {
  constructor(name) {
    super();
  }
}

let BoaConstructor = new Enemy {
  constructor(name) {
    super();
  }
}

class Player {
  constructor(name) {
    this.health = 100;
  }
}

let Rachel = new Player {
  constructor(name) {
    super();
  }
}

let Marcos = new Player {
  constructor();
  super();
}

let Ramona = new Player {
  constructor() {
  super();
  }
}


//////////////////////////////////////event listener for fight button
// still needs function name beside click

let p1Attack = () => {
  console.log("attack");
}
let fightButton = document.querySelector('.attack-button').addEventListener("click", p1Attack);
