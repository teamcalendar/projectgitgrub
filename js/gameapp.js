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
    
    nextRound() {
        console.log('3 seconds have passed', this.transitionComponent);
        this.transitionComponent.clearTransitionMessage();
        this.roundNumber ++;
        this.roundDisplayComponent.update(this.roundNumber);
    }
    
    render() {
        const dom = appTemplate.content;
        
        document.body.style.backgroundImage = 'url(/images/Round1-bg.jpg)';
        console.log('roundNumber is:', this.roundNumber);
        if(this.roundNumber === 2) {
            document.body.style.backgroundImage = 'url(/images/Round2-bg.jpg)';
        } else if(this.roundNumber === 3) {
            document.body.style.backgroundImage = 'url(/images/Round3-bg.jpg)';
        }

        const playerDisplaySection = dom.getElementById('player-display');
        const playerDisplayComponent = new PlayerDisplay(this.playerName, this.chefSelect);
        playerDisplaySection.appendChild(playerDisplayComponent.render());
        
        const judgeDisplaySection = dom.getElementById('judge-display');
        const judgeDisplayComponent = new JudgeDisplay(this.score);
        judgeDisplaySection.appendChild(judgeDisplayComponent.render());

        const transitionSection = dom.getElementById('transition');
        
        const roundDisplaySection = dom.getElementById('round-display');
        this.roundDisplayComponent = new RoundDisplay(this.roundNumber, this.score, this.playerName, (roundScore) => {
            this.score += roundScore;

            //update score display

            // update judge display based on score

            //trigger a transition
            console.log(transitionSection);
            this.transitionComponent = new Transition(this.roundNumber, this.score, this.playerName);
            transitionSection.appendChild(this.transitionComponent.render());

            window.setTimeout(() => {
                this.transitionComponent.clearTransitionMessage();
                this.roundNumber ++;
                this.roundDisplayComponent.update(this.roundNumber);
            }, 3000);
        });
        roundDisplaySection.appendChild(this.roundDisplayComponent.render());
        
        const scoreDisplaySection = dom.getElementById('score-display');
        const scoreDisplayComponent = new ScoreDisplay(this.score);
        scoreDisplaySection.appendChild(scoreDisplayComponent.render());
        
        
        
        return dom;
    }
}