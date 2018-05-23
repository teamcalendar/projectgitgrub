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

class Cilantro {
    constructor(pointValue) {
        this.image = 'cilantro.jpg';
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


class Peas {
    constructor(pointValue) {
        this.image = 'peas.jpg';
        this.pointValue = pointValue;
    }
}

class Onion {
    constructor(pointValue) {
        this.image = 'onion.jpg';
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

const tacos = new Recipe('Tacos',
    [new Bread(10),
        new Chicken(9),
        new Lettuce(5),
        new Cilantro(5),
        new Onion(4)]);
    
const chishNFips = new Recipe('Chish N Fips',
    [new Fish(10),
        new Potatoes(10),
        new Peas(8),
        new Lemon(5),
        new Mayonaise(5)]);

const ceviche = new Recipe('Ceviche',
    [new Fish(10),
        new Lime(10),
        new Onion(9),
        new Tomatoes(9),
        new Cilantro(7)
    ]);

const hamburger = new Recipe('Hamburger',
    [new Beef(10),
        new Bread(10),
        new Tomatoes(8),
        new Lettuce(7),
        new Mayonaise(6)
    ]);
    
const tabbouleh = new Recipe('Tabbouleh',
    [new Parsley(10),
        new Tomatoes(10),
        new Mint(9),
        new Onion(9),
        new Bulgar(8)]);
    
const lunch = [tacos, chishNFips, ceviche, hamburger, tabbouleh];
const lunchIngredients = [new Beef(0), new Fish(0), new Chicken(0), new Bread(0), new Bulgar(0), new Mayonaise(0), new Tomatoes,
    new Potatoes(0), new Lettuce(0), new Cilantro(0), new Mint(0), new Parsley(0), new Lemon(0), new Lime(0), new Peas(0), new Onion(0)];

    