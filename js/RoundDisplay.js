/* exported RoundDisplay */
/* globals IngredientSelectorDisplay, Transition, breakfast */

'use strict';

const roundDisplayTemplate = document.getElementById('round-display-template');

class RoundDisplay {
    constructor(roundNumber, score, playerName, onSubmit) {
        this.recipeList = breakfast;
        this.roundNumber = roundNumber;
        this.score = score;
        this.playerName = playerName;
        this.onSubmit = onSubmit;
    }

    update(roundNumber){
        console.log('welcome to round', roundNumber);

        
    }


    render() {
        const dom = roundDisplayTemplate.content;
        const recipe = pickRandomRecipe(this.recipeList);

        const itemSelectorSection = dom.getElementById('ingredient-selector');
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
        itemSelectorSection.appendChild(itemSelectorComponent.render());

        const transitionSection = dom.getElementById('transition');
        const transitionComponent = new Transition(this.roundNumber, this.score, this.playerName);
        transitionSection.appendChild(transitionComponent.render());

        return dom;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function pickRandomRecipe(recipeArray) {
    const index = getRandomInt(recipeArray.length);
    const singleRecipe = recipeArray[index];
    return singleRecipe;
}

