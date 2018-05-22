/* exported Transition */
/* globals */

'use strict';

const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, playerName, score) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
    }

    render() {
        const dom = transitionTemplate.content;
        
        return dom;
    }
}