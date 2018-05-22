/* exported IngredientSelectorDisplay */
/* globals Ingredient, getRandomInt */

'use strict';

const ingredientSelectorTemplate = document.getElementById('ingredient-selector-template');

class IngredientSelectorDisplay {
    constructor(recipe, allIngredients) {
        this.recipe = recipe;
        this.allIngredients = allIngredients;
    }

    render() {
        const dom = ingredientSelectorTemplate.content;
        const recipeName = dom.getElementById('recipe-name');
        recipeName.textContent = this.recipe.name;

        //Find out how many ingredients the recipe specifies, and add them to arrayOf10Ingredients
        let arrayOf10Ingredients = this.recipe.ingredients;

        //Calculate how many more "dummy" ingredients are needed
        const remainingIngredients = 10 - arrayOf10Ingredients.length;
        this.allIngredients = [new Cheese(0), new Bacon(0)];
        console.log(this.allIngredients);

        //Randomly select enough "dummy" ingredients and add them into arrayOf10Ingredients
        for(let j = 0; j < remainingIngredients; j++) {
            
            let index = getRandomInt(this.allIngredients.length);
            console.log('Index: ', index);
            let dummyIngredient = this.allIngredients[index];
            console.log('Dummy: ', dummyIngredient);
            arrayOf10Ingredients.push(dummyIngredient);
        }


        //Shuffle arrayOf10Ingredients
        console.log(arrayOf10Ingredients);


        const ingredientSelectorSection = dom.getElementById('ingredient');
        for(let i = 0; i < 10; i++) {
            const ingredientSelectorComponent = new Ingredient(arrayOf10Ingredients[i]);
            ingredientSelectorSection.appendChild(ingredientSelectorComponent.render());
        }

        return dom;
    }
}