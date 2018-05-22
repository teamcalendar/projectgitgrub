/* exported RoundDisplay */
/* globals Item, breakfast */

'use strict';

const roundDisplayTemplate = document.getElementById('round-display-template');

class RoundDisplay {
    constructor() {

    }

    render() {
        const dom = roundDisplayTemplate.content;
        const recipe = pickRandomRecipe(breakfast);
        const recipeName = dom.getElementById('recipe-name');
        recipeName.textContent = recipe.name;

        const itemSelectorSection = dom.getElementById('item-selector');
        for(let i = 0; i < 10; i++) {
            const itemSelectorComponent = new Item();
            itemSelectorSection.appendChild(itemSelectorComponent.render());
        }
        return dom;
    }
}

//returns a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickRandomRecipe(recipeArray) {
    const index = getRandomInt(recipeArray.length);
    const singleRecipe = recipeArray[index];
    return singleRecipe;
}


