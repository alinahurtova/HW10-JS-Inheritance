var Gladiator = function (name) {
    this.name = name;

    this.attack = function () {
        return (Math.floor(Math.random() * (10 - 1)) + 1);
    };
    this.hitpoints = function () {
        return (Math.floor(Math.random() * (101 - 80)) + 80);
    };
    this.setAttack = function () {
        console.log(this.name + ' аттакует с силой ' + this.attack());
    };
    this.setHitpoints = function () {
        console.log(this.name + ' - ' + this.hitpoints() + ' очков');
    };
    this.fight = function (enemy) {
        console.log(enemy.hitpoints() - this.attack());
    };
};

var Champion = function (name) {
    Gladiator.apply(this, arguments);
};

var Monster = function (name) {
    Gladiator.apply(this, arguments);
};

Champion.prototype = Gladiator();
Monster.prototype = Gladiator();

var heracles = new Champion('Геракл');
var boar = new Monster('BOAR');

console.log( boar.fight(heracles) );

