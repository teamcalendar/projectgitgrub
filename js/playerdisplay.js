/* exported PlayerDisplay */
/* globals */

'use strict';

const playerDisplayTemplate = document.getElementById('player-display-template');

class PlayerDisplay {
    constructor(chefSelect, userName) {
        this.chefSelect = chefSelect;
        this.userName = userName;
    }

    render() {
        const dom = playerDisplayTemplate.content.cloneNode(true);
        const playerImage = dom.querySelector('img');
        playerImage.src = this.chefSelect;
        return dom;
    }
}