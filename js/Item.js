/* exported Item */
/* globals */

'use strict';

const itemTemplate = document.getElementById('item-template');

class Item {
    constructor() {

    }

    render() {
        const dom = itemTemplate.content.cloneNode(true);
        
        return dom;
    }
}