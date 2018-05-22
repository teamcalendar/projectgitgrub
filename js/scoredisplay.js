/* exported ScoreDisplay */
/* globals */

'use strict';

const scoreDisplayTemplate = document.getElementById('score-display-template');

class ScoreDisplay {
    constructor() {

    }

    render() {
        const dom = scoreDisplayTemplate.content;
        
        return dom;
    }
}