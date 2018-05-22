/* exported Ingredient */
/* globals */

'use strict';

const ingredientTemplate = document.getElementById('ingredient-template');

class Ingredient {
    constructor() {

    }

    render() {
        const dom = ingredientTemplate.content.cloneNode(true);
        
        return dom;
    }
}