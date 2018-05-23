/* exported breakfast, breakfastIngredients */
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
    [new Egg(50),
        new Ham(30),
        new Cheese(30),
        new Bacon(20),
        new Sausage(20)
    ]);
        
const fullEnglish = new Recipe('Full English',
    [new Egg(30),
        new Beans(30),
        new Sausage(30),
        new Bread(30),
        new Bacon(30)
    ]);

const benedict = new Recipe('Benedict',
    [new Egg(50),
        new Ham(40),
        new Bread(30),
        new Lemon(20),
        new Bacon(10)
    ]);

const breakfastBurrito = new Recipe('Breakfast Burrito',
    [new Egg(50),
        new Ham(20),
        new Potatoes(40),
        new Bacon(20),
        new Sausage(20)
    ]);

const hash = new Recipe('Hash',
    [new ButternutSquash(50),
        new Potatoes(30),
        new Mushrooms(30),
        new Egg(20),
        new Bacon(20)
    ]);


const breakfast = [omelet, fullEnglish, benedict, breakfastBurrito, hash];

const breakfastIngredients = [new Egg(0), new Ham(0), new Bacon(0), new Sausage(0), new Bread(0), new Cheese(0),
    new Tomatoes(0), new Potatoes(0), new ButternutSquash(0), new Beans(0), new Mushrooms(0), new Lemon(0)];



