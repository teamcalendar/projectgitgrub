/* exported ScoreDisplay */
/* globals */

'use strict';

const scoreDisplayTemplate = document.getElementById('score-display-template');

class ScoreDisplay {
    constructor(score) {
        this.score = score;
    }
    update(score){
        this.score = score;
        console.log('score is', this.score);
        this.scoreUpdateLocation.textContent = this.score;
    }
    render() {
        const dom = scoreDisplayTemplate.content.cloneNode(true);
        this.scoreUpdateLocation = dom.querySelector('h2');
        this.scoreUpdateLocation.textContent = this.score;
        return dom;
    }
}