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
        this.allIngredients = [new Cheese(0), new Bacon(0), new Egg(0), new Mushrooms(0), new BellPepper(0), new Ham(0), new Sausage(0), new Bread(0), new Beans(0), new ButternutSquash(0), new Potatoes(0), new Tomatoes(0)];

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

        const ingredientSelectorSection = dom.getElementById('ingredient');
        for(let i = 0; i < 10; i++) {
            const ingredientSelectorComponent = new Ingredient(arrayOf10Ingredients[i]);
            ingredientSelectorSection.appendChild(ingredientSelectorComponent.render());
        }

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