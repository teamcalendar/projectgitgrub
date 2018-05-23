/* exported GameApp */
/* globals PlayerDisplay, JudgeDisplay, RoundDisplay, ScoreDisplay */

'use strict';

const appTemplate = document.getElementById('app-template');

class GameApp {
    constructor() {
        this.roundNumber = 1;
        this.score = 0;
        this.playerName;
        this.chefSelect;

    }

    render() {
        const dom = appTemplate.content;

        const playerDisplaySection = dom.getElementById('player-display');
        const playerDisplayComponent = new PlayerDisplay(this.chefSelect, this.playerName);
        playerDisplaySection.appendChild(playerDisplayComponent.render());
        
        const judgeDisplaySection = dom.getElementById('judge-display');
        const judgeDisplayComponent = new JudgeDisplay(this.score);
        judgeDisplaySection.appendChild(judgeDisplayComponent.render());

        const roundDisplaySection = dom.getElementById('round-display');
        const roundDisplayComponent = new RoundDisplay(this.roundNumber, this.score, this.playerName, (score) => {
            this.score += score;

            //update score display

            this.roundNumber++;

            //trigger a transition

            roundDisplayComponent.update(this.roundNumber);
            
            // update judge display based on score

        });
        roundDisplaySection.appendChild(roundDisplayComponent.render());
        
        const scoreDisplaySection = dom.getElementById('score-display');
        const scoreDisplayComponent = new ScoreDisplay(this.score);
        scoreDisplaySection.appendChild(scoreDisplayComponent.render());
        
        return dom;
    }
}

