var Gladiator = function (name) {
    this.name = name;
    this.attack = getAttack();
        function getAttack () {
            return Math.floor(Math.random() * (10 - 1)) + 1;
        }
    this.hitpoints = getPoints();
        function getPoints () {
            return Math.floor(Math.random() * (101 - 80)) + 80;
        }
}

var Champion = function (name) {
    Gladiator.apply(this, arguments);
}

var Monster = function (name) {
    Gladiator.apply(this, arguments);
}

Champion.prototype = Gladiator();
Monster.prototype = Gladiator();

var heracles = new Champion('Геракл');
var boar = new Monster('BOAR');

// fight, setAttack, setHitpoints

// heracles.fight(boar);



















