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

class Potatoes {
    constructor(pointValue) {
        this.image = 'potatoes.jpg';
        this.pointValue = pointValue;
    }
}

class ButternutSquash {
    constructor(pointValue) {
        this.image = 'butternutSquash.jpg';
        this.pointValue = pointValue;
    }
}

class Beans {
    constructor(pointValue) {
        this.image = 'beans.jpg';
        this.pointValue = pointValue;
    }
}

class Mushrooms {
    constructor(pointValue) {
        this.image = 'mushrooms.jpg';
        this.pointValue = pointValue;
    }
}

class Lemon {
    constructor(pointValue) {
        this.image = 'lemon.jpg';
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

const omelet = new Recipe('Omelet',
    [new Egg(10),
        new Ham(9),
        new Cheese(8),
        new Bacon(7),
        new Sausage(7),
    ]);
        
const fullEnglish = new Recipe('Full English',
    [new Egg(10),
        new Beans(10),
        new Sausage(9),
        new Bread(7),
        new Bacon(9),
    ]);

const benedict = new Recipe('Benedict',
    [new Egg(10),
        new Ham(10),
        new Bread(9),
        new Lemon(7),
        new Bacon(3),
    ]);

const breakfastBurrito = new Recipe('Breakfast Burrito',
    [new Egg(10),
        new Ham(9),
        new Bacon(9),
        new Sausage(9),
        new Potatoes(8),
    ]);

const hash = new Recipe('Hash',
    [new ButternutSquash(20),
        new Potatoes(10),
        new Egg(6),
        new Mushrooms(6),
        new Bacon(4)]);


const breakfast = [omelet, fullEnglish, benedict, breakfastBurrito, hash];

const breakfastIngredients = [new Egg(0), new Ham(0), new Bacon(0), new Sausage(0), new Bread(0), new Cheese(0),
    new Tomatoes(0), new Potatoes(0), new ButternutSquash(0), new Beans(0), new Mushrooms(0), new Lemon(0)];



