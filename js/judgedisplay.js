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
        
        if(this.roundNumber === 2 && this.score < 80){
            this.judgeState = '/images/Judge-sad.png';

        } else if(this.score > 100) {
            this.judgeState = '/images/Judge-default.png';

        } else if(this.score > 120) {
            this.judgeState = '/images/Judge-happy.png';
        }

        if(this.roundNumber === 3 && this.score < 160){
            this.judgeState = '/images/Judge-sad.png';

        } else if(this.score > 200) {
            this.judgeState = '/images/Judge-default.png';

        } else if(this.score > 240) {
            this.judgeState = '/images/Judge-happy.png';
        }

        return dom;
    }
}