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

class BellPepper {
    constructor(pointValue) {
        this.image = 'bellPepper.jpg';
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
        new Mushrooms(5),
        new BellPepper(3)]);

const fullEnglish = new Recipe('Full English',
    [new Egg(10),
        new Beans(10),
        new Sausage(9),
        new Bread(7),
        new Bacon(9),
        new Tomatoes(5)]);

const benedict = new Recipe('Benedict',
    [new Egg(10),
        new Ham(10),
        new Bread(9),
        new Lemon(7)]);

const breakfastBurrito = new Recipe('Breakfast Burrito',
    [new Egg(10),
        new Ham(9),
        new Potatoes(8),
        new Cheese(8),
        new Bread(8)]);

const hash = new Recipe('Hash',
    [new ButternutSquash(20),
        new Potatoes(10),
        new Egg(6),
        new Mushrooms(6),
        new BellPepper(4)]);


const breakfast = [omelet, fullEnglish, benedict, breakfastBurrito, hash];
const lunch = [];
const dinner = [];


