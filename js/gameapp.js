/* exported GameApp */
/* globals PlayerDisplay, JudgeDisplay, RoundDisplay, ScoreDisplay */

'use strict';

const appTemplate = document.getElementById('app-template');

class GameApp {
    constructor() {

    }

    render() {
        const dom = appTemplate.content;

        const playerDisplaySection = dom.getElementById('player-display');
        const playerDisplayComponent = new PlayerDisplay();
        playerDisplaySection.appendChild(playerDisplayComponent.render());
        
        const judgeDisplaySection = dom.getElementById('judge-display');
        const judgeDisplayComponent = new JudgeDisplay();
        judgeDisplaySection.appendChild(judgeDisplayComponent.render());

        const roundDisplaySection = dom.getElementById('round-display');
        const roundDisplayComponent = new RoundDisplay();
        roundDisplaySection.appendChild(roundDisplayComponent.render());
        
        const scoreDisplaySection = dom.getElementById('score-display');
        const scoreDisplayComponent = new ScoreDisplay();
        scoreDisplaySection.appendChild(scoreDisplayComponent.render());
        
        return dom;
    }
}