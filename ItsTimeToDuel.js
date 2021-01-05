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
        super(name, cost);
        this.power = power;
        this.res = res;
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
        super(name, cost);
        this.text = text;
        this.stat =stat;
        this.magnitude = magnitude;
    }
    // METHODS
    play( target ) {
        if( target instanceof Unit ) {
            if (this.stat == "resilience") {
                target.res += this.magnitude
            }
            else if (this.stat == "power") {
                target.power += this.magnitude
            } 
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

// OUTPUT SCENARIO:
// Turn 1:
const redUnitCard = new Unit('Red Belt Ninja', 3, 3, 4);
console.log(redUnitCard);
const algoEffect = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", 'resilience', +3);
console.log(algoEffect);
algoEffect.play(redUnitCard);
console.log(redUnitCard.name + " " + algoEffect.stat + " after effect: " + redUnitCard.res);

// Turn 2:
const blackUnitCard = new Unit('Black Belt Ninja', 4, 5, 4);
console.log(blackUnitCard);
const rejectionEffect = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
console.log(rejectionEffect);
rejectionEffect.play(redUnitCard);
console.log(redUnitCard.name + " " + rejectionEffect.stat + " after effect: " + redUnitCard.res);

// Turn 3:
const pairEffect = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);
console.log(pairEffect);
pairEffect.play(redUnitCard);
console.log(redUnitCard);
redUnitCard.attack(blackUnitCard);
console.log(blackUnitCard);
