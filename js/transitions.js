/* exported highScoreList Transition */
/* globals roundNumber */

'use strict';

let highScoreList = [];



const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, score, playerName) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
        this.message = '';
    }
    
    render() {

        // create the new player object
        // var gameData = new Transition (roundNumber, playerName, score);

        //if statement selects proper transition message based on score and round
        const dom = transitionTemplate.content;

        if(this.roundNumber === 1 && this.score < 50){
            this.message = 'Well, that\'s OK to move on but you can do better! Got to step it up in the next round!';

        } else if(this.score < 100) {
            this.message = 'Nice work, you\ve cooked before, but you\re up against real competition in the next round!';

        } else if(this.score > 150) {
            this.message = 'Amazing! You should be a judge - that\'s a perfect dish!';
        }

        if(this.roundNumber === 2 && this.score < 200){
            this.message = 'You need to step it up if you\re going to stay in this kitchen!! On to the last round!';

        } else if(this.score < 250) {
            this.message = 'Fair... OK... Boring!! But good enough to move on to the next round!';

        } else if(this.score < 300) {
            this.message = 'Are you sure you aren\'t a professional? This dish is fantastic! Now go take on the final round!';
        }

        if(this.roundNumber === 3 && this.score < 350) {
            this.message = 'Time for you to go home! I don\t think you\re cut out for our Hall of Fame!';
            //pushes object into highScoreList array
            highScoreList.push(this.playerName, this.score);

        } else if(this.score < 400) {
            this.message = 'You may not be the #1 score, but you did yourself proud! Great cooking skills!';
            //pushes object into highScoreList array
            highScoreList.push(this.playerName, this.score);

        } else if(this.score > 450) {
            this.message = 'You\re among the greats! This dish is sure to put you in our Hall of Fame!';
            //pushes object into highScoreList array
            highScoreList.push(this.playerName, this.score);
        }
        this.transitionMessage = document.querySelector('h3');
        this.transitionMessage.textContent = this.message;
        return dom;
    }
    clearTransitionMessage() {
        this.transitionMessage.textContent = '';
    }
}

console.log(highScoreList);

