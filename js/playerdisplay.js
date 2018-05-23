/* exported PlayerDisplay */
/* globals */

'use strict';


const playerDisplayTemplate = document.getElementById('player-display-template');


class PlayerDisplay {
    constructor(playerName, chefSelect) {
        this.playerName = playerName;
        this.chefSelect = chefSelect;
    }

    render() {
        const dom = playerDisplayTemplate.content.cloneNode(true);
        const playerImage = dom.querySelector('img');
        playerImage.src = this.chefSelect;
        return dom;
    }
}