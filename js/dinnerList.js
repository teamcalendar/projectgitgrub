/* globals */
/* exported breakfast, lunch, dinner */
'use strict';


// Ingredient Construction
class Egg {
    constructor(pointValue) {
        this.image = 'egg.jpg';
        this.pointValue = pointValue;
    }
}

class Ham {
    constructor(pointValue) {
        this.image = 'ham.jpg';
        this.pointValue = pointValue;
    }
}

class Bacon {
    constructor(pointValue) {
        this.image = 'bacon.jpg';
        this.pointValue = pointValue;
    }
}


class Sausage {
    constructor(pointValue) {
        this.image = 'sausage.jpg';
        this.pointValue = pointValue;
    }
}

class Bread {
    constructor(pointValue) {
        this.image = 'bread.jpg';
        this.pointValue = pointValue;
    }
}


class Cheese {
    constructor(pointValue) {
        this.image = 'cheese.jpg';
        this.pointValue = pointValue;
    }
}

class Tomatoes {
    constructor(pointValue) {
        this.image = 'tomatoes.jpg';
        this.pointValue = pointValue;
    }
}

class Mushrooms {
    constructor(pointValue) {
        this.image = 'mushrooms.jpg';
        this.pointValue = pointValue;
    }
}

class BellPepper {
    constructor(pointValue) {
        this.image = 'bellPepper.jpg';
        this.pointValue = pointValue;
    }
}

//Recipe Construction 
class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

const omelet = new Recipe('Omelet', [new Egg(10), new Ham(9), new Cheese(8), new Mushrooms(5), new BellPepper(3)]);
const 


const breakfast = [omelet];
const lunch = [];
const dinner = [];
