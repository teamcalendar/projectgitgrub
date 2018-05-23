/* exported ScoreDisplay */
/* globals */

'use strict';

const scoreDisplayTemplate = document.getElementById('score-display-template');

class ScoreDisplay {
    constructor(score) {
        this.score = score;
    }

    render() {
        const dom = scoreDisplayTemplate.content.cloneNode(true);
        const scoreUpdateLocation = dom.querySelector('h2');
        scoreUpdateLocation.textContent = this.score;
        return dom;
    }
}