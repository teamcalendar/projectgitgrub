/* exported JudgeDisplay */
/* globals */

'use strict';

const judgeDisplayTemplate = document.getElementById('judge-display-template');

class JudgeDisplay {
    constructor(score) {
        this.score = score;
        this.judgeState = '/images/Judge-default.png';

    }

    render() {
        const dom = judgeDisplayTemplate.content.cloneNode(true);
        const judgeImage = dom.querySelector('img');
        judgeImage.src = this.judgeState;
        return dom;
    }
}