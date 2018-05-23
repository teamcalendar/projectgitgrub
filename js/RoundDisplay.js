/* exported RoundDisplay */
/* globals IngredientSelectorDisplay, breakfast */

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
        this.roundNumber = roundNumber;

        const itemSelector = this.itemSelectorSection;
        while(itemSelector.lastElementChild) {
            
            console.log('hey');
            itemSelector.lastElementChild.remove();
        }

        const recipe = pickRandomRecipe(this.recipeList);


        
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
  
        itemSelector.appendChild(itemSelectorComponent.render());


        //once the submit button is clicked, the page must reload, with a new recipe
        console.log('welcome to round', roundNumber);

    }


    render() {
        const dom = roundDisplayTemplate.content.cloneNode(true);
        const recipe = pickRandomRecipe(this.recipeList);
        const tableImage = dom.querySelector('img');
        tableImage.src = '/images/Table.png';

        this.itemSelectorSection = dom.getElementById('ingredient-selector');
        const itemSelectorComponent = new IngredientSelectorDisplay(recipe, this.onSubmit);
        this.itemSelectorSection.appendChild(itemSelectorComponent.render());

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

