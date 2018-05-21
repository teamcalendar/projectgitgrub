/* exported PlayerDisplay */
/* globals */

'use strict';

const playerDisplayTemplate = document.getElementById('player-display-template');

class PlayerDisplay {
    constructor() {

    }

    render() {
        const dom = playerDisplayTemplate.content;
        
        return dom;
    }
}