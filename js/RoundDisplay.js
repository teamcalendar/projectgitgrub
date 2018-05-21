/* exported RoundDisplay */
/* globals Item */

'use strict';

const roundDisplayTemplate = document.getElementById('round-display-template');

class RoundDisplay {
    constructor() {

    }

    render() {
        const dom = roundDisplayTemplate.content;

        const recipeName = dom.getElementById('recipe-name');
        recipeName.textContent = 'Recipe Name Goes Here';

        const itemSelectorSection = dom.getElementById('item-selector');
        for(let i = 0; i < 10; i++) {
            const itemSelectorComponent = new Item();
            itemSelectorSection.appendChild(itemSelectorComponent.render());
        }

        return dom;
    }
}