/* exported PlayerDisplay */
/* globals */

'use strict';
const userArray = window.localStorage.getItem('userData');

const playerDisplayTemplate = document.getElementById('player-display-template');

const userArrayParse = JSON.parse(userArray);

const chefImage = userArrayParse[0];

console.log('user image:', chefImage);

class PlayerDisplay {
    constructor(userName) {
        this.chefSelect = chefImage;
        this.userName = userName;
    }

    render() {
        const dom = playerDisplayTemplate.content.cloneNode(true);
        const playerImage = dom.querySelector('img');
        playerImage.src = this.chefSelect;
        return dom;
    }
}