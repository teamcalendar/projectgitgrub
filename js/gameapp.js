/* exported GameApp */
/* globals PlayerDisplay, JudgeDisplay, RoundDisplay, Transition, ScoreDisplay */

'use strict';

const userArray = window.localStorage.getItem('userData');
const userArrayParse = JSON.parse(userArray);
const chefSelect = userArrayParse[0];
const playerName = userArrayParse[1];
console.log('user array info:', userArrayParse);

const appTemplate = document.getElementById('app-template');

class GameApp {
    constructor() {
        this.roundNumber = 1;
        this.score = 0;
        this.playerName = playerName;
        this.chefSelect = chefSelect;

    }

    render() {
        const dom = appTemplate.content;

        const playerDisplaySection = dom.getElementById('player-display');
        const playerDisplayComponent = new PlayerDisplay(this.playerName, this.chefSelect);
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
        
        const transitionSection = dom.getElementById('transition');
        const transitionComponent = new Transition(this.roundNumber, this.score, this.playerName);
        transitionSection.appendChild(transitionComponent.render());
        
        return dom;
    }
}

