/* exported RoundDisplay */
/* globals IngredientSelectorDisplay, Transition */

'use strict';

const roundDisplayTemplate = document.getElementById('round-display-template');

class RoundDisplay {
    constructor(roundNumber, score, playerName) {
        this.recipeList = breakfast;
        this.roundNumber = roundNumber;
        this.score = score;
        this.playerName = playerName;
    }

    render() {
        const dom = roundDisplayTemplate.content;
        const recipe = pickRandomRecipe(this.recipeList);

        const itemSelectorSection = dom.getElementById('ingredient-selector');
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe);
        itemSelectorSection.appendChild(itemSelectorComponent.render());

        const transitionSection = dom.getElementById('transition');
        const transitionComponent = new Transition(this.roundNumber, this.score, this.playerName);
        transitionSection.appendChild(transitionComponent.render());

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


