/* Your code goes here */
class Fighter {
  constructor(properties) {
    this.name = properties.name;
    this.damage = properties.damage;
    this.hp = properties.hp;
    this.strength = properties.strength;
    this.agility = properties.agility;
    this.wins = 0;
    this.losses = 0;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  getStrength() {
    return this.strength;
  }
  getAgility() {
    return this.agility;
  }
  getHealth() {
    return this.hp;
  }
  attack(defender) {
    let successProb = 100 - (defender.getStrength() + defender.getAgility());
    let rand = Math.floor(Math.random() * 100);
    if (rand < successProb) {
      defender.hp = defender.getHealth() - this.getDamage();
      console.log(
        `${this.getName()} makes ${this.getDamage()} to ${defender.getName()}`
      );
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }
  logCombatHistory() {
    console.log(
      `Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`
    );
  }
  heal(amount) {
    this.hp = this.hp + amount;
  }
  dealDamage(amount) {
    this.hp = this.hp - amount;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }
  addWin() {
    this.wins += 1;
  }
  addLoss() {
    this.losses += 1;
  }
}
function battle(firstFighter, secondFighter) {
  if (firstFighter.hp === 0 || secondFighter.hp === 0) {
    console.log('Battle cant be simulated');
  } else {
    do {
      firstFighter.attack(secondFighter);
      secondFighter.attack(firstFighter);
    } while (firstFighter.hp > 0 && secondFighter.hp > 0);
    if (firstFighter.hp === 0) {
      console.log(`${secondFighter.getName()} won!`);
      secondFighter.addWin();
      firstFighter.addLoss();
    } else if (secondFighter.hp === 0) {
      console.log(`${firstFighter.getName()} won!`);
      firstFighter.addWin();
      secondFighter.addLoss();
    }
  }
}
const myFighter1 = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 30,
  agility: 25
});
const myFighter2 = new Fighter({
  name: 'Vasya',
  damage: 5,
  hp: 100,
  strength: 20,
  agility: 45
});
battle(myFighter1, myFighter2);
