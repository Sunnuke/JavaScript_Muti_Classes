// PARENT CLASS
class Card {
    // ATTRIBUTES
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

// CHILD CLASS
class Unit extends Card {
    // ATTRIBUTES
    constructor(name, cost, power, res) {
        super(name, cost) {
            this.power = power;
            this.res = res;
        }
    }
    // METHODS
    attack(target) {
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    // ATTRIBUTES
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost) {
            this.text = text;
            this.stat =stat;
            this.magnitude = magnitude;
        }
    }
    // METHODS
    play( target ) {
        if( target instanceof Unit ) {
            target.res += this.magnitude
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}