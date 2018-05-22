/* exported Transition */
/* globals roundNumber */

'use strict';

let highScoreList = [];

const transitionTemplate = document.getElementById('transition-template');

class Transition {
    constructor(roundNumber, playerName, score) {
        this.roundNumber = roundNumber;
        this.playerName = playerName;
        this.score = score;
    }
    

    render() {

        // create the new player object

        //pushes object into highScoreList array

        //if statement selects proper transition message based on score and round

        const dom = transitionTemplate.content;
        if(roundNumber === 1 && score < 50){
            let message = 'Well, that\'s OK to move on but you can do better! Got to step it up in the next round!';
        } else if (score < 100) {
            message = 'Nice work, you\ve cooked before, but you\re up against real competition in the next round!';
        } else if (score > 150) {
            message = 'Amazing! You should be a judge - that\'s a perfect dish!');
        }
        
        return dom;
    }

}

