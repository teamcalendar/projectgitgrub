/* globals */
/* exported breakfast, lunch, dinner */
'use strict';



// Ingredient Construction
class Beef {
    constructor(pointValue) {
        this.image = 'beef.jpg';
        this.pointValue = pointValue;
    }
}

class Bacon {
    constructor(pointValue) {
        this.image = 'bacon.jpg';
        this.pointValue = pointValue;
    }
}

class Fish {
    constructor(pointValue) {
        this.image = 'fish.jpg';
        this.pointValue = pointValue;
    }
}

class Chicken {
    constructor(pointValue) {
        this.image = 'chicken.jpg';
        this.pointValue = pointValue;
    }
}

class Bread {
    constructor(pointValue) {
        this.image = 'bread.jpg';
        this.pointValue = pointValue;
    }
}

class Bulgar {
    constructor(pointValue) {
        this.image = 'bulgar.jpg';
        this.pointValue = pointValue;
    }
}

class Mayonaise {
    constructor(pointValue) {
        this.image = 'mayonaise.jpg';
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

class Lettuce {
    constructor(pointValue) {
        this.image = 'lettuce.jpg';
        this.pointValue = pointValue;
    }
}

class Basil {
    constructor(pointValue) {
        this.image = 'basil.jpg';
        this.pointValue = pointValue;
    }
}

class Mint {
    constructor(pointValue) {
        this.image = 'mint.jpg';
        this.pointValue = pointValue;
    }
}

class Parsley {
    constructor(pointValue) {
        this.image = 'Parsley.jpg';
        this.pointValue = pointValue;
    }
}

class Lemon {
    constructor(pointValue) {
        this.image = 'lemon.jpg';
        this.pointValue = pointValue;
    }
}

class Lime {
    constructor(pointValue) {
        this.image = 'Lime.jpg';
        this.pointValue = pointValue;
    }
}

class Plumbs {
    constructor(pointValue) {
        this.image = 'plumbs.jpg';
        this.pointValue = pointValue;
    }
}


class Peas {
    constructor(pointValue) {
        this.image = 'peas.jpg';
        this.pointValue = pointValue;
    }
}

class BellPepper {
    constructor(pointValue) {
        this.image = 'bellPepper.jpg';
        this.pointValue = pointValue;
    }
}

class Onion {
    constructor(pointValue) {
        this.image = 'onion.jpg';
        this.pointValue = pointValue;
    }
}

class HotPeppers {
    constructor(pointValue) {
        this.image = 'hotPeppers.jpg';
        this.pointValue = pointValue;
    }
}

class Mushrooms {
    constructor(pointValue) {
        this.image = 'mushrooms.jpg';
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


    
const tartare = new Recipe('Tartare',
    [new Beef(10),
        new Egg(10),
        new Parsley(8),
        new Pepper(7),
        new Basil(5)]);

const carbonara = new Recipe('Carbonara',
    [new Spaghetti(10),
        new Egg(10),
        new Parsley(8),
        new Pepper(7),
        new OliveOil(5)]);

const grilledCheese = new Recipe('Grilled Cheese',
    [new Plumbs(20),
        new Bread(10),
        new Cheese(10),
        new Bacon(8),
        new HotPeppers(7)]);

const pizza = new Recipe('Pizza',
    [new Bread(10),
        new Cheese(10),
        new Tomatoes(9),
        new Basil(9),
        new Mushrooms(7)]);
    
const dinner = [carbonara, tartare, grilledCheese, pizza, ];
    