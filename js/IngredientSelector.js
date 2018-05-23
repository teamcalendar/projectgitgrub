/* exported IngredientSelectorDisplay */
/* globals Ingredient, getRandomInt, breakfastIngredients */

'use strict';

const ingredientSelectorTemplate = document.getElementById('ingredient-selector-template');

class IngredientSelectorDisplay {
    constructor(recipe, onSubmit) {
        this.recipe = recipe;
        this.allIngredients = breakfastIngredients;
        this.onSubmit = onSubmit;
        this.roundScore = 0;
    }

    render() {
        const dom = ingredientSelectorTemplate.content;
        const recipeName = dom.getElementById('recipe-name');
        recipeName.textContent = this.recipe.name;

        //Find out how many ingredients the recipe specifies, and add them to arrayOf10Ingredients
        let arrayOf10Ingredients = this.recipe.ingredients;

        //Calculate how many more "dummy" ingredients are needed
        const remainingIngredients = 10 - arrayOf10Ingredients.length;

        //Randomly select enough unique "dummy" ingredients and add them into arrayOf10Ingredients
        for(let j = 0; j < remainingIngredients;) {
            let index = getRandomInt(this.allIngredients.length);
            let dummyIngredient = this.allIngredients[index];

            // I don't know to use .includes comparing ingredients that are new objects, but same image except this workaround
            let arrayOfIngredientNames = [];
            for(let i in arrayOf10Ingredients) {
                arrayOfIngredientNames.push(arrayOf10Ingredients[i].image);
            }


            if(arrayOfIngredientNames.includes(dummyIngredient.image) === false) {
                arrayOf10Ingredients.push(dummyIngredient);
                j++;
            }
        }

        shuffleArray(arrayOf10Ingredients);

        // putting the chosen ingredients onto the page
        const ingredientSelectorSection = dom.getElementById('ingredient');
        for(let i = 0; i < 10; i++) {
            const ingredientSelectorComponent = new Ingredient(arrayOf10Ingredients[i], (ingredient, statusChange) => {
                if(statusChange === true) {
                    this.roundScore += ingredient.pointValue;
                    console.log(ingredient.constructor.name, 'is selected');
                } else {
                    this.roundScore -= ingredient.pointValue;
                }
                console.log(this.roundScore);
            });
            ingredientSelectorSection.appendChild(ingredientSelectorComponent.render());
        }
        const submitButton = dom.querySelector('button');
        submitButton.addEventListener('click', () => {
            // event.preventDefault;
            this.onSubmit(this.score);
        });
        return dom;
    }
}

function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}