/* exported Ingredient */
/* globals */

'use strict';

const ingredientTemplate = document.getElementById('ingredient-template');

class Ingredient {
    constructor(ingredient) {
        this.ingredient = ingredient;
    }

    render() {
        const dom = ingredientTemplate.content.cloneNode(true);
        const image = dom.querySelector('img');
        image.src = './images/' + this.ingredient.image;
        image.addEventListener('click', () => {
            console.log(this.ingredient);
        });
        return dom;
    }
}