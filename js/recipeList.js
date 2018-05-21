/* globals */
/* exported breakfast, lunch, dinner */
'use strict';

class Ingredient {
    constructor(name, image) {
        this.name = name;
        this.image = './images/' + image;
    }

    point(pointValue) {
        this.pointValue = pointValue;
    }
}

const egg = new Ingredient('egg', 'egg.jpg');
const ham = new Ingredient('ham', 'ham.jpg');
const cheese = new Ingredient('cheese', 'cheese.jpg');
const mushroom = new Ingredient('mushroom', 'mushroom.jpg');
const bellPepper = new Ingredient('bell pepper', 'bellPepper.jpg');


class Recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

const omelet = new Recipe('Omelet', [egg.point(10), ham, cheese, mushroom, bellPepper]);
const avocadoToast = new Recipe('Avocado Toast', []);




const breakfast = [omelet, avocadoToast];
console.log(breakfast);

const lunch = [];
const dinner = [];